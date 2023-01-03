import chalk from 'chalk';
import { Command, program as defaultCommand } from 'commander';
import { promises as fs } from 'node:fs';
import { fileURLToPath } from 'node:url';
import * as path from 'path';
import { findFiles } from './findFiles.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function version(): Promise<string> {
    const pathPackageJson = path.join(__dirname, '../package.json');
    const packageJson = JSON.parse(await fs.readFile(pathPackageJson, 'utf8'));
    return (typeof packageJson === 'object' && packageJson?.version) || '0.0.0';
}

interface CliOptions {
    mustFindFiles?: boolean;
    cwd?: string;
    color?: boolean;
}

export async function app(program = defaultCommand): Promise<Command> {
    program
        .name('list-files')
        .description('List Files')
        .argument('<files...>', 'Files to scan for injected content.')
        .option('--no-must-find-files', 'No error if files are not found.')
        .option('--cwd <dir>', 'Current Directory')
        .option('--color', 'Force color.')
        .option('--no-color', 'Do not use color.')
        .version(await version())
        .action(async (globs: string[], optionsCli: CliOptions, _command: Command) => {
            // console.log('Options: %o', optionsCli);
            program.showHelpAfterError(false);
            if (optionsCli.color !== undefined) {
                chalk.level = optionsCli.color ? 3 : 0;
            }
            console.log(chalk.yellow('Find Files:'));
            const files = await findFiles(globs, optionsCli);
            if (!files.length && optionsCli.mustFindFiles) {
                program.error('No files found.');
            }
            const prefix = ' - ';
            for (const file of files) {
                console.log(chalk.gray(prefix) + chalk.white(file));
            }
            console.log(chalk.green('done.'));
        });

    program.showHelpAfterError();
    return program;
}

export async function run(argv?: string[], program?: Command): Promise<void> {
    const prog = await app(program);
    await prog.parseAsync(argv);
}
