import chalk from "chalk";
import * as fs from "fs";

//export async function markProgressTask(status) {}

export async function markProgressTask(id) {
  try {
    id -= 1;
    const data = await fs.promises.readFile("./data.json", "utf8");
    const time = Date.now();
    const NowTime = new Date(time);
    const newTaskUpdT = NowTime.toUTCString();
    const jsonData = JSON.parse(data);

    jsonData["task"][id]["status"] = "in-progress";
    jsonData["task"][id]["updateAt"] = newTaskUpdT;
    //console.log(jsonData);
    console.log(jsonData["task"][id]);

    fs.promises.writeFile("./data.json", JSON.stringify(jsonData), (err) => {
      if (err) {
        console.log(chalk.bgRed(err));
      }
    });
  } catch (error) {
    console.log(error);
  }
}
