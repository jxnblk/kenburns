
var _ = require('lodash');
var fs = require('fs');
var pkg = require('./package.json');

var html;
var tpl = _.template(fs.readFileSync('template.html', 'utf8'));

pkg.title = _.capitalize(pkg.name);
pkg.stylesheets = [
  'http://d2v52k3cl9vedd.cloudfront.net/bassdock/1.3.7/bassdock.min.css',
  'demo/demo.css'
];

html = tpl(pkg);

fs.writeFileSync('index.html', html);

