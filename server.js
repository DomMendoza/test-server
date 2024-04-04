const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;
require("dotenv").config();

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(process.env.API_URL);
    const data = response.data;
    res.send(data);
  } catch (error) {
    res.status(500).send("Error fetching data from API");
  }
});
app.listen(port, () => console.log(`Listening on port ${port}!`));
