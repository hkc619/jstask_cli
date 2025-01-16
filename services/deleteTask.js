//pseudo-delete

import chalk from "chalk";
import * as fs from "fs";
export async function deleleTask(id) {
  try {
    // Read specific task by ID
    id -= 1;
    const data = await fs.promises.readFile("./data.json", "utf8");
    const time = Date.now();
    const NowTime = new Date(time);
    const newTaskUpdT = NowTime.toUTCString();
    const jsonData = JSON.parse(data);

    // Change task status to deleted
    jsonData["task"][id]["status"] = "deleted";
    jsonData["task"][id]["updateAt"] = newTaskUpdT;
    //console.log(jsonData);
    console.log(`Task ${id + 1} is deleted.`);

    // Write to file
    fs.writeFile("./data.json", JSON.stringify(jsonData), (err) => {
      if (err) {
        console.log(chalk.bgRed(err));
      } else {
        console.log(`Delete task successfully. (ID: ${id + 1})`);
      }
    });
  } catch (error) {
    console.log(error);
  }
}
