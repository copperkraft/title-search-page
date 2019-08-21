const express = require('express');

module.exports = (port = 3000) => {
    const app = express();

    app.use(express.static('public'));

    app.get('/api', function (req, res) {
        res.send('Api: Hello World!');
    });

    app.listen(port, function () {
        console.log(`app listening on port ${port}`);
    });
};
