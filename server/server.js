const express = require("express");
const app = express();

app.listen(process.env.PORT || 8080);

const staticDist = "./dist/pokedex-game";

app.use(express.static(staticDist));

// root
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: staticDist });
});

app.get('*', (req, res) => {
  res.sendFile("index.html", { root: staticDist });
})