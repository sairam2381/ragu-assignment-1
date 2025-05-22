const express = require("express");
const cors = require("cors");
const database = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const app = express();
const PORT = process.env.PORT || 5001;
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

database.connect();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My CRUD API",
      version: "1.0.0",
      description: "A simple Express CRUD API with Swagger",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
    components: {
      schemas: {
        User: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              description: "User ID",
            },
            name: {
              type: "string",
              description: "User's name",
            },
            email: {
              type: "string",
              description: "User's email",
            },
          },
          required: ["name", "email"],
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};
//Hello
const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.get("/", (req, res) => {
  res.send("Backend is working 2381!");
});

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
