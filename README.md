# KCC Athletics

-----

## Requirements

- Jekyll
- Nodejs:
  - Use [NVM](https://github.com/nvm-sh/nvm) and `nvm use` to use this projects `.nvmrc` file.
    Or use a bash function to automatically detect the `.nvmrc` file.

The ruby version is specified in the `.ruby-version` file.

---

<br>

## Installation

```bash
git clone git@github.com:KankakeeCommunityCollege/athletics.git
cd athletics
npm i
bundle i
```

---

<br>

## Development

Never push a development build to GitHub!

```bash
npm run development
```

---

<br>

## Production

Productions builds also create a server at `localhost:3000` to preview the production build.

If the build looks good, kill the processes in terminal (<kbd>control</kbd> + <kbd>C</kbd>,)
add, commit, and push all changed files &mdash; including new JS bundles & chunks.

```bash
npm run production
```

---

<br>

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

---

<br>

## Accessibility testing with Pa11y

Pa11y is used for automated and manual accessibility testing.

### Automated testing

The GitHub repo uses an action to automatically run pa11y after every commit to the `master` branch. This helps catch
things like missing alt text or other issues introduced by non-technical editors of the site in CloudCannon.

### Manual testing

`pa11y` and `pa11y-ci` are used in the local project files to test for accessibility issues. The `pa11y` script will run
on a local build of the project and test the files in `_site/` for accessibility issues. The `pa11y-ci` script runs using
the live `sitemap.xml` file of the website.

At this time, **the `pa11y-ci` script picks up more issues than the plain `pa11y` script.** The `pa11y` script doesn't seem to render or test all the dynamic content built with JavaScript so `pa11y-ci` will usually give more accurate results. The hope is to get `pa11y` configured better so that JS is rendered and dynamic content tested.

```bash
## Run pa11y on the local build
npm run test:pa11y
## Run pa11y-ci on the live sitemap
npm run test:pa11y-ci
```

Both scripts take the same arguments:

| Argument | Name | Description |
| ---------|------|-------------|
| `-o`     | Output     | Output the results to a log file (`pa11y-log.*.txt` and `pa11y-ci-log.*.txt`) |
| `-s`     | Skip build | Skip doing a Jekyll build prior to running `pa11y` (does not apply to `pa11y-ci`) |

Examples:

```bash
# Pa11y examples:
## Run pa11y and output the results to a log file
npm run test:pa11y -- -o
## Run pa11y, skip the jekyll build, and output the results to a log file
npm run test:pa11y -- -s -o

# Pa11y CI examples:
## Run pa11y-ci and output the results to a log file
npm run test:pa11y-ci -- -o
## This script does the same as passing the `-o` flag to `test:pa11-ci`
npm run test:pa11y-ci-log
```

### `pa11y-ci-sitemap.xml`

Since the sitemap contains PDF files, there is a separate sitemap file for use with `pa11y-ci` that excludes them.
The file `pa11y-ci-sitemap.xml` is used for this purpose. You can run `pa11y-ci` against the standard `sitemap.xml`
file but it will take a lot longer and the resulting PDF errors are not helpful.

### Pa11y CI logs/reporting

When running `npm run test:pa11y-ci -- -o` or `npm run test:pa11y-ci-log`, the log file is created in the `./pa11y-ci-logs/` folder. These logs *should* be committed to GitHub to document our ongoing accessibility testing and results.

**If any errors are found, the log file should be duplicated with the filename suffix `_remediation.txt` and the fix documented there.**
