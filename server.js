const express = require('express');
const app = express();
const PORT = 3000;

// mengakses file html, css, js di folder "public"
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
