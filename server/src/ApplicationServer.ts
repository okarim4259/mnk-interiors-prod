import { Container } from "inversify";
import { bindings } from "./config/ioc/Inversify.config";
import { InversifyExpressServer } from "inversify-express-utils";
import { Application } from "express";
import { ApplicationLoader } from "./ApplicationLoader";

export class ApplicationServer {
  private _instance: InversifyExpressServer;
  private _di_container: Container;
  private _expressApplication: Application;

  constructor() {
    this._expressApplication = new ApplicationLoader()._initExpressApplication();
    this._di_container = new Container();
  }

  private async _initServer(): Promise<void> {
    await this._di_container.loadAsync(bindings);
    this._instance = new InversifyExpressServer(
      this._di_container,
      null,
      { rootPath: "/v1" },
      this._expressApplication
    );
  }

  public async startServer(PORT, NODE_ENV): Promise<void> {
    await this._initServer();
    this._instance.build().listen(PORT, () => {
      console.log(`Application initialized with env: ${NODE_ENV}`);
      console.log(`Server listening on port ${PORT}`);
    });
  }
}
