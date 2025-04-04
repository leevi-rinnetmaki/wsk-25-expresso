import express from 'express';
const app = express();

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

app.get('/api/v1/cat', (req, res) => {
    const cat = {
      cat_id: 246,
      name: 'Kerttu-poika',
      birthdate: '2006-11-05',
      weight: 8,
      owner: 'ile',
      image: 'https://loremflickr.com/320/240/cat',
    };
  
    res.json(cat);
  });


export default app;