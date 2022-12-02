const { readFileSync } = require("fs");

const elves = readFileSync("./input.txt", "utf-8");

const input = elves.split("\n\n");

const arr = input.map((elf) =>
  elf
    .split("\n")
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0)
).sort((a, b) => b - a).slice(0, 3).reduce((acc, curr) => acc + curr)


console.log(arr);
