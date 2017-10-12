//import plugins
import {src, dest, gulp} from 'gulp';
import pug from 'gulp-pug';
import gulpIf from 'gulp-if';
import notify from 'gulp-notify';

const emitty = require('emitty').setup('src/templates', 'pug');
const bs = require('browser-sync').create();

//import variables
import { dirs } from './util/paths';

export const buildPug = () => {

  return src(dirs.src + "/templates/pages/*.pug")
      .pipe(gulpIf(global.watch, emitty.stream()))

      .pipe(pug())

      .on('error', notify.onError("Error: <%= error.message %>"))

      .pipe(dest(dirs.dest))
      .pipe(bs.stream());

};