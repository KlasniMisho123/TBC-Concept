import express from "express";
import path from "path"; // Import path module for setting up view engine
import ejs from "ejs";   // Ensure ejs is imported for rendering templates

const app = express();
const port = 3000;

// Setup EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Ensure views directory is properly set up

// Define the route for the root path
app.get("/", async (req, res) => {
    try {
        res.render("index", {}); // Render the index.ejs template
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error"); // Handle errors and provide feedback
    }
});

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
