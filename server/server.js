const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
app.post('/auth', function (req, res) {
    console.log(req.body);
    const userName = req.body.userName;
    const password = req.body.password;
    if (!userName) {
        res.status(500).send('UserName is required');
        return;
    }
    if (!password) {
        res.status(500).send('Password is required');
        return;
    }
    res.send('Success !');
});
const port = 8000
app.get('/', (req, res) => res.send('App !'));
app.listen(port, () => console.log(` App listening on port ${port}!`))