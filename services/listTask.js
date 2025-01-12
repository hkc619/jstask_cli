import chalk from "chalk";
import * as fs from "fs";

export async function listTask(status) {
  try {
    const data = await fs.promises.readFile("./data.json", "utf8");
    const jsonData = JSON.parse(data);

    if (status === undefined) {
      for (let i = 0; i < jsonData.task.length; i++) {
        if (
          jsonData.task[i] !== null &&
          jsonData.task[i]["status"] !== "deleted"
        ) {
          console.log(jsonData.task[i]);
        }
      }
    } else {
      for (let i = 0; i < jsonData.task.length; i++) {
        if (
          jsonData.task[i] !== null &&
          jsonData.task[i]["status"] === status
        ) {
          console.log(jsonData.task[i]);
        }
      }
    }
  } catch (error) {
    console.log(chalk.red("Err: ", error));
  }
}
