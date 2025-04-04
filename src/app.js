import express from 'express';
import api from './api/index.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.send('<h2>Welcome to my REST API!</h2>');
});

app.use('/api/v1', api);

app.get('/test', (req, res, next) => {
  req.url = '/cats'; // Modify the URL to match a route in the `api` router
  api(req, res, next); // Pass the request to the `api` router
});


export default app;