const express= require('express');
const router=require('express');
const app=express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/about', (req, res) => {
    res.send('About me');
  });

  app.get('/home', (req, res) => {
    res.send('Hiii, Express!');
  });

  app.use('/home', router);
  app.use('/about', router);