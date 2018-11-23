import * as d3 from "d3";

function generateRandomInteger(min, max) {
	return Math.floor(min + Math.random() * (max + 1 - min))
}

d3.json('http://127.0.0.1:3000').then((planets) => {
	const minRadius = d3.min(planets, function (d) { return d.pl_radj });
	const maxRadius = d3.max(planets, function (d) { return d.pl_radj });

	window.scale = d3.scaleLinear().domain([minRadius, maxRadius]).range([20, 80])

	var r = 100;
	var c = 0;

	function location (d, i) {
		if (i % 15 === 0) {
			r+=100;
			c = 0;
		}

		c += 70;

		console.log(c)

		return {
			x: c,
			y: r
		}
	}

	planets.map((planet, i) => {
		planet.r = scale(planet.pl_radj)
		let loc = location(planet, i)
		planet.x = loc.x;
		planet.y = loc.y;

		return planet
	})

	debugger

	var g = d3
		.select("#planets")
		.selectAll("g")
		.data(planets)
		.enter()
		.append("g")
		.attr("transform", (d) => `translate(${d.x}, ${d.y})`)

	d3
		.selectAll("g")
		.append("circle")
		.attr("r", (d) => scale(d.pl_radj))
		.attr("cx", 0)
		.style("fill", ()=>`rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`)

	d3
		.selectAll("g")
		.append("text")
		.attr("y", 50)
		.attr("text-anchor", "end")
		.html((d) => d.pl_name)

})

window.d3 = d3