import express, { Express } from 'express';

import loadModules from '../lib/loadModules';

const app = express();


declare module 'express-serve-static-core' {
  export interface Express {
    print: any
  }
}

(async function run(module) {
  await loadModules(app, {
    print: '../usecases/file2.ts'
  })

  app.print("Works!!")
})()
