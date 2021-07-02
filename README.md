# wamps

wamps = what are my package scripts

A super small tool to view package.json scripts easily from command line, and soon you'll optionally be able to read a YAML file describing package.json scripts by the name of `mps.yaml`

## Installation

```shell
# Yarn
yarn global add wamps

# NPM
npm i -g wamps

# pnpm
pnpm i -g wamps
```

## Usage

While in the same directory as a package.json file, run `wamps`

## Planned Features


### Features
- support for `mps.yaml`
  - A basic (or verbose) yaml file to describe package.json scripts
  - Why "mps"? It stands for "my package scripts"

### Commands

- `wamps mps.yaml`
  - should read and parse the `mps.yaml` file and have the correct output based off it
- `wamps -g` || `wamps --generate`
  - should generate a basic `mps.yaml` file to be filled out
- `wamps -nc` || `wamps --noColor`
  - Same as normal command just without color

### Misc

- Logo soon!