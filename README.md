# template-typescript-cli-app

A Repository Template for TypeScript Command Line Applications / Tools

This is a simple command line tool that lists files matching the provided globs.

## Getting Started

1.  Install [`pnpm`](https://pnppm.io)

1.  `pnpm i`

1.  `pnpm test`

1.  `pnpm run app --help`

    <!--- @@inject: static/help.txt --->

    ```
    Usage: list-files [options] <files...>

    List Files

    Arguments:
      files                 Files to scan for injected content.

    Options:
      --no-must-find-files  No error if files are not found.
      --cwd <dir>           Current Directory
      --color               Force color.
      --no-color            Do not use color.
      -V, --version         output the version number
      -h, --help            display help for command
    ```

    <!--- @@inject-end: static/help.txt --->

1.  `pnpm run app "*"`

    **Example:**

    <!--- @@inject: static/example.txt --->

    ```
    Find Files:
     - LICENSE
     - README.md
     - bin.mjs
     - coverage
     - cspell.config.yaml
     - dist
     - package.json
     - pnpm-lock.yaml
     - release-please-config.json
     - scripts
     - src
     - static
     - tsconfig.json
     - vitest.config.ts
    done.
    ```

    <!--- @@inject-end: static/example.txt --->

## `pnpm` - this template uses pnpm.

See: https://pnpm.io/

## `vitest` - this template uses ViTest for testing.

See: https://vitest.dev/

## ES Modules

This tools is setup to use ES Modules.

## GitHub Workflows

This template includes GitHub Workflows for:

- testing
- code coverage
- lint
- release please (for generating releases)
- CodeQL
