import * as d3 from "d3";

function generateRandomInteger(min, max) {
	return Math.floor(min + Math.random() * (max + 1 - min))
}

window.arr = []

document.querySelector("#test").onclick = function () {
	window.arr = d3.range(generateRandomInteger(1, 10)).map(function (val) {
		return generateRandomInteger(15, 20)
	})

	console.log(arr)

	d3.selectAll('p')
		.data(arr)
		.exit()
		.remove()

	d3.selectAll('p')
		.data(arr)
		.enter()
		.append('p')

	d3.selectAll('p')	
		.html(function (d) {
			return d;
		})
		

}

// d3.interval(function () {
// 	window.arr = d3.range(generateRandomInteger(1, 20)).map(function (val) {
// 		return generateRandomInteger(15, 20)
// 	})

// 	console.log(arr)

// 	d3.selectAll('p')
// 		.data(arr)
// 		.exit()
// 		.remove()


// 	d3.selectAll('p')
// 		.data(arr)
// 		.enter()
// 		.append('p')
// 		.html(function (d) {
// 			return d;
// 		})
// 	// 	.transition()
// 	// 	.style("font-size", function (d) {
// 	// 		return d + "px";
// 	// 	});
// }, 2000)

window.d3 = d3