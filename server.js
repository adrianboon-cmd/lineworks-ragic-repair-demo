const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {

    res.send(`
    <html>
      <body>

        <h2>設備報修</h2>

        /repair

          <p>填報人</p>
          <input type="text" name="reporter" />

          <p>設備名稱</p>
          <input type="text" name="equipment" />

          <p>故障描述</p>
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

app.post("/repair", (req, res) => {

    console.log("收到資料");
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
