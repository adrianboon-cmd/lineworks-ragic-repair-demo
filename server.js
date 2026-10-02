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
              font-family: Arial;
              padding:20px;
          }

          input,textarea{
              width:100%;
              padding:10px;
              margin-top:5px;
              margin-bottom:15px;
          }

          button{
              width:100%;
              padding:12px;
              background:#00c73c;
              color:white;
              border:none;
              border-radius:5px;
          }
      </style>
  </head>
  <body>

      <h2>🔧 設備報修</h2>

      <form method="POST" action="/repairl>
          <input name="reporter">

          <label>設備名稱</label>
          <input name="equipment">

          <label>故障描述</label>
          <textarea name="description"></textarea>

          <button type="submit">
           
