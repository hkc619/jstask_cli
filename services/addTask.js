import * as fs from "fs";
import chalk from "chalk";
import { json } from "stream/consumers";

export function addTask(taskDesc, filePath, newJson) {
  // When newJson is True, create a new initial JSON file.
  var newTaskId;
  if (newJson) {
    const iniTask = { task: [] };
    const data = JSON.stringify(iniTask);
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.log(chalk.bgRed(err));
        return;
      }
      console.log("Create file successfully.");
    });
  }
  // Read json file to get old task list and turn into object.
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(chalk.red(err));
      return;
    }
    var json = JSON.parse(data);

    newTaskId = json["task"].length > 0 ? json["task"].length + 1 : 1;
    var newTask = taskDesc;
    const newTaskstatus = "todo";
    const time = Date.now();
    const NowTime = new Date(time);
    var newTaskCreT = NowTime.toUTCString();
    var newTaskUpdT = NowTime.toUTCString();

    // Create task object
    var newTaskJson = {
      id: newTaskId,
      description: newTask,
      status: newTaskstatus,
      createAt: newTaskCreT,
      updateAt: newTaskUpdT,
    };

    // new task object integrated with old task and then turn into json object.
    json["task"].push(newTaskJson);
    data = JSON.stringify(json);
    //console.log(data);

    // write into json file.
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log(`Add new task ${newTaskId} successfully.`);
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
