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

    <!--- @@inject: static/example.md --->

    **Example:**

    <pre>
    <span style="color:#A50">Find Files:<span style="color:#FFF">
    <span style="color:#555"> - <span style="color:#FFF"><span style="color:#AAA">LICENSE<span style="color:#FFF">
    <span style="color:#555"> - <span style="color:#FFF"><span style="color:#AAA">README.md<span style="color:#FFF">
    <span style="color:#555"> - <span style="color:#FFF"><span style="color:#AAA">bin.mjs<span style="color:#FFF">
    <span style="color:#555"> - <span style="color:#FFF"><span style="color:#AAA">coverage<span style="color:#FFF">
    <span style="color:#555"> - <span style="color:#FFF"><span style="color:#AAA">cspell.config.yaml<span style="color:#FFF">
    <span style="color:#555"> - <span style="color:#FFF"><span style="color:#AAA">dist<span style="color:#FFF">
    <span style="color:#555"> - <span style="color:#FFF"><span style="color:#AAA">package.json<span style="color:#FFF">
    <span style="color:#555"> - <span style="color:#FFF"><span style="color:#AAA">pnpm-lock.yaml<span style="color:#FFF">
    <span style="color:#555"> - <span style="color:#FFF"><span style="color:#AAA">release-please-config.json<span style="color:#FFF">
    <span style="color:#555"> - <span style="color:#FFF"><span style="color:#AAA">scripts<span style="color:#FFF">
    <span style="color:#555"> - <span style="color:#FFF"><span style="color:#AAA">src<span style="color:#FFF">
    <span style="color:#555"> - <span style="color:#FFF"><span style="color:#AAA">static<span style="color:#FFF">
    <span style="color:#555"> - <span style="color:#FFF"><span style="color:#AAA">tsconfig.json<span style="color:#FFF">
    <span style="color:#555"> - <span style="color:#FFF"><span style="color:#AAA">vitest.config.ts<span style="color:#FFF">
    <span style="color:#0A0">done.<span style="color:#FFF">
    </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></pre>

    <!--- @@inject-end: static/example.md --->

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
