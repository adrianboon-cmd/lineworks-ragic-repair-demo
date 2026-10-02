const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("LINE WORKS Ragic Repair Demo Running");
});

app.post("/repair", async (req, res) => {

  try {

    console.log("收到報修資料");
    console.log(req.body);

    const payload = {
      "1054240": req.body.reporter,
      "1054241": req.body.equipment,
      "1054242": req.body.description
    };

    console.log("準備送往Ragic");
    console.log(payload);

    res.json({
      success: true,
      message: "報修建立成功",
      data: payload
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      success: false,
      error: err.message
    });

  }

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
