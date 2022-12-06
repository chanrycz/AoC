// Data modified using Notepad++
var originalPositions = [
	["W","D","G","B","H","R","V"],
	["J","N","G","C","R","F"],
	["L","S","F","H","D","N","J"],
	["J","D","S","V"],
	["S","H","D","R","Q","W","N","V"],
	["P","G","H","C","M"],
	["F","J","B","G","L","Z","H","C"],
	["S","J","R"],
	["L","G","S","R","B","N","V","M"]
];

var moves = [
	{"count":2,"start":2,"end":7},
	{"count":8,"start":5,"end":6},
	{"count":2,"start":4,"end":5},
	{"count":1,"start":4,"end":5},
	{"count":1,"start":5,"end":8},
	{"count":5,"start":9,"end":2},
	{"count":7,"start":1,"end":6},
	{"count":7,"start":3,"end":8},
	{"count":1,"start":4,"end":6},
	{"count":2,"start":5,"end":6},
	{"count":6,"start":7,"end":5},
	{"count":2,"start":2,"end":4},
	{"count":4,"start":5,"end":2},
	{"count":10,"start":8,"end":1},
	{"count":2,"start":7,"end":4},
	{"count":4,"start":2,"end":8},
	{"count":2,"start":9,"end":8},
	{"count":1,"start":8,"end":4},
	{"count":2,"start":4,"end":9},
	{"count":5,"start":8,"end":2},
	{"count":1,"start":4,"end":6},
	{"count":1,"start":8,"end":9},
	{"count":1,"start":7,"end":2},
	{"count":2,"start":4,"end":2},
	{"count":1,"start":7,"end":3},
	{"count":13,"start":2,"end":1},
	{"count":1,"start":2,"end":4},
	{"count":1,"start":2,"end":3},
	{"count":2,"start":5,"end":4},
	{"count":17,"start":6,"end":4},
	{"count":3,"start":4,"end":9},
	{"count":14,"start":1,"end":4},
	{"count":4,"start":6,"end":8},
	{"count":1,"start":9,"end":8},
	{"count":23,"start":4,"end":8},
	{"count":6,"start":1,"end":7},
	{"count":3,"start":1,"end":5},
	{"count":1,"start":3,"end":8},
	{"count":5,"start":7,"end":8},
	{"count":1,"start":3,"end":4},
	{"count":1,"start":5,"end":3},
	{"count":1,"start":5,"end":1},
	{"count":1,"start":3,"end":2},
	{"count":1,"start":9,"end":4},
	{"count":9,"start":4,"end":9},
	{"count":1,"start":1,"end":2},
	{"count":11,"start":8,"end":2},
	{"count":1,"start":4,"end":5},
	{"count":13,"start":2,"end":3},
	{"count":7,"start":9,"end":6},
	{"count":1,"start":5,"end":6},
	{"count":1,"start":5,"end":2},
	{"count":1,"start":9,"end":4},
	{"count":1,"start":4,"end":9},
	{"count":2,"start":8,"end":9},
	{"count":1,"start":7,"end":8},
	{"count":8,"start":9,"end":1},
	{"count":8,"start":1,"end":4},
	{"count":4,"start":6,"end":7},
	{"count":1,"start":9,"end":4},
	{"count":2,"start":3,"end":9},
	{"count":1,"start":9,"end":1},
	{"count":6,"start":4,"end":1},
	{"count":2,"start":1,"end":3},
	{"count":22,"start":8,"end":6},
	{"count":1,"start":2,"end":5},
	{"count":3,"start":7,"end":8},
	{"count":15,"start":6,"end":4},
	{"count":7,"start":3,"end":7},
	{"count":4,"start":6,"end":9},
	{"count":2,"start":9,"end":2},
	{"count":6,"start":3,"end":5},
	{"count":3,"start":9,"end":5},
	{"count":5,"start":5,"end":8},
	{"count":1,"start":2,"end":1},
	{"count":6,"start":8,"end":2},
	{"count":1,"start":1,"end":2},
	{"count":3,"start":5,"end":3},
	{"count":1,"start":7,"end":2},
	{"count":4,"start":7,"end":8},
	{"count":4,"start":6,"end":1},
	{"count":1,"start":5,"end":1},
	{"count":4,"start":8,"end":7},
	{"count":2,"start":3,"end":2},
	{"count":1,"start":1,"end":3},
	{"count":15,"start":4,"end":2},
	{"count":3,"start":7,"end":3},
	{"count":4,"start":7,"end":2},
	{"count":1,"start":4,"end":9},
	{"count":5,"start":3,"end":8},
	{"count":29,"start":2,"end":1},
	{"count":1,"start":9,"end":5},
	{"count":1,"start":2,"end":1},
	{"count":11,"start":1,"end":5},
	{"count":1,"start":4,"end":5},
	{"count":2,"start":6,"end":3},
	{"count":1,"start":3,"end":4},
	{"count":16,"start":1,"end":9},
	{"count":4,"start":8,"end":4},
	{"count":3,"start":6,"end":9},
	{"count":1,"start":3,"end":7},
	{"count":1,"start":7,"end":3},
	{"count":6,"start":1,"end":6},
	{"count":3,"start":4,"end":3},
	{"count":3,"start":8,"end":5},
	{"count":3,"start":1,"end":8},
	{"count":3,"start":1,"end":4},
	{"count":2,"start":4,"end":9},
	{"count":3,"start":6,"end":3},
	{"count":15,"start":5,"end":2},
	{"count":3,"start":2,"end":3},
	{"count":4,"start":2,"end":7},
	{"count":2,"start":5,"end":9},
	{"count":10,"start":3,"end":6},
	{"count":11,"start":9,"end":5},
	{"count":2,"start":4,"end":9},
	{"count":8,"start":9,"end":4},
	{"count":1,"start":9,"end":6},
	{"count":7,"start":4,"end":6},
	{"count":3,"start":5,"end":8},
	{"count":22,"start":6,"end":9},
	{"count":4,"start":7,"end":8},
	{"count":8,"start":5,"end":8},
	{"count":2,"start":4,"end":3},
	{"count":1,"start":8,"end":1},
	{"count":17,"start":8,"end":3},
	{"count":3,"start":3,"end":4},
	{"count":13,"start":3,"end":9},
	{"count":20,"start":9,"end":7},
	{"count":2,"start":2,"end":9},
	{"count":19,"start":9,"end":5},
	{"count":1,"start":1,"end":4},
	{"count":3,"start":2,"end":7},
	{"count":4,"start":4,"end":3},
	{"count":1,"start":9,"end":8},
	{"count":18,"start":5,"end":1},
	{"count":1,"start":9,"end":4},
	{"count":1,"start":9,"end":7},
	{"count":2,"start":4,"end":8},
	{"count":1,"start":5,"end":4},
	{"count":3,"start":2,"end":7},
	{"count":3,"start":3,"end":1},
	{"count":2,"start":1,"end":3},
	{"count":3,"start":3,"end":8},
	{"count":1,"start":4,"end":8},
	{"count":6,"start":8,"end":2},
	{"count":1,"start":3,"end":9},
	{"count":1,"start":3,"end":9},
	{"count":10,"start":1,"end":9},
	{"count":7,"start":1,"end":7},
	{"count":4,"start":7,"end":4},
	{"count":29,"start":7,"end":3},
	{"count":6,"start":2,"end":9},
	{"count":25,"start":3,"end":6},
	{"count":5,"start":3,"end":9},
	{"count":13,"start":6,"end":9},
	{"count":12,"start":6,"end":2},
	{"count":1,"start":8,"end":9},
	{"count":10,"start":2,"end":6},
	{"count":7,"start":6,"end":5},
	{"count":20,"start":9,"end":3},
	{"count":11,"start":3,"end":6},
	{"count":1,"start":7,"end":9},
	{"count":2,"start":2,"end":9},
	{"count":19,"start":9,"end":2},
	{"count":14,"start":6,"end":8},
	{"count":4,"start":5,"end":2},
	{"count":2,"start":4,"end":6},
	{"count":3,"start":5,"end":1},
	{"count":13,"start":8,"end":5},
	{"count":1,"start":6,"end":1},
	{"count":2,"start":4,"end":2},
	{"count":8,"start":2,"end":4},
	{"count":6,"start":4,"end":7},
	{"count":1,"start":9,"end":8},
	{"count":2,"start":4,"end":7},
	{"count":5,"start":2,"end":4},
	{"count":4,"start":4,"end":2},
	{"count":10,"start":5,"end":6},
	{"count":1,"start":1,"end":7},
	{"count":1,"start":5,"end":4},
	{"count":1,"start":4,"end":9},
	{"count":4,"start":7,"end":8},
	{"count":5,"start":1,"end":7},
	{"count":1,"start":9,"end":7},
	{"count":7,"start":3,"end":2},
	{"count":2,"start":5,"end":2},
	{"count":8,"start":6,"end":9},
	{"count":1,"start":4,"end":6},
	{"count":3,"start":7,"end":4},
	{"count":5,"start":9,"end":7},
	{"count":2,"start":4,"end":3},
	{"count":20,"start":2,"end":4},
	{"count":2,"start":4,"end":8},
	{"count":14,"start":4,"end":2},
	{"count":12,"start":7,"end":4},
	{"count":8,"start":2,"end":1},
	{"count":10,"start":2,"end":4},
	{"count":6,"start":8,"end":5},
	{"count":1,"start":7,"end":8},
	{"count":4,"start":4,"end":3},
	{"count":1,"start":3,"end":9},
	{"count":1,"start":2,"end":7},
	{"count":1,"start":6,"end":8},
	{"count":5,"start":3,"end":5},
	{"count":1,"start":3,"end":2},
	{"count":7,"start":4,"end":5},
	{"count":6,"start":1,"end":7},
	{"count":5,"start":7,"end":6},
	{"count":1,"start":6,"end":5},
	{"count":2,"start":7,"end":8},
	{"count":1,"start":2,"end":6},
	{"count":2,"start":8,"end":2},
	{"count":5,"start":5,"end":7},
	{"count":6,"start":6,"end":8},
	{"count":16,"start":4,"end":9},
	{"count":16,"start":9,"end":4},
	{"count":11,"start":5,"end":4},
	{"count":5,"start":8,"end":3},
	{"count":2,"start":5,"end":2},
	{"count":14,"start":4,"end":2},
	{"count":1,"start":6,"end":3},
	{"count":1,"start":6,"end":9},
	{"count":1,"start":5,"end":3},
	{"count":3,"start":8,"end":2},
	{"count":10,"start":4,"end":7},
	{"count":5,"start":9,"end":2},
	{"count":3,"start":4,"end":7},
	{"count":1,"start":1,"end":4},
	{"count":3,"start":2,"end":5},
	{"count":2,"start":3,"end":7},
	{"count":1,"start":4,"end":2},
	{"count":18,"start":2,"end":8},
	{"count":3,"start":8,"end":4},
	{"count":5,"start":3,"end":1},
	{"count":1,"start":3,"end":9},
	{"count":1,"start":9,"end":3},
	{"count":8,"start":8,"end":7},
	{"count":2,"start":5,"end":4},
	{"count":1,"start":5,"end":6},
	{"count":1,"start":2,"end":5},
	{"count":1,"start":5,"end":8},
	{"count":1,"start":6,"end":9},
	{"count":3,"start":2,"end":7},
	{"count":27,"start":7,"end":4},
	{"count":2,"start":2,"end":4},
	{"count":4,"start":8,"end":4},
	{"count":1,"start":9,"end":8},
	{"count":3,"start":1,"end":6},
	{"count":1,"start":3,"end":5},
	{"count":3,"start":8,"end":3},
	{"count":1,"start":1,"end":4},
	{"count":1,"start":8,"end":1},
	{"count":3,"start":1,"end":4},
	{"count":2,"start":8,"end":2},
	{"count":2,"start":6,"end":2},
	{"count":8,"start":4,"end":9},
	{"count":1,"start":7,"end":1},
	{"count":1,"start":5,"end":4},
	{"count":1,"start":7,"end":3},
	{"count":4,"start":2,"end":7},
	{"count":1,"start":8,"end":6},
	{"count":8,"start":9,"end":7},
	{"count":1,"start":6,"end":3},
	{"count":3,"start":3,"end":4},
	{"count":37,"start":4,"end":1},
	{"count":1,"start":4,"end":5},
	{"count":13,"start":7,"end":8},
	{"count":6,"start":8,"end":4},
	{"count":5,"start":8,"end":3},
	{"count":1,"start":7,"end":6},
	{"count":4,"start":1,"end":5},
	{"count":1,"start":6,"end":5},
	{"count":2,"start":8,"end":4},
	{"count":32,"start":1,"end":5},
	{"count":1,"start":1,"end":4},
	{"count":5,"start":3,"end":5},
	{"count":1,"start":3,"end":2},
	{"count":1,"start":2,"end":9},
	{"count":19,"start":5,"end":2},
	{"count":1,"start":9,"end":1},
	{"count":16,"start":5,"end":1},
	{"count":7,"start":5,"end":6},
	{"count":1,"start":3,"end":1},
	{"count":11,"start":1,"end":2},
	{"count":18,"start":2,"end":4},
	{"count":1,"start":5,"end":9},
	{"count":8,"start":6,"end":1},
	{"count":10,"start":2,"end":6},
	{"count":7,"start":4,"end":9},
	{"count":2,"start":2,"end":1},
	{"count":7,"start":4,"end":2},
	{"count":5,"start":4,"end":5},
	{"count":2,"start":9,"end":6},
	{"count":9,"start":6,"end":3},
	{"count":5,"start":5,"end":3},
	{"count":8,"start":4,"end":9},
	{"count":7,"start":9,"end":8},
	{"count":4,"start":2,"end":9},
	{"count":10,"start":3,"end":1},
	{"count":6,"start":8,"end":1},
	{"count":2,"start":6,"end":3},
	{"count":5,"start":3,"end":8},
	{"count":3,"start":2,"end":7},
	{"count":1,"start":9,"end":5},
	{"count":1,"start":3,"end":5},
	{"count":2,"start":7,"end":8},
	{"count":1,"start":8,"end":9},
	{"count":1,"start":6,"end":1},
	{"count":23,"start":1,"end":4},
	{"count":2,"start":5,"end":3},
	{"count":1,"start":8,"end":2},
	{"count":2,"start":8,"end":5},
	{"count":2,"start":5,"end":6},
	{"count":1,"start":2,"end":7},
	{"count":1,"start":7,"end":5},
	{"count":4,"start":9,"end":7},
	{"count":1,"start":7,"end":5},
	{"count":1,"start":3,"end":6},
	{"count":3,"start":7,"end":4},
	{"count":1,"start":3,"end":8},
	{"count":1,"start":4,"end":6},
	{"count":6,"start":1,"end":8},
	{"count":4,"start":6,"end":4},
	{"count":2,"start":9,"end":1},
	{"count":1,"start":5,"end":1},
	{"count":19,"start":4,"end":2},
	{"count":2,"start":9,"end":3},
	{"count":1,"start":9,"end":3},
	{"count":9,"start":1,"end":8},
	{"count":1,"start":5,"end":8},
	{"count":1,"start":9,"end":3},
	{"count":2,"start":3,"end":9},
	{"count":3,"start":8,"end":4},
	{"count":1,"start":4,"end":9},
	{"count":1,"start":9,"end":5},
	{"count":2,"start":3,"end":4},
	{"count":6,"start":4,"end":7},
	{"count":3,"start":9,"end":5},
	{"count":4,"start":4,"end":7},
	{"count":1,"start":5,"end":6},
	{"count":18,"start":2,"end":7},
	{"count":13,"start":7,"end":9},
	{"count":3,"start":5,"end":1},
	{"count":1,"start":2,"end":1},
	{"count":1,"start":6,"end":5},
	{"count":3,"start":1,"end":7},
	{"count":1,"start":1,"end":5},
	{"count":7,"start":9,"end":6},
	{"count":8,"start":7,"end":4},
	{"count":11,"start":7,"end":6},
	{"count":5,"start":9,"end":2},
	{"count":17,"start":6,"end":1},
	{"count":2,"start":5,"end":1},
	{"count":11,"start":8,"end":1},
	{"count":20,"start":1,"end":2},
	{"count":3,"start":8,"end":1},
	{"count":1,"start":9,"end":8},
	{"count":1,"start":6,"end":1},
	{"count":11,"start":1,"end":7},
	{"count":18,"start":2,"end":3},
	{"count":12,"start":4,"end":8},
	{"count":11,"start":7,"end":3},
	{"count":7,"start":2,"end":3},
	{"count":2,"start":1,"end":5},
	{"count":1,"start":1,"end":3},
	{"count":1,"start":8,"end":1},
	{"count":1,"start":5,"end":9},
	{"count":1,"start":9,"end":6},
	{"count":1,"start":8,"end":7},
	{"count":1,"start":5,"end":3},
	{"count":1,"start":6,"end":7},
	{"count":2,"start":8,"end":1},
	{"count":8,"start":3,"end":2},
	{"count":7,"start":2,"end":9},
	{"count":6,"start":8,"end":6},
	{"count":1,"start":9,"end":3},
	{"count":2,"start":6,"end":4},
	{"count":5,"start":9,"end":6},
	{"count":7,"start":6,"end":2},
	{"count":8,"start":2,"end":9},
	{"count":2,"start":1,"end":9},
	{"count":2,"start":7,"end":2},
	{"count":2,"start":4,"end":8},
	{"count":1,"start":2,"end":7},
	{"count":25,"start":3,"end":7},
	{"count":7,"start":9,"end":7},
	{"count":1,"start":2,"end":5},
	{"count":1,"start":1,"end":4},
	{"count":3,"start":8,"end":1},
	{"count":3,"start":1,"end":8},
	{"count":3,"start":7,"end":8},
	{"count":15,"start":7,"end":3},
	{"count":10,"start":8,"end":3},
	{"count":1,"start":5,"end":7},
	{"count":1,"start":8,"end":5},
	{"count":3,"start":9,"end":2},
	{"count":1,"start":6,"end":4},
	{"count":2,"start":2,"end":7},
	{"count":1,"start":2,"end":5},
	{"count":14,"start":7,"end":9},
	{"count":1,"start":6,"end":2},
	{"count":1,"start":7,"end":1},
	{"count":1,"start":5,"end":4},
	{"count":3,"start":4,"end":3},
	{"count":1,"start":7,"end":6},
	{"count":1,"start":2,"end":7},
	{"count":1,"start":1,"end":2},
	{"count":3,"start":9,"end":1},
	{"count":1,"start":6,"end":2},
	{"count":2,"start":2,"end":6},
	{"count":17,"start":3,"end":6},
	{"count":1,"start":8,"end":3},
	{"count":1,"start":5,"end":4},
	{"count":2,"start":7,"end":2},
	{"count":9,"start":9,"end":8},
	{"count":1,"start":9,"end":3},
	{"count":16,"start":3,"end":2},
	{"count":1,"start":7,"end":5},
	{"count":5,"start":6,"end":5},
	{"count":1,"start":1,"end":6},
	{"count":1,"start":4,"end":1},
	{"count":1,"start":9,"end":3},
	{"count":9,"start":8,"end":6},
	{"count":3,"start":1,"end":5},
	{"count":1,"start":9,"end":1},
	{"count":16,"start":2,"end":1},
	{"count":2,"start":2,"end":7},
	{"count":2,"start":3,"end":9},
	{"count":2,"start":7,"end":4},
	{"count":2,"start":9,"end":3},
	{"count":3,"start":3,"end":5},
	{"count":1,"start":4,"end":5},
	{"count":1,"start":4,"end":2},
	{"count":1,"start":1,"end":7},
	{"count":1,"start":7,"end":1},
	{"count":1,"start":3,"end":6},
	{"count":2,"start":5,"end":1},
	{"count":3,"start":6,"end":2},
	{"count":2,"start":5,"end":8},
	{"count":8,"start":5,"end":4},
	{"count":1,"start":5,"end":3},
	{"count":1,"start":3,"end":2},
	{"count":1,"start":8,"end":3},
	{"count":1,"start":3,"end":8},
	{"count":4,"start":1,"end":7},
	{"count":9,"start":1,"end":7},
	{"count":6,"start":1,"end":8},
	{"count":3,"start":7,"end":4},
	{"count":7,"start":6,"end":7},
	{"count":11,"start":4,"end":3},
	{"count":2,"start":3,"end":8},
	{"count":8,"start":3,"end":8},
	{"count":4,"start":6,"end":1},
	{"count":1,"start":7,"end":4},
	{"count":2,"start":1,"end":2},
	{"count":8,"start":7,"end":2},
	{"count":1,"start":4,"end":8},
	{"count":10,"start":8,"end":2},
	{"count":2,"start":6,"end":1},
	{"count":1,"start":1,"end":4},
	{"count":1,"start":4,"end":8},
	{"count":2,"start":1,"end":4},
	{"count":6,"start":6,"end":5},
	{"count":1,"start":1,"end":9},
	{"count":2,"start":6,"end":8},
	{"count":1,"start":4,"end":5},
	{"count":1,"start":6,"end":9},
	{"count":4,"start":8,"end":9},
	{"count":1,"start":7,"end":1},
	{"count":6,"start":8,"end":6},
	{"count":1,"start":6,"end":1},
	{"count":1,"start":4,"end":9},
	{"count":2,"start":9,"end":5},
	{"count":5,"start":5,"end":9},
	{"count":8,"start":9,"end":5},
	{"count":2,"start":8,"end":5},
	{"count":3,"start":6,"end":9},
	{"count":8,"start":5,"end":7},
	{"count":5,"start":5,"end":6},
	{"count":1,"start":9,"end":2},
	{"count":1,"start":3,"end":1},
	{"count":1,"start":6,"end":7},
	{"count":1,"start":5,"end":6},
	{"count":24,"start":2,"end":4},
	{"count":3,"start":9,"end":7},
	{"count":16,"start":4,"end":5},
	{"count":2,"start":1,"end":3},
	{"count":12,"start":5,"end":6},
	{"count":1,"start":9,"end":5},
	{"count":4,"start":5,"end":9},
	{"count":1,"start":1,"end":6},
	{"count":1,"start":5,"end":2},
	{"count":2,"start":9,"end":8},
	{"count":1,"start":8,"end":1},
	{"count":5,"start":4,"end":5},
	{"count":2,"start":3,"end":5},
	{"count":1,"start":8,"end":3},
	{"count":1,"start":1,"end":6},
	{"count":3,"start":5,"end":7},
	{"count":1,"start":9,"end":1},
	{"count":1,"start":2,"end":8}
];

// Part 1

var positions = [...originalPositions];

for (move of moves) {
    var start = move.start - 1;
    var end = move.end - 1;
    var count = move.count;

    for (var i = 0; i < count; i++) {
        positions[end].push(positions[start].pop());
    }
}
console.table(positions);

var items = "";
for (col of positions) {
    items += col[col.length - 1];
}
console.log(items);

// Part 2

var positions = [...originalPositions];

for (move of moves) {
    var start = move.start - 1;
    var end = move.end - 1;
    var count = move.count;

    var items = positions[start].slice(positions[start].length - count, positions[start].length);
    positions[end] = positions[end].concat(items);
    positions[start] = positions[start].slice(0, positions[start].length - count);
}
console.table(positions);

items = "";
for (col of positions) {
    items += col[col.length - 1];
}
console.log(items);