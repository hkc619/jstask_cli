import chalk from "chalk";
import * as fs from "fs";

const readData = async () => {
  try {
    const data = await fs.promises.readFile("./data.json", "utf8");
    console.log(JSON.parse(data));
    console.log("try");
  } catch (error) {
    console.log(chalk.red("err: ", error));
  }
};

readData();
