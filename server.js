const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(__dirname + "/dist/apps/merchant-app-shell"));

app.get("/.well-known/assetlinks.json", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/apps/merchant-app-shell/assets/assetlinks.json"));
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/apps/merchant-app-shell/index.html"));
});
app.listen(process.env.PORT || 5000);
