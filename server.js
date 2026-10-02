const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("LINE WORKS Ragic Repair Demo Running");
});

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

app.post("/repair", (req, res) => {

  console.log("收到資料");
  console.log(req.body);

  res.send("報修成功");

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
