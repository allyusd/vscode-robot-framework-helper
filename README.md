# Robot Framework Helper

Robot Framework Helper

## Features

### Replace clipboard text include underscore and space
Use Ctrl + Shift + F12 will change clipboard text

When text include space will replace all space to Underscore
When text include Underscore will replace all Underscore to space

#### Example:
Should Be Equal => Should_Be_Equal

Should_Be_Equal => Should Be Equal

### Change Select Text To Robot Framework Case
Use Shift + C change select text to robot framework case

#### Example:
should_be_equal => Should Be Equal

## Requirements

Keybinding Ctrl + Shift + F12 will replace default keybingding.

## Release Notes

### 0.0.2 - 2019-02-25
### Added
 - Change Select Text To Robot Framework Case (Shift + C)
### Changed
 - **BREAKING** command prefix change to rfhelper

### 0.0.1 - 2019-02-23
### Added
 - Replace clipboard text include underscore and space (Ctrl + Shift + F12)
