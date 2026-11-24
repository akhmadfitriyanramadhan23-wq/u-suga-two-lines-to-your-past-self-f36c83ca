import { mkdirSync, writeFileSync } from "node:fs";

// Two lines to a past self: line one warns about one specific
// moment (2 a.m., kitchen table, Mara leaving for Lisbon),
// line two traces the cause and effect — the unsent message
// is what kept the door open for the June call back.
const lines = [
  "Don't text Mara at 2 a.m. from the kitchen table the night she said she was leaving for Lisbon, when you already knew her answer.",
  "Leaving that message unsent kept the door open until she called from Lisbon in June, and you rebuilt everything from that one quiet night.",
];

const text = lines.join("\n") + "\n";

// Guard: the gate requires 1-280 characters and exactly two lines.
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry must be 1-280 characters, got ${codePoints}`);
}
if (lines.length !== 2 || lines.some((line) => !line.trim())) {
  throw new Error("entry must be exactly two non-empty lines");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
