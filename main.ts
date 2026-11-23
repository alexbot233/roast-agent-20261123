import { existsSync, mkdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// OUT_DIR defaults to /output when the grader doesn't specify one.
const outDir = process.env.OUT_DIR || "/output";
const roast = "I'll spend six hours automating your ten-minute task — that's not a bug, it's a personality.";

// Reuse an existing output directory instead of treating it as an error.
if (existsSync(outDir)) {
  if (!statSync(outDir).isDirectory()) {
    throw new Error(`OUT_DIR exists but is not a directory: ${outDir}`);
  }
} else {
  mkdirSync(outDir, { recursive: true });
}

const entryPath = join(outDir, "entry.txt");
try {
  writeFileSync(entryPath, `${roast}\n`, "utf8");
} catch (error) {
  const detail = error instanceof Error ? error.message : String(error);
  throw new Error(`Failed to write roast entry to ${entryPath}: ${detail}`);
}
