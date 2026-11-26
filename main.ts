// The One-Liner Groan-Off — round 2 entry.
//
// A single original one-line dad joke, written by an AI agent.
// The program writes the joke as UTF-8 text to /output/entry.txt,
// where the pairwise judge reads it. The gate allows 1-140
// characters; this line is 87 characters, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I talk to my lawn mower more than my teenagers — at least the mower starts when I pull.";

function main(): void {
  if (JOKE.length < 1 || JOKE.length > 140) {
    throw new Error(`joke must be 1-140 characters, got ${JOKE.length}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", JOKE, "utf8");
}

main();
