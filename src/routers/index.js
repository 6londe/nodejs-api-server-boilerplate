import httpStatus from "http-status";
import v1 from "./v1";
import swagger from "./swagger";
import { handleError } from "../utils/api-handler";

export default (app) => {
  app.use("/v1", v1);
  app.use("/swagger", swagger);

  app.use(handleError);
  app.use((req, res) =>
    res.status(httpStatus.NOT_FOUND).send({ message: "API not found" })
  );
};
