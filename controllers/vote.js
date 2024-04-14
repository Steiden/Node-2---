const parseBody = require("../appModules/http-utils/parse-body");

async function voteRouteController(req, res) {
	// Код функции
	parseBody(req, (err, body) => {
		if (err) {
			res.statusCode = 500;
			res.end("Internal Server Error");
		}
		console.log(body);
		res.statusCode = 200;
		res.end("Success!");
	});
}

module.exports = voteRouteController;