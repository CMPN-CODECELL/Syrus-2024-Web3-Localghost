const express = require("express");
const axios = require("axios"); // Import axios

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", async (req, res) => {
  // Make the route handler async
  const url = "https://www.npoint.io" + req.url;

  // Use axios to make the HTTP request
  try {
    const response = await axios({
      method: req.method, // Use the same HTTP method as the incoming request
      url: url,
      timeout: 3000,
      data: req.body, // Pass the request body along
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Forward the response from the target server to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).send("Error occurred while proxying the request.");
  }
});

app.listen(3000, () => {
  console.log("CORS proxy server running on port  3000");
});
