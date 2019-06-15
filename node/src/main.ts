import fs from "fs";

export function readFile(path: string) {
  return fs.readFileSync(path, { encoding: "utf-8" });
}

console.log(readFile("lib/main.js"));
