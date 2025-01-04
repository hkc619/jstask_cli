import chalk from "chalk";
import * as fs from "fs";

//export async function updateTask(status) {}

const updateTask = async (id, newDescription) => {
  try {
    const data = await fs.promises.readFile("./data.json", "utf8");
    const jsonData = JSON.parse(data);
    jsonData["task"][id]["description"] = newDescription;
    console.log(jsonData);
    /*
    fs.promises.writeFile("./data.json", JSON.stringify(jsonData), (err) => {
      console.log(chalk.bgRed(err));
    });
    */
  } catch (error) {
    console.log(error);
  }
};

updateTask(0, "new description");