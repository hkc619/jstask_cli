#!/usr/bin/env node

import { program } from "commander";

program
  .version("0.0.1")
  .usage("[options]")
  .option("-n, --name", "Your name.")
  .parse();

console.log("Hello");
