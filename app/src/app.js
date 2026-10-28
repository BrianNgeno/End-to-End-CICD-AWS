
const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello from AWS CI/CD Capstone Project!");
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy"
    });
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`App running on port ${port}`);
    });
}

module.exports = app;