const express = require("express");
const app = express();
const port = 8000;

// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the routes function from our routes.js file
const AllMyRoutes = require("./routes/jokes.routes");
AllMyRoutes(app);

app.listen( port, () => console.log(`Listening on port: ${port}`) );
