import * as fs from "node:fs";
import { promisify } from "node:util";

// fs.readdir
// Promiseコンストラクタによる変換
export function readdirWithPromise(path, options) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, options, (err, files) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(files);
    });
  });
}


// util.promisifyによる変換
export const readdirWithPromisify = promisify(fs.readdir);

// fs.stat
// Promiseコンストラクタによる変換
export function statWithPromise(path, options) {
  return new Promise((resolve, reject) => {
    fs.stat(path, options, (err, stats) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(stats);
    });
  });
}

// util.promisifyによる変換
export const statWithPromisify = promisify(fs.stat);