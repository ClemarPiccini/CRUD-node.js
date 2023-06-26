const express = require('express');

//rota crud
const crudRouter = require('./routes/produtos-routes');

const bodyParser = require('body-parser');
const app = express();
const PORT = 3005;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/crud', crudRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
  });
  