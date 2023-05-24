import _ from "lodash";
import { parse, Options } from "csv-parse/sync";

export default function csvToi18next(csv: string, options?: Options) {
  const object = {};

  const items = parse(csv, {
    delimiter: ";",
    trim: true,
    bom: true,
    ...options,
  }) as string[];

  for (const item of items) {
    const [path, value] = item;
    _.set(object, path, value);
  }
  
  return object;
}
