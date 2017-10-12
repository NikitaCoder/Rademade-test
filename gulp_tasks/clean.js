//import plugins
import {watch, parallel, series, gulp} from 'gulp';
import rimraf from 'rimraf';

//import variables
import { dirs } from './util/paths';

export const buildClean = (cb) => {
  return rimraf(dirs.dest, cb);

};