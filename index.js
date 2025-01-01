#!/usr/bin/env node

import { Command } from "commander";
import data from "./data.json" assert { type: "json" };

const program = new Command();

program
  .version("0.0.1")
  .usage("[options]")
  .option("-n, --name", "Your name.")
  .option("-a, --add", "Add a new task.")
  .option("-u, --update", "Update a task.")
  .option("-d, --delete", "Delete a task.")
  .option("-l, --list", "A list of seleted tasks.");

program.parse();
const options = program.opts();
console.log(program);
console.log("Hello, %s.", program.args[0] || "world");
