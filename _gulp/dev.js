const gulp = require('gulp');
const fileinclude = require('gulp-file-include'); //включение нескольких HTML в один HTML
const sass = require('gulp-sass')(require('sass'));//конвертация scss в один css
const server = require('gulp-server-livereload');//автообновлением страницы
const clean = require('gulp-clean');//удалить все
const fs = require('fs'); //доступ к файлам
const plumber = require('gulp-plumber');//отслеживание ошибок при сборке
const notify = require('gulp-notify');//выводит нотификацию на экран об ошибках
const webpack = require('webpack-stream');//сборка JS
const imagemin = require('gulp-imagemin');//сжатие изобржения
const changed = require('gulp-changed');//отслеживиние изменений файла (пропускать при отсутсвии изменений)


const fileIncludeSetting = {
    prefix: '@@',
    basepath: '@file'
  }

const build = './build';

gulp.task('clean:dev', (done) => {
  if (fs.existsSync(build)) {
    return gulp.src(build, {read: false}).pipe(clean({force: true}));
  }
  done(console.log('Нет папки build'));
});

const plumberNotify = (title) => {
    return {
      errorHandler: notify.onError({
        title: title,
        message: 'Error<%= error.message %>',
        sound: false
      })
    }
}


gulp.task('html:dev', () => {
    return gulp
        .src('./src/**/*.html')
        .pipe(changed(build, {hasChanged: changed.compareContents}))
        .pipe(plumber(plumberNotify('HTML')))
        .pipe(fileinclude(fileIncludeSetting))
        .pipe(gulp.dest(build));
});

gulp.task('sass:dev', () => {
    return gulp.src('./src/assets/sass/*.scss')
                .pipe(changed(build))
                .pipe(plumber(plumberNotify('Style')))
                .pipe(sass())
                .pipe(gulp.dest(build));
});

gulp.task('copy-img:dev', function ()  {
  return gulp
    .src(['./src/assets/img/**/*', '!./src/assets/img/**/*.svg'], { encoding: false }) //исключаем svg
      .pipe(changed(build + '/assets/img'))
      .pipe(imagemin({verbose: true}))
      .pipe(gulp.dest(build + '/assets/img'));
});

gulp.task('copy-svg:dev', function ()  { //для svg спрайта
  return gulp
    .src('./src/assets/img/*.svg')
      // .pipe(changed(build + '/assets/img'))
      .pipe(gulp.dest(build + '/assets/img'));
});

gulp.task('copy-fonts:dev', (done) => {
  if (fs.existsSync('./src/assets/fonts/')) {
    return gulp
    .src('./src/assets/fonts/**/*', {encoding: false})
      .pipe(gulp.dest(build + '/assets/fonts'));
  }
  done(console.log('Нет папки fonts'));
});

// gulp.task('js:dev', () => {
//   return gulp
//     .src('./src/js/*.js')
//     .pipe(changed(build + '/js'))
//     .pipe(plumber(plumberNotify('JS')))
//     .pipe(webpack(require('../webpack.config')))
//     .pipe(gulp.dest(build + '/js'));
// });

gulp.task('js:dev', () => { //делаю как раньше один script
  return gulp
    .src('./src/js/*.js')
    .pipe(changed(build + '/js'))
    .pipe(plumber(plumberNotify('JS')))
    .pipe(webpack({
        mode: 'development',
        output: {
            filename: 'script.js'
        },
        watch: false,
        devtool: "source-map",
        module: {
          rules: [
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
            },
          ],
        },
    }))
    .pipe(gulp.dest(build));
});


gulp.task('copy-favicon:dev', (done) => {
  if (fs.existsSync('./favicon.ico')) {
    return gulp
    .src('favicon.ico', {encoding: false})
      .pipe(gulp.dest(build));
  }
  done(console.log('Нет favicon.ico'));
});

const serverOptions = {
  livereload: true,
  open: true
}
gulp.task('server:dev', () => {
  return gulp
    .src(build)
    .pipe(server(serverOptions));
});

gulp.task('watch:dev', () => {
    gulp.watch('./src/assets/sass/**/*.scss', gulp.parallel('sass:dev'));
    gulp.watch('./src/**/*.html', gulp.parallel('html:dev'));
    gulp.watch('./src/assets/img/*.svg', gulp.parallel('copy-svg:dev'));//новый для svg спрайта
    gulp.watch(['./src/assets/img/**/*', '!./src/assets/img/**/*.svg'], gulp.parallel('copy-img:dev'));
    gulp.watch('./src/assets/fonts/**/*', gulp.parallel('copy-fonts:dev'));
    gulp.watch('./src/js/**/*.js', gulp.parallel('js:dev'));
});

gulp.task('build:dev', gulp.parallel('copy-fonts:dev', 'html:dev', 'sass:dev', 'copy-img:dev','copy-svg:dev', 'js:dev', 'copy-favicon:dev'));
