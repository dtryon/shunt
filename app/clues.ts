import { promises as fs } from "fs";

import type { Clue } from "./custom";

export async function getClues() {
  const file = await fs.readFile(process.cwd() + "/app/clues.json", "utf8");
  const data: [Clue] = JSON.parse(file);
  return data;
}
