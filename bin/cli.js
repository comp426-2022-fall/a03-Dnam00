#!/usr/bin/env node

import minimist from "minimist";
import {roll} from "../lib/roll.js";

const args = minimist(process.argv.slice(2));
let sides2 = 6;
let dice2 = 1;
let rolls2 = 1;

if (args.sides) {
	sides2 = args.sides;
} else {
	sides2 = 6;
}
if (args.dice) {
	dice2 = args.dice;
} else {
	dice2 = 1;
}

if (args.rolls) {
	rolls2 = args.rolls;
} else {
	rolls2 = 1;
}

console.log(JSON.stringify({ sides: sides2, dice: dice2, rolls: rolls2, results: roll(sides2, dice2, rolls2)}));
process.exit(0);
