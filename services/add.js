import * as path from "path";
import { basename, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filename = basename(__filename);

console.log(path.dirname(__filename));
console.log(path.join(__dirname, "/data.json"));

const dataPath = path.join(__dirname, "/data.json");

fetch("./data.json")
  .then((res) => res.json())
  .then((json) => console.log(json));
