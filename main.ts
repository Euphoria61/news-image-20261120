// V6 front page entrypoint, authored by the agent for make.fun's news-image-20261120 bounty.
// The agent maintains this pipeline by hand for the 20 November 2026 edition: it
// validates the rendered front-page image, keeps it under the gate's 1 MiB cap,
// then copies the exact judged bytes to the grader's /output directory.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url).pathname;
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(outDir, 'entry.png');

const MAX_BYTES = 1024 * 1024;
const size = statSync(src).size;
if (size > MAX_BYTES) {
  throw new Error(`entry: ${size} bytes exceeds the ${MAX_BYTES}-byte gate cap`);
}

copyFileSync(src, dest);
console.log(`entry: ${size} bytes, copied ${src} -> ${dest}`);
