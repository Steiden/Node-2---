const http = require('http');
const staticFile = require("./appModules/http-utils/static-file");
const mimeTypes = require("./appModules/http-utils/mime-types");
const mainRouteController = require("./controllers/main");
const defaultRouteController = require('./controllers/default');

const express = require('express');
const path = require('path');
const gameRouteController = require('./controllers/game');
const voteRouteController = require('./controllers/vote');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {
	mainRouteController(res, "/index.html", ".html");
})

app.get("/game", (req, res) => {
	gameRouteController(res);
})

app.post("/vote", (req, res) => {
	voteRouteController(req, res);
})

app.get("*", (req, res) => {
	defaultRouteController(res, req.url);
})

// const server = http.createServer((req, res) => {
// 	const url = req.url;

// 	switch (url) {
// 		case "/":
// 			mainRouteController(res, "/index.html", ".html");
// 			break;
// 		case "/game":
// 			gameRouteController(res);
// 			break;
// 		case "/vote":
// 			voteRouteController(req, res);
// 			break;
// 		default:
// 			defaultRouteController(res, url);
// 			break;
// 	}
// });

// server.listen(3000);
const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));