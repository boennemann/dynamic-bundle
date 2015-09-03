module.exports = function (pkg, deps) {
  pkg.bundleDependencies = pkg.bundleDependencies || pkg.bundledDependencies || []

  deps.forEach(function (dep) {
    pkg.bundleDependencies.push(dep)
  })

  if (!pkg.bundleDependencies.length) delete pkg.bundleDependencies

  return pkg
}
