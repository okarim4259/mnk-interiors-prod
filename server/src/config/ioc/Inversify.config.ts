import { AsyncContainerModule, interfaces } from "inversify";
import {
  asyncLoadControllers,
  bindExternalApiServices
} from "./Inversify.module_loader";

export const bindings = new AsyncContainerModule(
  async (bind: interfaces.Bind) => {
    try {
      await asyncLoadControllers();
      bindExternalApiServices(bind);
    } catch (err) {}
  }
);
