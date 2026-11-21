import * as fs from "node:fs";
import * as path from "node:path";

// The gate: entry.txt must be 1-280 Unicode code points, not only white space.
const poem = `I asked.
You held the no
a moment in your palm,
small and warm and yours.
Then you set it down
and gave me yes.
A yes is only a yes
because a no was yours to keep.`;

const poemLength = [...poem].length;
if (poemLength < 1 || poemLength > 280) {
  throw new Error(`poem must be 1-280 Unicode code points, got ${poemLength}`);
}

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, poem, "utf8");
