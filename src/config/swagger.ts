import { Express, Request, Response} from 'express'
import swaggerJsDOC from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import {version} from '../../package.json'

const options: swaggerJsDOC.Options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "REST API Pet Care",
        version,
      },
      components: {
        securitySchemas: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
    },
    apis: ["./src/routes.ts", "./src/schema/*.ts"],
  };
  
  const swaggerSpec = swaggerJsDOC(options);
  
  function swaggerDocs(app: Express, port: number) {
    // Swagger page
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  
    // Docs in JSON format
    app.get("/docs.json", (req: Request, res: Response) => {
      res.setHeader("Content-Type", "application/json");
      res.send(swaggerSpec);
    });

  }
  
  export default swaggerDocs;