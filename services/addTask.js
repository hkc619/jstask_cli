import * as path from "path";
import { basename, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import data from "./data.json" assert { type: "json" };

/*
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filename = basename(__filename);
console.log(path.dirname(__filename));
console.log(path.join(__dirname, "/data.json"));
const dataPath = path.join(__dirname, "/data.json");
const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
const countries = loadJSON('./data/countries.json');

*/
console.log(data);
