async function getData(url) {
	try {
		const res = await fetch(url);
		const data = await res.json();
		return data;
	} catch (err) {
		console.log(err);
	}
}

function getRandomGame(array) {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}

module.exports = { getData, getRandomGame };