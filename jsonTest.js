import data from "./data.json" assert { type: "json" };
import * as fs from "fs";
console.log(data.task.length);

fs.readFile("../data.json", (err, data) => {
  if (err) {
    console.log(err);
  }
  var json = JSON.parse(data);
  json["task"].push({ id: 3, task: "test0101", staus: "todo" });
  data = JSON.stringify(json);
  console.log(data);
  fs.writeFile("../data.json", data, (err) => {
    if (err) {
      console.log(err);
    }
  });
});
