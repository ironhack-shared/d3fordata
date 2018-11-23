import * as d3 from "d3";

function generateRandomInteger(min, max) {
	return Math.floor(min + Math.random() * (max + 1 - min))
}

window.arr = []

document.querySelector("#test").onclick = function () {
	d3.json('http://127.0.0.1:3000').then((planets) => {
		window.planets = planets

		planets
			.filter((planet) => {
				return planet.pl_radj !== null
			})
			.forEach((planet, i) => {
				console.log(`${i}: ${planet.pl_name} ${planet.pl_radj}`)
			})
	})
}

window.d3 = d3