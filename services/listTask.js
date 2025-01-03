import * as fs from "fs";

fs.readFile("../data.json", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
