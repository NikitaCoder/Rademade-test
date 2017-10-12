//import plugins
import { src, dest, gulp } from 'gulp';
import sass from 'gulp-sass';
import notify from 'gulp-notify';
import autoprefixer from 'gulp-autoprefixer';

const bs = require('browser-sync').create(),
      minCss = require('gulp-minify-css'),
      rename = require("gulp-rename");

//import variables
import { dirs } from './util/paths';


// task
export const buildSass = () => {

  return src(dirs.src + '/sass/styles.sass')
      .pipe(sass({
        indentedSyntax: true,
        cache: false
      }))

      .on('error', notify.onError("Error: <%= error.message %>"))

      .pipe(autoprefixer({
        browsers: ['> 0%']
      }))
      
      .pipe(minCss())
      .pipe(rename({
          suffix: ".min"
      }))

      .pipe(dest(dirs.dest + '/css/'))
      .pipe(bs.stream());
};