#!/usr/bin/env node
import csvToi18n from "../lib/index.js";
import fs from "node:fs/promises";

import { program } from "commander";

program
  .name("csv-to-i18n")
  .requiredOption("--csv <string>", "csv input file")
  .requiredOption("--out <string>", "json output file", "out.json");
program.parse();

const { csv: csvFilePath, out: outFilePath } = program.opts();
const csv = (await fs.readFile(csvFilePath)).toString("utf-8");

const json = csvToi18n(csv);

await fs.writeFile(outFilePath, JSON.stringify(json, null, 2));
