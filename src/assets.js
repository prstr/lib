'use strict';

var glob = require('prostore.glob-utils');

module.exports = exports = function (cwd, prefix, cb) {
  glob(cwd, '**/*.@(js|css)', function (err, files) {
    if (err) return cb(err);
    var assets = files.reduce(function (assets, file) {
      assets[file.path] = prefix + file.path + '?' + file.md5;
      return assets;
    }, {});
    cb(null, assets);
  });
};
