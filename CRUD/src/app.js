const express = require('express');

const bodyParser = require('body-parser');
const app = express();
const PORT = 3005;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
  });
  