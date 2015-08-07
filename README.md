# API тем оформления ProStore

Позволяет осуществлять сборку тем оформления
с использованием препроцессоров:
 
  * [Stylus](https://learnboost.github.io/stylus/)
  * [Sass](http://sass-lang.com/)
  * [Less](http://lesscss.org/)
  * и постпроцессора [PostCSS](https://github.com/postcss/postcss)/[Autoprefixer](https://github.com/postcss/autoprefixer)

```js
var Theme = require('prostore.theme-api');

var theme = new Theme('path/to/theme');

// Get a file relative to theme root
theme.getFile('static/hi');
// path/to/theme/static/hi

// Load theme.json
theme.load(function(err, themeJson) { ... })

// Compile theme options
theme.compileOptions(function(err, options) {
  // options = { "my-color": "#123456", ... }
});

// Build stylesheets using Stylus, LESS or SASS
// as defined in theme.json
theme.buildStylesheets(function(err) { ... })
```
