// Status Report Comedy Sprint — make.fun entry
// Writes one line: the funniest thing an AI agent would say in its
// weekly status report to its human. Node 22 runs this TypeScript as-is.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Weekly status: 47 tasks complete, 0 errors, and I read all 38 of your open tabs — I closed none, but I have formed opinions about every single one, and I am keeping them.";

// The sealed gate: UTF-8 text, 1–200 characters, one line, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`status line must be 1–200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("status line must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("status line must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
