require('dotenv').config();
const express = require('express');
const basicAuth = require('express-basic-auth')

const app = express();

app.use(express.json());
app.use(basicAuth({
  users: { [process.env.ID]: process.env.PWD },
  challenge: true,
  realm: 'dialogflow sample',
}));

app.get('/', (req, res, next) => {
  res.json({ msg: 'Dialogflow sample is running !' });
});

app.post('/', (req, res, next) => {
  console.log(JSON.stringify(req.body, null , '  '));
  res.json({
    speech: '予約を承りました。',
    displayText: '予約を承りました。'
  });
});

app.listen(8000, () => {
  console.log('server running at http://localhost:8000');
});
