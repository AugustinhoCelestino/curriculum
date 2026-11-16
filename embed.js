// Copia curriculum.json para dentro do curriculum.html (uso: node embed.js)
const fs = require("fs");
const json = JSON.stringify(JSON.parse(fs.readFileSync(`${__dirname}/curriculum.json`, "utf8"))).replace(/</g, "\\u003c");
const file = `${__dirname}/curriculum.html`;
const re = /(<script id="embedded" type="application\/json">)[\s\S]*?(<\/script>)/;
fs.writeFileSync(file, fs.readFileSync(file, "utf8").replace(re, (_, a, b) => a + json + b));
console.log("ok");
