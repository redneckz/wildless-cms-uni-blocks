module.exports = {
  files: 'module/**/*.js',
  from: [
    /\@redneckz\/uni-jsx\/jsx-runtime(['"])/g,
    /\@redneckz\/uni-jsx(['"])/g,
    /((import|export)\s+[^'";]*\s+from\s+['"](\.\/|(\.\.\/)+)[^'";.]*)['"];/g,
  ],
  to: ['/packages/uni-jsx/jsx-runtime.js$1', '/packages/uni-jsx/index.js$1', "$1.js';"],
  encoding: 'utf8',
};
