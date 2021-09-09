const app = require('express');
const cors = ('cors') 

const PORT = 8000;

let posts = require('./post.json');

app.get('/posts/', (res, res) => {
    res.send(JSON.stringify(posts));
    res.end();
})

app.listen(PORT, () => {
    console.log('app is running on port: ${PORT}')
})