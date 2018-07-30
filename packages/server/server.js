const express = require('express');
const cors = require('cors');

const app = express();
const port = 8001;

const posts = [{
        title: 'hello world',
        description: 'message received'
    }, {
        title: 'hello another world',
        description: 'new message received'
    }]

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');  
});

app.get('/posts', (req, res) => {
    res.send(posts);
})

app.listen(port, () => {
    console.log('running server on port ' + port);
});