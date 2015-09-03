#!/usr/bin/env node

var fs = require('fs')
var path = require('path')

var multimatch = require('multimatch')
var nopt = require('nopt')

var dynamicBundle = require('./')

var options = nopt({
  root: path,
  prefix: String,
  packages: [String, Array]
}, {
  p: '--packages'
})

if (!options.root) options.root = process.cwd()

var pkgPath = path.join(options.root, 'package.json')
var pkg = require(pkgPath)
var deps = options.packages || multimatch(Object.keys(pkg.dependencies), (options.prefix || pkg.name) + '-*')

fs.writeFileSync(pkgPath, JSON.stringify(dynamicBundle(pkg, deps), null, 2))
