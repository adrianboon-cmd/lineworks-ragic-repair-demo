const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("LINE WORKS Ragic Repair Demo Running");
});

app.post("/repair", async (req, res) => {

  console.log("收到報修資料");

  console.log(req.body);

  res.json({
    success: true,
    message: "報修建立成功",
    ticketNo: "A20261002-001"
  });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
