import express, { Express } from 'express';

import loadModules from '../lib/loadModules';

const app = express();


// Essa é uma implementação feita pelo usuário, para declarar que há novos métodos na instância da aplicação.

declare module 'express-serve-static-core' {
  export interface Express {
    print: (msg: string) => void;
  }
}

(async function run() {
  await loadModules(app, {
    print: '../usecases/file2.ts'
  })

  app.print("Works!!")
})()
