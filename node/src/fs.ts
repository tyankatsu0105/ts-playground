import fs from "fs";

export function readFile(path: string) {
  fs.readFileSync(path);
}
