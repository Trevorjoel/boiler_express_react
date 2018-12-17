const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {

    res.send({
        num1 : 10,
        num2: 1,
        runMsg : 'Node server running on Port 5000',
       });
});