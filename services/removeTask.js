import chalk from "chalk";
import * as fs from "fs";
import { json } from "stream/consumers";

export async function removeTask(id) {
  try {
    id -= 1;
    const data = await fs.promises.readFile("./data.json", "utf8");
    const jsonData = JSON.parse(data);
    //console.log(jsonData);

    // Check the task is deleted or not.
    if (jsonData["task"][id]["status"] !== "deleted") {
      console.log("Cannot remove this task.");
    } else {
      // Delete task into null.
      delete jsonData["task"][id];
      console.log(`Permanently remove Task ${id + 1} successfully.`);
    }
    //console.log(jsonData);
    fs.promises.writeFile("./data.json", JSON.stringify(jsonData), (err) => {
      if (err) {
        console.log(chalk.bgRed(err));
      }
    });
  } catch (error) {
    console.error(error);
  }
}
