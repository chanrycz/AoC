// Data modified using Notepad++
var data = [
	["noop", 0],
	["noop", 0],
	["addx", 5],
	["addx", 1],
	["noop", 0],
	["noop", 0],
	["addx", 3],
	["addx", 1],
	["addx", 6],
	["noop", 0],
	["addx", -1],
	["addx", 5],
	["addx", 1],
	["noop", 0],
	["addx", 4],
	["addx", 1],
	["noop", 0],
	["addx", -6],
	["addx", 12],
	["noop", 0],
	["addx", 3],
	["addx", 1],
	["addx", -26],
	["addx", -12],
	["addx", 5],
	["addx", 19],
	["addx", -3],
	["addx", -13],
	["addx", 2],
	["noop", 0],
	["addx", 3],
	["addx", 2],
	["noop", 0],
	["addx", 3],
	["addx", 15],
	["addx", -8],
	["addx", 2],
	["addx", 6],
	["noop", 0],
	["addx", -23],
	["addx", 20],
	["addx", 3],
	["addx", 2],
	["addx", 5],
	["addx", -40],
	["noop", 0],
	["noop", 0],
	["addx", 3],
	["addx", 6],
	["addx", -2],
	["noop", 0],
	["addx", 5],
	["noop", 0],
	["noop", 0],
	["addx", 5],
	["addx", -2],
	["addx", 9],
	["noop", 0],
	["noop", 0],
	["noop", 0],
	["addx", -14],
	["addx", 17],
	["noop", 0],
	["noop", 0],
	["addx", 8],
	["noop", 0],
	["noop", 0],
	["addx", -2],
	["addx", 4],
	["noop", 0],
	["noop", 0],
	["addx", -35],
	["noop", 0],
	["noop", 0],
	["noop", 0],
	["addx", -1],
	["addx", 5],
	["addx", 6],
	["noop", 0],
	["addx", -4],
	["addx", 5],
	["addx", 2],
	["addx", 3],
	["noop", 0],
	["addx", 5],
	["addx", 14],
	["addx", -10],
	["addx", -25],
	["addx", 1],
	["addx", 38],
	["addx", -6],
	["addx", 2],
	["addx", 3],
	["addx", -2],
	["addx", -38],
	["noop", 0],
	["addx", 9],
	["addx", -4],
	["noop", 0],
	["addx", 25],
	["addx", -20],
	["noop", 0],
	["addx", 3],
	["addx", 2],
	["addx", 5],
	["addx", 2],
	["addx", -9],
	["addx", 14],
	["addx", -2],
	["noop", 0],
	["noop", 0],
	["addx", 7],
	["addx", 3],
	["addx", -2],
	["addx", 2],
	["noop", 0],
	["addx", 3],
	["addx", -38],
	["noop", 0],
	["addx", 7],
	["noop", 0],
	["noop", 0],
	["addx", 1],
	["noop", 0],
	["addx", 3],
	["addx", 1],
	["noop", 0],
	["noop", 0],
	["addx", 6],
	["noop", 0],
	["addx", 4],
	["addx", 1],
	["noop", 0],
	["noop", 0],
	["addx", 4],
	["addx", 1],
	["addx", 7],
	["addx", -3],
	["addx", 5],
	["noop", 0],
	["noop", 0],
	["noop", 0],
	["noop", 0],
	["noop", 0],
	["noop", 0],
	["noop", 0]
];
var map = new Map();
var cycleCount = 1;
var x = 1;

data.forEach((item) => {
	var action = item[0];
	var addValue = item[1];
	if (action === "noop") {
		map.set(cycleCount, x);
		cycleCount++;
	} else {
		map.set(cycleCount, x);
		cycleCount++;
		map.set(cycleCount, x);
		x += addValue;
		cycleCount++;
	}
});

// Part 1
var sum = 0;
for (var i = 20; i <= cycleCount; i = i + 40) {
	sum += map.get(i) * i;
}
console.log(sum);

// Part 2
var output = "";
for (var i = 1; i < cycleCount; i++) {
	if (i % 40 !== 0) {
		var tmp = i % 40;
	} else {
		var tmp = 40;
	}

	var diff = tmp - map.get(i);

	if (diff >= 0 && diff <= 2) {
		// output += "#";
        output += "\u2588"
	} else {
		// output += ".";
        output += "\u2800";
	}

	if (i % 40 === 0) {
        console.log(output);
        output = "";
	}
}
