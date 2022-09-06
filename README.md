# KCC Athletics

## Requirements

- Jekyll
- Nodejs:
  - Use [NVM](https://github.com/nvm-sh/nvm) and `nvm use` to use this projects `.nvmrc` file.
    Or use a bash function to automatically detect the `.nvmrc` file.

## Installation

```bash
git clone git@github.com:KankakeeCommunityCollege/athletics.git
cd athletics
npm i
bundle i
```

## Development

Never push a development build to GitHub!

```bash
npm run development
```

## Production

Productions builds also create a server at `localhost:3000` to preview the production build.

If the build looks good, kill the processes in terminal (<kbd>control</kbd> + <kbd>C</kbd>,)
add, commit, and push all changed files &mdash; including new JS bundles & chunks.

```bash
npm run production
```

## Publishing Workflow

This repository uses two main branches:
- `master`
- `publish`

Any edits pushed to the `publish` branch will go live after a successful build in CloudCannon (which handles FTP.)

### In CloudCannon

CloudCannon syncs with the `master` branch where edits are staged. When ready, the edits can be published by merging the changes into the `publish` branch.

CloudCannon has a mechanism to merge branches; this gives certain users the ability to make their (or others) changes live.

### Locally

When developing locally, you need to use the same two branches to make your changes go live.

You may develop changes in your own branch, if you prefer. Simply merge your branch into the `master` and `publish` branches once ready. Also, be sure to delete merged branches if they were pushed to GitHub.

You may also develop locally in the `master` branch. When ready, commit and push your edits to the `master` branch. Then checkout the `publish` branch, merge the edits (from `master`) and push the changes to publish.
