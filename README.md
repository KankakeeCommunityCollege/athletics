# Mega Nav Testing Template

Jekyll + Gulp + Sass + Yarn + BrowserSync + ...

## [Live Github Pages example](https://wdzajicek.github.io/megamenu-test/):

### https://wdzajicek.github.io/megamenu-test/

## Requirements
* Jekyll - `$ gem install jekyll bundler`
* Bundler - `$ gem install bundler`
* Nodejs - I recommend using NVM (Node Version Manager): https://github.com/creationix/nvm
	- .nvmrc file in this repo will make NVM use Node v8.9.4 (to avoid compatibility issues)
	-	Or if you must - Use the installer: https://nodejs.org/
* Gulp - `$ npm install --global gulp-cli` - mac users may need sudo

##  Installation
	$ git clone https://github.com/wdzajicek/megamenu-test.git
	$ cd megamenu-test
	$ npm install		// May need to prefix command with sudo (if not using NVM)
	$ bundle install

## Development
	$ gulp

## Production
	$ gulp --production
