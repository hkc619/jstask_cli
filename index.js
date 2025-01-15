#!/usr/bin/env node

import { Command } from "commander";
import { addTask } from "./services/addTask.js";
import { listTask } from "./services/listTask.js";
import { updateTask } from "./services/updateTask.js";
import { markDoneTask } from "./services/markDone.js";
import { markProgressTask } from "./services/markProgress.js";
import { deleleTask } from "./services/deleteTask.js";
import { removeTask } from "./services/removeTask.js";
import chalk from "chalk";

const program = new Command();

program.version("0.0.1").usage("[options]").option("-n, --name", "Your name.");
/*
  .option("-a, --add", "Add a new task.")
  .option("-u, --update", "Update a task.")
  .option("-d, --delete", "Delete a task.")
  .option("-l, --list", "A list of seleted tasks.");
  */

// Add a new task
program
  .command("add")
  .argument("<string>", "Task you want to add.")
  .option("-n, --new", "Create a new json file.")
  .action((str, options) => {
    console.log(options);
    console.log(
      `Task added successfully (ID: ${addTask(str, "./data.json", options)})`
    ); //should return id number or ...
  });

// List task(s) by status
program
  .command("list")
  .argument("[status]", "List tasks.")
  .action((status, options) => {
    listTask(status);
  });

// Update specific task's description by ID
program
  .command("update")
  .argument(
    "<argument...>",
    "ID and new description of the task you want to update."
  )
  .action((argument) => {
    console.log(argument[0]);
    console.log(argument[1]);
    updateTask(argument[0], argument[1]);
  });

// Mark specific task's status in progress by ID
program
  .command("mark-in-progress")
  .argument("<Id>", "ID of the task you want to mark in progress.")
  .action((Id) => {
    markProgressTask(Id);
  });

// Mark specific task's status done by ID
program
  .command("mark-done")
  .argument("<Id>", "ID of the task you want to mark done.")
  .action((Id) => {
    markDoneTask(Id);
  });

// Delete specific task by ID (Pseudo delete)
program
  .command("delete")
  .argument("<Id>", "ID of the task you want to deleted.")
  .action((Id) => {
    deleleTask(Id);
  });

// Remove specific task by ID
program
  .command("remove")
  .argument("<Id>", "ID of the task you want to remove.")
  .action((Id) => {
    removeTask(Id);
  });

program.parse();
