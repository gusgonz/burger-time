const express = require('express');

let PORT = process.env.PORT || 6900;

let app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("burger/public/"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set('views', 'burger/views');
app.set("view engine", "handlebars");

// Import router and give the server access to them.
const router = require("./burger/controllers/burgers_controller");

app.use(router);

app.listen(PORT, () => {
    console.log(`App now listening at http://localhost:${PORT}`);
});
