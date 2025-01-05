import chalk from "chalk";
import * as fs from "fs";

//export async function markProgressTask(status) {}

const markProgressTask = async (id) => {
  try {
    const data = await fs.promises.readFile("./data.json", "utf8");
    const jsonData = JSON.parse(data);
    jsonData["task"][id]["status"] = "in-progress";
    console.log(jsonData);

    fs.promises.writeFile("./data.json", JSON.stringify(jsonData), (err) => {
      if (err) {
        console.log(chalk.bgRed(err));
      }
      console.log(jsonData["task"][id]);
    });
  } catch (error) {
    console.log(error);
  }
};

markProgressTask(1);
