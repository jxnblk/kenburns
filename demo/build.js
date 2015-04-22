
var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var pkg = require('../package.json');

var html;
var tpl = _.template(fs.readFileSync(path.join(__dirname, './template.html'), 'utf8'));

pkg.title = 'Kenburns';
pkg.stylesheets = [
  'http://d2v52k3cl9vedd.cloudfront.net/bassdock/1.3.7/bassdock.min.css',
  'demo/demo.css'
];

html = tpl(pkg);

fs.writeFileSync(path.join(__dirname, '../index.html'), html);

