const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const sessionIndex = require('./config');
const profileCtrl = require('./controllers/profileCtrl');
const useCtrl = require('./controllers/useCtrl');
const port = 8000;

const app = express();

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

// app.use(session({
//   secret: 'hallelujah-booyah!',
//   resave: true,
//   saveUninitialized: true,
// }));

app.use(session({ secret: sessionIndex.sessionSecret }));

const corsOptions = {
  origin: 'http://localhost:8000'
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post('/api/login', useCtrl.login)
