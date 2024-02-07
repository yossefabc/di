const express = require('express')
const app = express()



app.get('/', (req, res) => {
    res.send('Hello, Expressssss!');
});

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})
//4.
const dataService = require('./dataService');


async function fetchData() {
  const posts = await dataService.fetchPosts();
  console.log(posts);
}


fetchData();