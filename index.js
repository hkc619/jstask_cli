#!/usr/bin/env node

import { Command } from "commander";
import { addTask } from "./services/addTask.js";
import { listTask } from "./services/listTask.js";
import chalk from "chalk";

const program = new Command();

program.version("0.0.1").usage("[options]").option("-n, --name", "Your name.");
/*
  .option("-a, --add", "Add a new task.")
  .option("-u, --update", "Update a task.")
  .option("-d, --delete", "Delete a task.")
  .option("-l, --list", "A list of seleted tasks.");
  */
program
  .command("add")
  .argument("<string>", "Task you want to add.")
  .action((str, options) => {
    //console.log(str);
    //console.log(options);
    console.log(`Task added successfully (ID: ${addTask(str, "./data.json")})`);
  });

program
  .command("list")
  .argument("[status]", "List tasks.")
  .action((status, options) => {
    console.log(status);
    console.log(status);
    listTask(status);
  });

program.parse();
