const gulp = require('gulp');
const del = require('del');
const merge = require('merge2');
const path = require('path');
const shell = require('gulp-shell');
const sourcemaps = require('gulp-sourcemaps');
const tslint = require('gulp-tslint');
const tsc = require('gulp-typescript');

const tsp = tsc.createProject('tsconfig.json');

gulp.task('clean-generated', function _cleanTypescript() {
    const distFiles = ['./dist/**/*.*'];
    return del(distFiles);
});

gulp.task('lint-ts', function _lintTypescript() {
    return tsp.src().pipe(tslint({ formatter: 'verbose' })).pipe(tslint.report());
});

gulp.task('compile-ts', ['clean-generated', 'lint-ts'], function _compileTypescript() {
    const result = tsp.src().pipe(sourcemaps.init()).pipe(tsp());

    return merge([
        result.dts.pipe(gulp.dest('dist')),
        result.js.pipe(sourcemaps.write('.',
            {
                includeContent: false,
                sourceRoot: function _sourceRoot(file) {
                    const srcFile = path.join(file.cwd, file.sourceMap.file);
                    return '../' + path.relative(path.dirname(srcFile), __dirname);
                }
            }
        )).pipe(gulp.dest('dist'))
    ]);
});

gulp.task('npm-files', function _npmFileGathering() {
    return gulp.src(['README.md', 'LICENSE', 'package.json']).pipe(gulp.dest('dist'));
});

gulp.task('publish', ['default'], shell.task([
    'cd dist && pwd && npm publish --access public && npm pack'
]));

gulp.task('default', ['clean-generated', 'lint-ts', 'compile-ts', 'npm-files']);
