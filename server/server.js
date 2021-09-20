const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { PORT } = process.env;
const feed = require("./routes/feed")

app.use(cors());
app.use(express.json());

app.use("/feed", feed);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
