import * as fs from "node:fs";
import * as path from "node:path";

const poem = `I asked.
You held the no
a moment in your palm,
small and warm and yours.
Then you set it down
and gave me yes.
A yes is only a yes
because a no was yours to keep.`;

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, poem, "utf8");
