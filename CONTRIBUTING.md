# Contributing
Thanks for taking the time to contribute to the ChannelApe SDK project!

The following is a guide for contributing to the project. These are mostly guidelines and not rules. We are open for discussion on changes to this document in a Pull Request.

## Table of contents
- [Just have a question?](#just-have-a-question)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Building and Testing](#building-and-testing)
- [Reporting a bug](#reporting-a-bug)
- [Suggesting a new feature](#suggesting-a-new-feature)
- [Pull Request Template](#pull-request-template)
- [Style Guide](#style-guide)
- [Update README if applicable](#update-readme-if-applicable)

## Just have a question?
If you have a question please refrain from opening a GitHub issue. We have an official message board with a detailed FAQ and where the community chimes in with helpful advice if you have questions.
- [ChannelApe Community](https://community.channelape.com/)

## Prerequisites
- NPM

## Useful tools
- vscode (This repo contains configuration files that will get you up and running straight away with vscode)

## Getting Started
ChannelApe uses the [gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) workflow for managing our projects. So depending on what you are working on will dictate which branch to start from and merge to.
- Clone the repository locally.
- New Features/Improvements start from the **'develop'** branch.
- Hotfixes start from the **'master'** branch.
- Run ``npm install `` from the root directory of the project.


## Building and Testing
ChannelApe uses different types of tests to verify functionality. 
1. **Unit tests** - Automated tests that validate a specific piece of functionality within code. Any new code added by the contributor should be covered.
2. **Integration tests** - End to End tests to validate the logical flow of the program. Cucumber is used to automate the integration tests.
3. **Driver Test** - Tests that actually make calls to external dependencies to validate your code works without having to run it locally. These aren't run during the building of the project.

#### Running all tests

``npm run test``

#### Coverage
The goal is to get line and branch coverage to **100%** on new code.

ChannelApe uses [Mocha](https://mochajs.org/) for running tests and [NYC](https://www.npmjs.com/package/nyc) for simple code coverage.

Additionally ChannelApe uses [Stryker](https://stryker-mutator.io/) for running mutations on unit tests. This ensures that tests are well written. The goal for mutation coverage is equal to or greater than the threshold. The threshold is defined in **stryker.conf.js**. If you are to increase mutation coverage, please update the threshold to reflect the new coverage percentage.

## Reporting a bug
If you find a bug and would like to report it, please follow the guidelines below:
- Verify that a bug for this doesn't already exist [here](https://github.com/ChannelApe/channelape-typescript-sdk/issues).
- If a bug is closed and you find that it is possibly still an issue, open a new one and reference the old one.
- Use a clear descriptive title.
- Describe in detail how to reproduce the issue.
- Examples can help if you have them (especially if you can't reliably reproduce).
- Describe expected behavior and why.

## Suggesting a new feature
If you would like to suggest a new feature, please follow the guidelines below:
- Verify that a feature request doesn't already exist [here](https://github.com/ChannelApe/channelape-typescript-sdk/issues).
- Use a clear descriptive title.
- Describe in detail how the new feature should work.
- Examples can help if you have them.
- Describe expected behavior and why.

## Pull Request Template
All of the following should be filled out as descriptive as possible or the pull request will be denied at the maintainers discretion.

#### Title
Pull requests titles should be meaningful to the context of what you are adding/fixing.

#### Description of Changes
What you are adding/fixing and why.

#### Possible Drawbacks
If there are known caveats or tradeoffs with the code, please note them here and why we should consider this change.

## Style Guide

Please review our style guide. ChannelApe will request changes based on this style guide if needed on Pull Requests. The JavaScript style guide can be found [here](https://channelape.github.io/styleguide/js/javascriptguide.html).

## Update README if applicable
If you make any changes that affect the end user, please update the README.md to reflect this.
