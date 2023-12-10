let games = [
	[
		{ red: "9", green: "2", blue: "13" },
		{ blue: "10", green: "2", red: "13" },
		{ blue: "8", red: "3", green: "6" },
		{ green: "5", red: "2", blue: "1" },
	],
	[{ green: "2", blue: "2", red: "16" }, { red: "14" }, { red: "13", green: "13", blue: "2" }, { red: "7", green: "7", blue: "2" }],
	[
		{ red: "6", green: "4", blue: "7" },
		{ blue: "7", red: "9", green: "3" },
		{ red: "2", green: "4" },
		{ red: "6", blue: "2" },
		{ blue: "7", red: "9", green: "5" },
	],
	[
		{ red: "8", green: "2", blue: "2" },
		{ red: "5", blue: "2", green: "3" },
		{ red: "7", green: "9", blue: "2" },
		{ blue: "10", green: "16", red: "1" },
		{ blue: "6", green: "1", red: "8" },
	],
	[
		{ blue: "12", red: "6", green: "1" },
		{ green: "10", blue: "8", red: "15" },
		{ green: "1", red: "12", blue: "11" },
		{ green: "3", blue: "11", red: "1" },
		{ blue: "7", red: "5", green: "5" },
		{ green: "11", blue: "2" },
	],
	[{ blue: "3", green: "10", red: "2" }, { green: "5" }, { blue: "6", red: "3" }],
	[
		{ green: "3", blue: "1", red: "4" },
		{ red: "3", blue: "13" },
		{ blue: "14", red: "6" },
		{ green: "7", blue: "15", red: "9" },
		{ green: "1", red: "3", blue: "9" },
	],
	[{ red: "19", green: "1", blue: "4" }, { blue: "14" }, { red: "2", blue: "3" }],
	[
		{ green: "5", blue: "14", red: "3" },
		{ red: "8", blue: "16", green: "5" },
		{ green: "12", red: "15", blue: "4" },
		{ blue: "14", red: "17" },
		{ red: "6", blue: "11", green: "8" },
	],
	[
		{ red: "9", blue: "7" },
		{ red: "6", blue: "3", green: "4" },
		{ red: "1", green: "5", blue: "3" },
		{ red: "5", green: "9", blue: "6" },
		{ blue: "7", green: "6" },
	],
	[{ blue: "2", green: "10" }, { green: "11" }, { green: "2", red: "1", blue: "2" }, { blue: "2", green: "1", red: "1" }, { blue: "2", green: "18" }],
	[{ green: "6", red: "2" }, { green: "2" }, { red: "11", green: "6", blue: "1" }],
	[
		{ blue: "1", red: "10", green: "2" },
		{ green: "2", red: "7" },
		{ green: "9", red: "9" },
		{ red: "1", green: "4" },
	],
	[
		{ red: "7", green: "15", blue: "17" },
		{ green: "10", red: "6", blue: "12" },
		{ blue: "3", red: "7", green: "3" },
	],
	[{ green: "8" }, { red: "10", green: "17", blue: "1" }, { red: "9", blue: "1" }, { green: "6", red: "8" }, { green: "1", red: "1" }, { green: "17", red: "2" }],
	[
		{ blue: "3", green: "2", red: "7" },
		{ blue: "12", red: "9", green: "5" },
		{ green: "8", blue: "3", red: "5" },
		{ red: "6", blue: "2", green: "11" },
		{ green: "3", blue: "8", red: "9" },
		{ green: "1", red: "5", blue: "12" },
	],
	[
		{ green: "2", blue: "1", red: "3" },
		{ blue: "1", green: "1", red: "4" },
		{ blue: "2", green: "2", red: "11" },
		{ red: "1", green: "2" },
		{ blue: "2", red: "10", green: "2" },
	],
	[
		{ blue: "3", red: "3" },
		{ blue: "8", green: "1", red: "5" },
		{ green: "4", blue: "6", red: "3" },
	],
	[
		{ red: "9", green: "3", blue: "14" },
		{ red: "15", blue: "2", green: "1" },
		{ green: "2", red: "15", blue: "5" },
		{ red: "3", blue: "3", green: "1" },
	],
	[
		{ red: "2", blue: "1", green: "5" },
		{ blue: "11", red: "1", green: "4" },
		{ blue: "6", red: "2", green: "2" },
		{ blue: "13", red: "2", green: "10" },
		{ green: "7", blue: "13" },
	],
	[{ red: "3", green: "1", blue: "1" }, { red: "3", blue: "7", green: "1" }, { green: "1", red: "4", blue: "7" }, { green: "1" }, { blue: "6", red: "3" }, { red: "2", blue: "6" }],
	[{ red: "7", green: "5", blue: "2" }, { red: "14" }, { blue: "2", green: "5", red: "15" }, { blue: "1", green: "5", red: "14" }, { red: "13", green: "1" }, { red: "3", green: "1" }],
	[
		{ green: "2", blue: "8", red: "5" },
		{ blue: "3", red: "9" },
		{ blue: "9", green: "2" },
		{ red: "9", green: "2", blue: "5" },
		{ red: "5", green: "2" },
	],
	[
		{ green: "14", blue: "7", red: "2" },
		{ blue: "7", red: "3", green: "16" },
		{ blue: "1", red: "5", green: "6" },
		{ blue: "3", red: "7", green: "2" },
		{ red: "7", green: "9" },
	],
	[
		{ blue: "3", red: "8", green: "15" },
		{ red: "2", green: "8", blue: "2" },
		{ red: "16", blue: "3", green: "13" },
	],
	[
		{ blue: "1", red: "9", green: "8" },
		{ green: "6", red: "1", blue: "3" },
		{ red: "7", blue: "8", green: "6" },
		{ red: "9", green: "7" },
	],
	[
		{ red: "6", green: "9", blue: "1" },
		{ green: "8", red: "3", blue: "1" },
		{ green: "8", red: "15" },
		{ red: "14", green: "11", blue: "2" },
		{ green: "11", red: "4", blue: "2" },
		{ blue: "1", red: "16" },
	],
	[
		{ green: "6", blue: "10", red: "4" },
		{ red: "6", blue: "2", green: "6" },
		{ green: "6", blue: "14", red: "17" },
		{ green: "9", red: "1", blue: "9" },
	],
	[
		{ blue: "10", red: "2" },
		{ red: "3", green: "11", blue: "7" },
		{ green: "8", blue: "2", red: "7" },
		{ green: "17", blue: "5", red: "9" },
		{ green: "19", red: "10", blue: "9" },
	],
	[
		{ blue: "6", green: "9", red: "6" },
		{ green: "17", blue: "10", red: "8" },
		{ green: "17", red: "12", blue: "7" },
	],
	[{ red: "9", green: "1", blue: "1" }, { red: "3" }, { red: "6", blue: "1", green: "1" }, { blue: "2", red: "7" }],
	[
		{ green: "3", blue: "8" },
		{ red: "5", green: "4", blue: "2" },
		{ blue: "10", green: "3" },
		{ green: "2", blue: "4" },
		{ green: "2", blue: "16", red: "2" },
	],
	[
		{ red: "2", blue: "8" },
		{ green: "2", red: "6", blue: "1" },
		{ red: "7", blue: "12" },
		{ red: "1", green: "1", blue: "7" },
		{ green: "1", red: "3", blue: "2" },
	],
	[{ green: "15" }, { red: "1", green: "6" }, { blue: "6", red: "1", green: "17" }, { green: "14", blue: "3" }, { green: "11", red: "1" }, { green: "4", blue: "1" }],
	[
		{ red: "4", green: "3", blue: "12" },
		{ blue: "20", red: "2", green: "2" },
		{ red: "4", green: "4", blue: "8" },
	],
	[
		{ red: "8", green: "7" },
		{ red: "15", blue: "2", green: "3" },
		{ red: "2", blue: "1", green: "5" },
		{ green: "4", blue: "1", red: "9" },
		{ red: "14", blue: "1", green: "1" },
		{ green: "11", red: "12" },
	],
	[{ red: "3", green: "3", blue: "8" }, { blue: "3" }, { green: "1", blue: "3", red: "2" }, { red: "1", blue: "2", green: "2" }],
	[
		{ red: "18", blue: "12", green: "7" },
		{ blue: "7", red: "10", green: "10" },
		{ green: "1", blue: "6", red: "10" },
		{ red: "7", blue: "3", green: "12" },
		{ green: "9", blue: "5", red: "3" },
	],
	[{ blue: "2", green: "2", red: "2" }, { blue: "5", green: "1" }, { blue: "1" }, { red: "1", blue: "5", green: "2" }],
	[
		{ blue: "4", green: "1" },
		{ blue: "5", red: "1", green: "7" },
		{ red: "2", green: "5", blue: "5" },
	],
	[
		{ blue: "15", green: "3", red: "16" },
		{ blue: "16", red: "18", green: "8" },
		{ green: "8", blue: "1", red: "12" },
		{ blue: "11", green: "5", red: "18" },
		{ green: "5", red: "20", blue: "17" },
	],
	[
		{ red: "7", green: "10" },
		{ blue: "1", red: "5", green: "6" },
		{ red: "6", blue: "3", green: "9" },
		{ green: "6", blue: "3", red: "8" },
		{ green: "4", red: "4", blue: "2" },
		{ blue: "2", green: "1" },
	],
	[{ blue: "6", red: "5", green: "1" }, { green: "2" }, { blue: "2", red: "1" }, { green: "4", blue: "5", red: "2" }],
	[{ green: "10" }, { green: "8" }, { green: "10", blue: "2", red: "10" }],
	[
		{ green: "9", red: "3" },
		{ green: "8", blue: "2" },
		{ green: "2", blue: "8" },
	],
	[
		{ red: "2", blue: "9", green: "9" },
		{ red: "6", green: "10", blue: "11" },
		{ red: "5", green: "4", blue: "3" },
		{ red: "3", green: "2", blue: "14" },
		{ green: "5", red: "5", blue: "12" },
		{ red: "1", green: "9", blue: "18" },
	],
	[{ red: "2", blue: "3" }, { green: "2" }, { green: "2", blue: "3" }],
	[
		{ green: "9", red: "6", blue: "1" },
		{ blue: "3", green: "12", red: "8" },
		{ red: "4", green: "5", blue: "5" },
		{ green: "14", red: "5" },
		{ red: "1", green: "18", blue: "4" },
	],
	[
		{ red: "11", green: "10", blue: "12" },
		{ green: "4", red: "6", blue: "6" },
		{ red: "9", blue: "3", green: "7" },
		{ red: "6", green: "10", blue: "14" },
		{ blue: "8", red: "10", green: "5" },
		{ blue: "6", green: "17", red: "6" },
	],
	[{ blue: "8", green: "4", red: "2" }, { red: "1" }, { green: "10", blue: "4", red: "1" }, { green: "5", blue: "8", red: "2" }, { red: "6", blue: "1", green: "3" }, { blue: "6", red: "6", green: "1" }],
	[
		{ red: "3", blue: "3", green: "2" },
		{ green: "8", red: "5" },
		{ red: "11", green: "11", blue: "2" },
		{ green: "12", blue: "2", red: "19" },
		{ red: "12", blue: "1", green: "12" },
		{ green: "10", blue: "1", red: "3" },
	],
	[
		{ blue: "2", red: "15" },
		{ red: "19", green: "4" },
		{ red: "11", green: "3", blue: "6" },
		{ green: "1", blue: "2", red: "8" },
		{ blue: "3", red: "6" },
		{ green: "1", blue: "7", red: "1" },
	],
	[{ green: "1" }, { green: "2", blue: "1" }, { red: "1" }],
	[
		{ red: "1", green: "1", blue: "12" },
		{ green: "1", red: "5", blue: "12" },
		{ green: "2", blue: "4" },
		{ blue: "13", red: "2", green: "2" },
		{ green: "2", blue: "10", red: "1" },
		{ red: "5", green: "1", blue: "7" },
	],
	[
		{ green: "4", blue: "16", red: "11" },
		{ red: "6", blue: "15" },
		{ blue: "6", green: "4", red: "5" },
		{ blue: "10", red: "10", green: "3" },
	],
	[
		{ red: "3", blue: "8", green: "11" },
		{ green: "9", red: "5", blue: "4" },
		{ blue: "1", red: "4", green: "4" },
	],
	[
		{ red: "3", green: "12", blue: "7" },
		{ green: "13", blue: "14", red: "1" },
		{ red: "4", green: "6", blue: "9" },
		{ blue: "12", green: "13" },
	],
	[
		{ red: "4", blue: "4", green: "3" },
		{ blue: "3", red: "4" },
		{ green: "11", blue: "2", red: "2" },
	],
	[
		{ green: "12", red: "5", blue: "1" },
		{ red: "7", blue: "1", green: "3" },
		{ green: "17", blue: "2", red: "4" },
		{ red: "12", green: "17" },
		{ red: "7", green: "10", blue: "2" },
	],
	[
		{ blue: "5", green: "3" },
		{ green: "5", red: "11", blue: "12" },
		{ red: "1", blue: "2", green: "15" },
	],
	[
		{ blue: "12", green: "1", red: "12" },
		{ blue: "14", green: "12", red: "5" },
		{ red: "7", blue: "12", green: "16" },
	],
	[
		{ green: "1", red: "8", blue: "8" },
		{ blue: "11", red: "2" },
		{ green: "1", blue: "10", red: "12" },
		{ red: "7", blue: "2", green: "1" },
		{ red: "6", green: "1", blue: "11" },
		{ green: "1", red: "6", blue: "6" },
	],
	[
		{ green: "17", red: "16", blue: "10" },
		{ red: "9", green: "14", blue: "11" },
		{ green: "5", red: "16" },
	],
	[
		{ red: "12", green: "1", blue: "1" },
		{ blue: "4", red: "7" },
		{ blue: "10", green: "4", red: "6" },
		{ blue: "8", red: "4", green: "13" },
		{ green: "13", blue: "9", red: "9" },
		{ blue: "13", red: "7", green: "3" },
	],
	[
		{ blue: "4", green: "3", red: "4" },
		{ blue: "10", red: "5", green: "7" },
		{ red: "1", blue: "4", green: "3" },
		{ green: "13", red: "1", blue: "9" },
		{ green: "8", blue: "3" },
	],
	[
		{ green: "17", red: "13", blue: "3" },
		{ green: "15", red: "2", blue: "4" },
		{ red: "10", blue: "4", green: "5" },
		{ red: "6", blue: "5", green: "7" },
		{ red: "3", green: "10", blue: "1" },
	],
	[{ blue: "10" }, { blue: "4", red: "4" }, { blue: "4", green: "3", red: "3" }, { green: "1", blue: "5", red: "3" }],
	[
		{ green: "6", blue: "6", red: "3" },
		{ blue: "13", red: "1" },
		{ blue: "14", red: "6", green: "2" },
		{ blue: "14", red: "7", green: "2" },
	],
	[{ green: "2", blue: "2", red: "3" }, { red: "1", blue: "6", green: "4" }, { green: "8", red: "9" }, { green: "2" }],
	[
		{ red: "2", green: "7" },
		{ red: "1", green: "10", blue: "1" },
		{ blue: "6", green: "14" },
		{ green: "6", blue: "2", red: "1" },
		{ blue: "5", green: "10", red: "2" },
		{ blue: "2", green: "11" },
	],
	[
		{ blue: "6", red: "4", green: "7" },
		{ green: "13", red: "6", blue: "3" },
		{ green: "8", blue: "2", red: "4" },
	],
	[
		{ blue: "3", green: "1", red: "11" },
		{ green: "5", blue: "11", red: "4" },
		{ blue: "7", red: "13" },
		{ blue: "14", red: "12", green: "5" },
	],
	[
		{ red: "8", blue: "19", green: "4" },
		{ green: "15", red: "3", blue: "16" },
		{ blue: "7", red: "9" },
	],
	[
		{ green: "5", red: "8", blue: "6" },
		{ green: "8", red: "9" },
		{ green: "11", blue: "6" },
	],
	[
		{ green: "1", red: "6", blue: "4" },
		{ green: "2", blue: "13", red: "6" },
		{ red: "10", green: "1", blue: "10" },
	],
	[
		{ blue: "3", green: "6", red: "2" },
		{ red: "7", blue: "6", green: "4" },
		{ blue: "5", red: "6", green: "3" },
	],
	[
		{ red: "17", green: "6" },
		{ green: "7", red: "12", blue: "4" },
		{ red: "4", green: "7", blue: "14" },
	],
	[
		{ green: "1", red: "15", blue: "5" },
		{ green: "16", red: "3", blue: "18" },
		{ blue: "13", red: "1", green: "13" },
	],
	[
		{ red: "7", blue: "1", green: "3" },
		{ green: "2", red: "5" },
		{ green: "5", blue: "2", red: "8" },
		{ red: "11", blue: "1", green: "3" },
	],
	[
		{ blue: "9", red: "4" },
		{ green: "4", blue: "3", red: "4" },
		{ red: "7", blue: "9", green: "4" },
		{ red: "5", blue: "9", green: "4" },
		{ red: "3", blue: "11", green: "5" },
		{ red: "6", green: "4", blue: "11" },
	],
	[
		{ red: "1", green: "16", blue: "2" },
		{ red: "4", green: "15", blue: "10" },
		{ red: "2", blue: "9", green: "17" },
		{ blue: "10", green: "16" },
	],
	[
		{ blue: "4", green: "3" },
		{ green: "2", blue: "3" },
		{ blue: "4", red: "2", green: "2" },
		{ red: "2", green: "1" },
	],
	[
		{ blue: "10", red: "8", green: "19" },
		{ red: "8", blue: "4", green: "17" },
		{ blue: "2", red: "9", green: "6" },
		{ blue: "11", red: "2", green: "17" },
		{ red: "1", green: "17", blue: "8" },
	],
	[
		{ blue: "4", red: "1", green: "6" },
		{ blue: "7", green: "10", red: "4" },
		{ green: "1", blue: "7", red: "1" },
	],
	[
		{ blue: "1", red: "2", green: "1" },
		{ blue: "5", green: "2", red: "9" },
		{ green: "1", red: "2", blue: "10" },
	],
	[
		{ blue: "17", green: "9", red: "9" },
		{ red: "19", green: "12", blue: "11" },
		{ red: "19", green: "9", blue: "17" },
	],
	[
		{ green: "11", red: "6" },
		{ green: "1", blue: "4" },
		{ green: "16", red: "5" },
		{ green: "14", red: "1", blue: "14" },
		{ blue: "12", green: "8", red: "6" },
		{ red: "4", blue: "11", green: "2" },
	],
	[
		{ green: "6", red: "7", blue: "1" },
		{ red: "5", green: "1", blue: "1" },
		{ red: "3", green: "6" },
	],
	[
		{ green: "1", blue: "8", red: "1" },
		{ red: "8", green: "1" },
		{ red: "4", blue: "6" },
		{ red: "4", blue: "10" },
		{ red: "8", blue: "9", green: "1" },
	],
	[
		{ blue: "6", green: "12" },
		{ red: "1", blue: "4", green: "14" },
		{ red: "5", blue: "5", green: "6" },
		{ blue: "1", red: "3", green: "3" },
		{ green: "7", blue: "4" },
		{ green: "2", red: "2", blue: "1" },
	],
	[
		{ blue: "2", red: "12", green: "4" },
		{ green: "7", red: "6" },
		{ blue: "1", green: "7", red: "6" },
		{ green: "5", red: "5", blue: "1" },
		{ blue: "1", green: "11", red: "9" },
		{ red: "4", blue: "1", green: "2" },
	],
	[
		{ blue: "4", green: "12" },
		{ red: "6", blue: "4", green: "2" },
		{ blue: "5", red: "1", green: "17" },
		{ red: "6", blue: "4", green: "15" },
		{ blue: "3", red: "5", green: "13" },
	],
	[
		{ green: "8", blue: "2", red: "16" },
		{ green: "7", blue: "3", red: "8" },
		{ green: "9", red: "4", blue: "3" },
		{ red: "13", blue: "5" },
		{ blue: "5", green: "1", red: "10" },
		{ blue: "1", red: "9" },
	],
	[
		{ blue: "7", red: "5", green: "14" },
		{ green: "8", blue: "3", red: "1" },
		{ blue: "4", red: "8" },
	],
	[
		{ blue: "3", green: "4", red: "10" },
		{ blue: "5", red: "17", green: "2" },
		{ red: "18", green: "2", blue: "5" },
		{ blue: "3", green: "3", red: "2" },
		{ blue: "4", red: "18" },
		{ red: "6", green: "2" },
	],
	[
		{ blue: "1", green: "9", red: "2" },
		{ red: "3", green: "10" },
		{ red: "2", green: "8", blue: "4" },
		{ green: "17", blue: "2" },
		{ green: "10", blue: "1", red: "1" },
		{ green: "8", blue: "1", red: "3" },
	],
	[{ green: "9", blue: "1" }, { blue: "1", green: "6" }, { blue: "7", green: "3" }, { red: "3" }, { green: "17", red: "5" }, { blue: "1", green: "17", red: "5" }],
	[
		{ blue: "4", green: "7", red: "2" },
		{ green: "15", blue: "10", red: "1" },
		{ blue: "4", green: "5" },
		{ green: "1", red: "2", blue: "5" },
	],
	[
		{ green: "2", blue: "1", red: "14" },
		{ red: "11", blue: "6", green: "5" },
		{ red: "10", blue: "18", green: "1" },
		{ green: "5", blue: "9", red: "9" },
	],
	[
		{ blue: "5", green: "5" },
		{ blue: "7", green: "15" },
		{ red: "4", green: "7", blue: "12" },
		{ green: "7", blue: "1" },
		{ blue: "5", green: "9", red: "1" },
	],
];

let max = {
	red: 12,
	green: 13,
	blue: 14,
};
let validGames = [];
for (let i = 0; i < 100; i++) {
	let game = games[i];
	let valid = true;
	game.forEach((reveal) => {
		if (reveal.red > max.red || reveal.green > max.green || reveal.blue > max.blue) {
			valid = false;
		}
	});
	if (valid) validGames.push(i + 1);
}
console.log(validGames.reduce((a, b) => a + b));

// The Elf says they've stopped producing snow because they aren't getting any water! He isn't sure why the water stopped; however, he can show you how to get to the water source to check it out for yourself. It's just up ahead!

// As you continue your walk, the Elf poses a second question: in each game you played, what is the fewest number of cubes of each color that could have been in the bag to make the game possible?

// Again consider the example games from earlier:

// Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
// Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
// Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
// Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
// Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
// In game 1, the game could have been played with as few as 4 red, 2 green, and 6 blue cubes. If any color had even one fewer cube, the game would have been impossible.
// Game 2 could have been played with a minimum of 1 red, 3 green, and 4 blue cubes.
// Game 3 must have been played with at least 20 red, 13 green, and 6 blue cubes.
// Game 4 required at least 14 red, 3 green, and 15 blue cubes.
// Game 5 needed no fewer than 6 red, 3 green, and 2 blue cubes in the bag.
// The power of a set of cubes is equal to the numbers of red, green, and blue cubes multiplied together. The power of the minimum set of cubes in game 1 is 48. In games 2-5 it was 12, 1560, 630, and 36, respectively. Adding up these five powers produces the sum 2286.

// For each game, find the minimum set of cubes that must have been present. What is the sum of the power of these sets?

let gamePowers = [];
for (let i = 0; i < 100; i++) {
	let game = games[i];
	let red = 1;
	let green = 1;
	let blue = 1;
	game.forEach((reveal) => {
		if (reveal.red) red = Math.max(red, reveal.red);
		if (reveal.green) green = Math.max(green, reveal.green);
		if (reveal.blue) blue = Math.max(blue, reveal.blue);
	});
	gamePowers.push(red * green * blue);
}
console.log(gamePowers.reduce((a, b) => a + b));
