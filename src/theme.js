'use strict';

var path = require('path')
  , fs = require('fs-extra')
  , glob = require('prostore.glob-utils');

var Theme = module.exports = exports = function (root) {
  if (!(this instanceof Theme))
    return new Theme(root);
  this.root = root;
};

Theme.prototype.getFile = function (file) {
  return path.join(this.root, file);
};

Theme.prototype.copy = function (dest, cb) {
  glob.copy(this.root, '**/*', dest, cb);
};

Theme.prototype.load = function (cb) {
  var theme = this;
  if (theme._themeJson)
    return cb(null, theme._themeJson);
  fs.readJson(theme.getFile('theme.json'), 'utf-8', function (err, themeJson) {
    if (err) return cb(err);
    theme._themeJson = themeJson;
    cb(null, themeJson);
  });
};
