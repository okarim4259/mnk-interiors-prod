import {
  controller,
  httpGet,
  TYPE,
  request,
  response,
  requestParam
} from "inversify-express-utils";
import { inject } from "inversify";
import { TYPE_DATASERVICES } from "../config/ioc/Inversify.type_definitions";
import { YelpApiConsumer } from "../dataservices/externalapi/YelpApiConsumer";
import { Request, Response } from "express";

@controller("/demo")
export class DemoController {
  @inject(TYPE_DATASERVICES.YelpApiConsumer)
  private readonly _yelpApi: YelpApiConsumer;

  @httpGet("/")
  public async getDemo() {
    try {
      return { msg: "Hello From Dev" };
    } catch (err) {
      console.log(err);
    }
  }

  @httpGet("/event-location/:location/:limit")
  public async getEventsByLocation(
    @request() req: Request,
    @requestParam("location") location: String,
    @requestParam("limit") limit: String,
    @response() res: Response
  ) {
    try {
      const data = await this._yelpApi.getEventsByLocation(location, limit);
      return res.status(200).json(data);
    } catch (err) {
      console.log(err);
    }
  }
}
