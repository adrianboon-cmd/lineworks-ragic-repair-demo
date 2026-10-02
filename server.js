const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/form", (req, res) => {
  res.send("LINE WORKS Ragic Repair Demo Running");
});

app.get("/form", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>設備報修</title>
</head>
<body>

<h2>🔧 設備報修</h2>

/repair

<label>填報人</label>
<br>
<input type="text" name="reporter">
<br><br>

<label>設備名稱</label>
<br>
<input type="text" name="equipment">
<br><br>

<label>故障描述</label>
<br>
<textarea name="description"></textarea>
<br><br>

<button type="submit">
送出報修
</button>

</form>

</body>
</html>
`);
});

app.post("/repair", async (req, res) => {

  console.log("========收到報修========");
  console.log(req.body);

  res.send(`
<h2>✅ 報修成功</h2>

<p>填報人：${req.body.reporter}</p>

<p>設備名稱：${req.body.equipment}</p>

<p>故障描述：${req.body.description}</p>
`);

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
