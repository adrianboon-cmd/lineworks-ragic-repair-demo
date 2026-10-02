const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("LINE WORKS Ragic Repair Demo Running");
});

app.get("/form", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>設備報修</title>
<style>
body{
  font-family: Arial, sans-serif;
  padding:20px;
}

input, textarea{
  width:100%;
  padding:10px;
  margin-bottom:15px;
}

button{
  width:100%;
  padding:12px;
  background:#00c73c;
  color:white;
  border:none;
  cursor:pointer;
}
</style>
</head>

<body>

<h2>🔧 設備報修</h2>

/repair

<label>填報人</label>
<input type="text" name="reporter" required>

<label>設備名稱</label>
<input type="text" name="equipment" required>

<label>故障描述</label>
<textarea name="description" rows="5"></textarea>

<button type="submit">
送出報修
</button>

</form>

</body>
</html>
`);
});

app.post("/repair", (req, res) => {

  console.log("========收到報修========");
  console.log(req.body);

  res.send(`
<!DOCTYPE html>
<html>
<body>

<h2>✅ 報修成功</h2>

<p>填報人：${req.body.reporter}</p>
<p>設備名稱：${req.body.equipment}</p>
<p>故障描述：${req.body.description}</p>

</body>
</html>
`);

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
