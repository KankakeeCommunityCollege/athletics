var gulp = require('gulp');
var del = require('del');
var fs = require('fs');
var yaml = require('js-yaml');

function loadConfig() {
  var ymlFile = fs.readFileSync('gulpconfig.yml', 'utf8');
  return yaml.load(ymlFile);
}
var config = loadConfig();
module.exports = config;

gulp.task('clean', function(done) { //cleans _site dir upon execution of gulp command
  del(config.clean);
  done();
});
