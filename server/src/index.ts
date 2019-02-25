import "reflect-metadata";
import { properties } from "./config/properties/ApplicationProperties";
import { ApplicationServer } from "./ApplicationServer";

(async () => {
  try {
    const server: ApplicationServer = new ApplicationServer();
    await server.startServer(properties.PORT, properties.NODE_ENV);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
