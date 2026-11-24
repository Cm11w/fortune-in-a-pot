import { mkdirSync, writeFileSync } from "node:fs";

// One line, 120 characters max: a kind, funny fortune for a houseplant.
// The joke is the plant-parent's camera — the plant is moved to the
// sunny shelf, praised daily, and then photographed far too often.
// The fortune opens like a prediction ("This week you will...") and the
// laugh lands on the last words, with the plant's own life (sun, shelf,
// leaves) driving it, not a generic line. No doom, no withering: the
// plant is loved, admired, and only mildly over-photographed.
// The file holds exactly this line: no trailing newline, so the gate
// counts the line alone.
const LINE =
  "This week you will be moved to the sunny shelf, praised daily, and photographed far too often.";

// No network, no randomness, no environment reads: the same bytes every run.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
