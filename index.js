var glob = require('glob'),
    Promise = require('bluebird'),
    path = require('path'),
    _ = require('lodash'),
    yaml = require('js-yaml'),
    fs = Promise.promisifyAll(require('fs'));

function getFiles(matcher) {
  return new Promise(function(res, rej) {
    glob(path.join(process.cwd(), matcher), function(err, files) {
      if (err) {
        rej(err);
      }

      res(files)
    })
  });
}

function validate(matcher) {
  return getFiles(matcher)
  .then(function(files) {
    return Promise.map(files, function(file) {
      return fs.readFileAsync(file, 'utf8');
    })
  })
  .then(function(fileContents) {
    return Promise.map(fileContents, function(content) {
        return yaml.safeLoad(content)
    })
  })
}

module.exports = validate;
