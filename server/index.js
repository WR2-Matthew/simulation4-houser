require('dotenv').config();
const massive = require('massive'),
  express = require('express'),
  app = express(),
  session = require('express-session'),
  { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;

app.use(express.json());

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  cookie: { maxAge: 1000 * 60 * 60 * 24 }
}));

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
}).then(db => {
  app.set('db', db)
  console.log('Initiated the DB!')
}).catch(err => {
  console.log(err)
});

app.listen(SERVER_PORT, () => console.log(`We are running on port ${SERVER_PORT}`));