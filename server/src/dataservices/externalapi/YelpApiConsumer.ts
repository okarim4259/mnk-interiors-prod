import { injectable } from "inversify";
import fetch from "node-fetch";
import { YELP_CONFIG } from "../../config/properties/ApplicationProperties";
import { EHttpMethods } from "../../utilities/http/EHttpMethods";

@injectable()
export class YelpApiConsumer {
  private readonly _apiClientId = YELP_CONFIG.CLIENT_ID;
  private readonly _apiKey = YELP_CONFIG.API_KEY;
  private readonly _apiBaseUrl = YELP_CONFIG.API_BASE_URL;

  constructor() {}

  private buildGetRequestOption(): any {
    return {
      method: EHttpMethods.GET,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this._apiKey}`
      }
    };
  }

  public async getEventsByLocation(location, limit) {
    const queryString = `location=${location}&limit=${limit}`;
    const requestOptions = this.buildGetRequestOption();
    const res = await fetch(
      `${this._apiBaseUrl}/events?${queryString}`,
      requestOptions
    );
    const json = await res.json();
    return json;
  }

  public async getEventByLocationTime(location, isoTime, limit) {
    const queryString = `location=${location}&start_time=${isoTime}&limit=20`;
    const requestOptions = this.buildGetRequestOption();
    const res = await fetch(
      `${this._apiBaseUrl}/events?${queryString}`,
      requestOptions
    );
    const json = await res.json();
    return json;
  }
}
