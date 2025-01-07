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

export function addTask(taskDesc, filePath) {
  //should a new function: if no file, create a new file
  var newTaskId;

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
    }
    var json = JSON.parse(data);
    newTaskId = json["task"].length > 0 ? json["task"].length + 1 : 1;
    var newTask = taskDesc;
    const newTaskstatus = "todo";
    const time = Date.now();
    const NowTime = new Date(time);
    var newTaskCreT = NowTime.toUTCString();
    var newTaskUpdT = NowTime.toUTCString();

    var newTaskJson = {
      id: newTaskId,
      description: newTask,
      status: newTaskstatus,
      createAt: newTaskCreT,
      updateAt: newTaskUpdT,
    };

    json["task"].push(newTaskJson);
    data = JSON.stringify(json);
    //console.log(data);

    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.log(err);
      }
    });
  });
  /*
  fs.writeFile("../data.json", newTaskJson, (err) => {
    if (err) {
      console.log(err);
    }
  });
  */
  return newTaskId;
}
