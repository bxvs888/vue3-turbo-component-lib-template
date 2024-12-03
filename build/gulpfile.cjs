const gulp = require('gulp');
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const clean = require('gulp-clean');

const paths = {
  hooks: '../packages/hooks/src/**/*',
  directives: '../packages/directives/src/**/*',
  utils: '../packages/utils/src/**/*',
  ui: '../packages/ui/src/**/*',
  dist: 'dist',
};

const tsProject = ts.createProject('./tsconfig.json', {
  declaration: true,
});

// 清理 dist 目录
gulp.task('clean', function () {
  return gulp.src(paths.dist, { allowEmpty: true, read: false }).pipe(clean());
});

// 编译并压缩 hooks
gulp.task('hooks', function () {
  return gulp
    .src(paths.hooks)
    .pipe(ts())
    .pipe(
      babel({
        presets: ['@babel/env'],
      }),
    )
    .pipe(uglify())
    .pipe(gulp.dest(`${paths.dist}/hooks`));
});

// 编译并压缩 directives
gulp.task('directives', function () {
  return gulp
    .src(paths.directives)
    .pipe(ts())
    .pipe(
      babel({
        presets: ['@babel/env'],
      }),
    )
    .pipe(uglify())
    .pipe(gulp.dest(`${paths.dist}/directives`));
});

// 编译并压缩 utils
gulp.task('utils', function () {
  return gulp
    .src(paths.utils)
    .pipe(ts())
    .pipe(
      babel({
        presets: ['@babel/env'],
      }),
    )
    .pipe(uglify())
    .pipe(gulp.dest(`${paths.dist}/utils`));
});

// 编译并压缩 UI 组件
gulp.task('ui', function () {
  return gulp
    .src(paths.ui)
    .pipe(ts())
    .pipe(
      babel({
        presets: ['@babel/env'],
      }),
    )
    .pipe(uglify())
    .pipe(gulp.dest(`${paths.dist}/ui`));
});

// 默认任务，运行所有任务
gulp.task('default', gulp.series('clean', gulp.parallel('hooks', 'directives', 'utils'))); // 'ui'
