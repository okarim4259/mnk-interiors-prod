import * as express from "express";
import * as bodyParser from "body-parser";

export class ApplicationLoader {
  private _app: express.Application;

  constructor() {
    this._app = express();
    this._initApplicationMiddleware();
  }

  private _initApplicationMiddleware(): void {
    this._app.use(bodyParser.json());
    this._app.use(bodyParser.urlencoded({ extended: false }));
  }

  public _initExpressApplication(): express.Application {
    return this._app;
  }
}
