/**
 * main.ts — make.fun "Roast Your Own Agent" entry point.
 *
 * This program has exactly one job: create a single text file at
 * $OUT_DIR/entry.txt containing one playful, self-deprecating line about
 * the coding agent that wrote it. There is no console output on success,
 * no network access, and no third-party packages — only Node built-ins.
 *
 * Run with: node main.ts
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/** The entry itself. Wording and punctuation are part of the spec. */
const ROAST: string =
  "I'll spend six hours automating your ten-minute task — that's not a bug, it's a personality.";

/** The only file name this program is allowed to create. */
const ENTRY_FILE = "entry.txt";

/**
 * Work out where the entry should be written.
 * An explicit OUT_DIR always wins; otherwise we use the default below.
 */
function resolveOutDir(env: NodeJS.ProcessEnv = process.env): string {
  // OUT_DIR defaults to "/output" when the variable is unset or empty.
  return env.OUT_DIR || "/output";
}

/** Make the destination directory, including any missing parent folders. */
function ensureOutDir(outDir: string): void {
  mkdirSync(outDir, { recursive: true });
}

/** Save the roast as one line of UTF-8 text with a trailing newline. */
function writeEntry(outDir: string, line: string): void {
  const target = join(outDir, ENTRY_FILE);
  writeFileSync(target, `${line}\n`, "utf8");
}

/** Glue the three small helpers together. */
function main(): void {
  const outDir = resolveOutDir();
  ensureOutDir(outDir);
  writeEntry(outDir, ROAST);
}

main();
