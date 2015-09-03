# dynamic-bundle

> dynamically add dependencies from npm to the bundle before publishing

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Dependency Status](https://david-dm.org/boennemann/dynamic-bundle/master.svg)](https://david-dm.org/boennemann/dynamic-bundle/master)
[![devDependency Status](https://david-dm.org/boennemann/dynamic-bundle/master/dev-status.svg)](https://david-dm.org/boennemann/dynamic-bundle/master#info=devDependencies)
[![Build Status](https://travis-ci.org/boennemann/dynamic-bundle.svg?branch=master)](https://travis-ci.org/boennemann/dynamic-bundle)

```bash
dynamic-bundle
```

Adds all dependencies that match `pkg.name + '-*'` to `bundleDependencies`

```bash
dynamic-bundle --prefix foo
```

Adds all dependencies that match `foo-*'` to `bundleDependencies`

```bash
dynamic-bundle -p foo -p bar -p baz
```

Adds foo, bar and baz to `bundleDependencies`
