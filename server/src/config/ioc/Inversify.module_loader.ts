import { TYPE_DATASERVICES } from "./Inversify.type_definitions";
import { interfaces } from "inversify";
import { YelpApiConsumer } from "../../dataservices/externalapi/YelpApiConsumer";

export const asyncLoadControllers = async (): Promise<void> => {
  await require("../../controllers/DemoController");
};

export const bindExternalApiServices = (bind: interfaces.Bind): void => {
  bind<YelpApiConsumer>(TYPE_DATASERVICES.YelpApiConsumer).to(YelpApiConsumer);
};
