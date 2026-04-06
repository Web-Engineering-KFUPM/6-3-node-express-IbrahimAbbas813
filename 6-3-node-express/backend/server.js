// TODO 1: Import and Create express app instance
import express from "express";
const app = express();
// Creates an instance of the Express application

// TODO 1: Define server port
const PORT = 3000;
// Sets the port number on which the server will listen

// TODO 4: Import and Apply CORS middleware
import cors from "cors";
app.use(cors());
// Enables Cross-Origin Resource Sharing for all routes

// TODO 5: Import and apply Morgan middleware
import morgan from "morgan";
app.use(morgan("dev"));
// Logs HTTP requests in development format

// TODO 6.1: Create root route "/"
app.get("/", (req, res) => {
  res.send("Server is running");
});
// Responds with a message indicating the server is running

// TODO 6.2: Create "/api/quote" route
import { getRandomQuote } from "./quotes.js";

app.get("/api/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });
});
// Returns a random quote in JSON format

// TODO 7: Start server using app.listen
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
// Starts the server and listens on the specified port