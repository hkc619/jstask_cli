import * as fs from "fs";
import data from "../data.json" assert { type: "json" };

import * as path from "path";
import { basename, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { json } from "node:stream/consumers";

/*
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filename = basename(__filename);
console.log(path.dirname(__filename));
console.log(path.join(__dirname, "/data.json"));
const dataPath = path.join(__dirname, "/data.json");
const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
const countries = loadJSON('./data/countries.json');
*/
var newTask = "test0101";
var newTaskId = data.task.length + 1;
var newTaskstatus = "todo";

var newTaskJson = JSON.stringify({
  id: newTaskId,
  task: newTask,
  staus: newTaskstatus,
});
console.log(newTaskJson);

fs.writeFile("../data.json", newTaskJson, (err) => {
  if (err) {
    console.log(err);
  }
});
