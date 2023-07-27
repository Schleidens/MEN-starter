const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/route");
const connectDB = require("./db/db");

const detectPort = require("detect-port-alt");

// Loads the environment variables from .env into process.env
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB using the connector
connectDB();

// Routes
app.use("/api/items", routes);

// Function to start the server on the specified port
function startServer(port) {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

// Get the specified port from environment variables or use 3000 as the default
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

// Detect if the specified port is in use
detectPort(port)
  .then((availablePort) => {
    // The specified port is available, start the server on it
    if (port === availablePort) {
      startServer(port);
    } else {
      // The specified port is not available, use the next available port
      console.log(
        `Port ${port} is already in use. Using port ${availablePort} instead.`
      );
      startServer(availablePort);
    }
  })
  .catch((err) => {
    console.error("Error detecting port:", err.message);
    process.exit(1); // Exit the process with failure
  });
