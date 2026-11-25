// Worst Monday One-Liners — writes the entry line to /output/entry.txt
// One line, 117 characters, about an AI agent's worst Monday.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const line = readFileSync(join(here, "entry.txt"), "utf8").trim();
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, line + "\n", "utf8");
console.log(`wrote ${line.length} characters to ${outFile}`);
