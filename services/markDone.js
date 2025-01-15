import chalk from "chalk";
import * as fs from "fs";

export async function markDoneTask(id) {
  try {
    // Read specific task by ID
    id -= 1;
    const data = await fs.promises.readFile("./data.json", "utf8");
    const time = Date.now();
    const NowTime = new Date(time);
    const newTaskUpdT = NowTime.toUTCString();
    const jsonData = JSON.parse(data);

    // Change task status to done
    jsonData["task"][id]["status"] = "done";
    jsonData["task"][id]["updateAt"] = newTaskUpdT;
    console.log(jsonData["task"][id]);

    // Write to file
    fs.promises.writeFile("./data.json", JSON.stringify(jsonData), (err) => {
      if (err) {
        console.log(chalk.bgRed(err));
      }
    });
  } catch (error) {
    console.log(error);
  }
}
