const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("LINE WORKS Ragic Repair Demo Running");
});

app.post("/repair", async (req, res) => {

  try {

    console.log("========收到報修========");
    console.log(JSON.stringify(req.body, null, 2));

    res.json({
      success: true,
      message: "報修建立成功"
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      success: false
    });

  }

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
