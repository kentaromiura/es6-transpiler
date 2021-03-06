let [a, b, ...c] = [1, 2, 3, 4, 5, 6]
console.log(a === 1, b === 2, c.join("|") === "3|4|5|6")

{
	let [a, b] = [1, [[[4], 3], 2]], c, d, e;
	[b, [[[a], d],c]] = [a, b];
	console.log(b === 1, c === 2, d === 3, a === 4);
}

{
	let {a, b = "B"} = {a: "A", b: void 0}, c = 22;
	({B: b, a}) = {a: b, B: a};
	console.log(a === "B", b === "A", c === 22);
}

{
	let [a, b, ...c] = [1, 2, 3, 4, 5]
	console.log(a === 1, b === 2, c.join("|") === "3|4|5");
}

{
	let [a = 1, , c, ...rest] = [void 0, 2, 3, 4, 5], b = 22
	console.log(a === 1, c === 3, b === 22, rest.join("|") === "4|5");
}

{
	let a, b, c, rest;
	[a, b, c, ...rest] = [1, 2, 3, 4, 5];
	console.log(a === 1, c === 3, rest.join("|") === "4|5");
}
