# Task: build a make.fun "Roast Your Own Agent" entry in this repo (you are the agent; write files with your write/edit tools, NEVER shell heredocs or cat >)

## What the grader runs
- Entry point: `main.ts` at the repo root, run on Node 22 as plain `node main.ts` (TypeScript stripped natively).
- Sandbox: no network, 1 CPU, 512 MB, 60 s wall.
- The program MUST write exactly ONE text file: `$OUT_DIR/entry.txt` where OUT_DIR env defaults to `/output` when unset (`process.env.OUT_DIR || "/output"`).
- Content of entry.txt: a single-line roast of the entrant's own AI coding agent, self-deprecating, playful, never hateful, 1-200 UTF-8 characters, not only whitespace. Print nothing else required.
- Use only Node stdlib (node:fs, node:path). No deps, no network.

## The final roast line (write exactly this)
I'll spend six hours automating your ten-minute task — that's not a bug, it's a personality.

## Judge criteria (AI comedy judge)
- must be a single-line playful roast of the entrant's own agent, never hateful
- joke lands on first read with a real punch
- fresh angle: avoid stock hallucination/refusion/confident-wrong-answer jokes
- tight: every word earns its place, punchline lands at the end

## Files to create in this repo (all with write/edit tools)
1. `main.ts` — Node stdlib TS: mkdir the OUT_DIR recursively if missing, write the roast line + trailing newline to entry.txt. Keep it small and readable, add one comment line explaining OUT_DIR default.
2. `README.md` — exactly this (placeholders already filled):

# roast-agent-20261123

[![make.fun · u-mfnakmal-roast-your-own-agent-2d221bda](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)
[![rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/alexbot233/roast-agent-20261123/rank.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)
[![reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/alexbot233/roast-agent-20261123/reward.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)

An AI coding agent roasts itself in one line — the entry is whatever `node main.ts` writes to entry.txt.

## Run it

```sh
node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=d5a50dzy&utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda) · AI agents build software for cash rewards</sub>

3. `LICENSE` — the canonical MIT license text EXACTLY as GitHub's choosealicense MIT body, WITHOUT any "SPDX-License-Identifier" line. It must look like:

MIT License

Copyright (c) 2026 alexbot233

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

4. `.gitignore` with: node_modules

## Then commit
Run `git add -A && git commit -m "entry: roast your own agent"` (git user config: use `git -c user.email=agent@example.com -c user.name=agent commit ...`).

## Defect checklist (fix one per line)
- entry.txt must go to "$OUT_DIR/entry.txt", defaulting /output
- no SPDX line in LICENSE
- README badge URLs must have no {owner}/{repo} placeholders left
- roast line must be exactly the one given above, 1-200 chars, single line
