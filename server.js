const express = require("express");
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, function () {

	console.log('listening on port 3000');
});

var router = express.Router();
app.use('/home', router);

router.use((req, res, next) => {
	next();
});

var route = router.route('/');
route.get((req, res, next) => {
	res.render("index.html");
});
