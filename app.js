import express from 'express';

import cors from 'cors';
import passport from './auth';
import router from './routes/index';

// Set up the express app
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://ask-it-client.herokuapp.com');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});
app.use(express.json());
app.use(passport.initialize());
app.use(express.urlencoded());
app.use(router);
app.use(cors());
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
