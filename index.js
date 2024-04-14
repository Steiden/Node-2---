const http = require('http');

const server = http.createServer((req, res) => {
	const url = req.url;

	let text = "";
	switch (url) {
		case "/":
			text = "Спасибо за запрос, скоро придумаю, что тебе ответить";
			break;
		case "/game":
			text = "Спасибо за запрос, скоро придумаю, что тебе ответить"
			break;
		case "/vote":
			if(req.method === "POST") {
				console.log(req.body);
			}

			text = "Спасибо за запрос, скоро придумаю, что тебе ответить"
			break;
		default:
			res.statusCode = 404;
	}

	res.end(text);
});

server.listen(3000);