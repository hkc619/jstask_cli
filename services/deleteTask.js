//pseudo-delete

import chalk from "chalk";
import * as fs from "fs";
export async function deleleTask(id) {
  try {
    id -= 1;
    const data = await fs.promises.readFile("./data.json", "utf8");
    const time = Date.now();
    const NowTime = new Date(time);
    const newTaskUpdT = NowTime.toUTCString();
    const jsonData = JSON.parse(data);

    jsonData["task"][id]["status"] = "deleted";
    jsonData["task"][id]["updateAt"] = newTaskUpdT;
    //console.log(jsonData);
    console.log(`Task ${id + 1} is deleted.`);

    fs.promises.writeFile("./data.json", JSON.stringify(jsonData), (err) => {
      if (err) {
        console.log(chalk.bgRed(err));
      }
    });
  } catch (error) {
    console.log(error);
  }
}
