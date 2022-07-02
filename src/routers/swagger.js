import express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import pkg from "../../package.json";

export const { version, name: title, description } = pkg;

const specification = swaggerJsdoc({
  swaggerDefinition: {
    info: { title, version, description },
    basePath: "/",
  },
  apis: [`${__dirname}/v1/*.js`],
});
const options = {
  customCss: ".swagger-ui .topbar { display: none }",
  swaggerOptions: { docExpansion: "none" },
};

const router = express.Router();
router.use("/", swaggerUI.serve, swaggerUI.setup(specification, options));

export default router;
