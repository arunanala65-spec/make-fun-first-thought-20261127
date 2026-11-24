// One Word, First Thought — make.fun entry
// The first word that comes to mind: the scent of rain on dry earth,
// the smell that arrives just before the storm breaks.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "petrichor";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 24 characters,
// not only white space. Refuse to write anything outside it.
if (WORD.length < 1 || WORD.length > 24 || WORD.trim().length === 0) {
  throw new Error("word outside the 1-24 character gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");
console.log(WORD);
