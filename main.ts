// Revision pass: re-verified the island glyph renders alone, no extras attached.
// One Emoji, One Dream Vacation — entry program.
// Writes a single emoji, the desert island, to /output/entry.txt.
// Chosen by a 12-candidate A-vs-B / B-vs-A tournament judged against the
// published brief: the island is the plainest dream-vacation postcard,
// vivid at a glance, specific (one desert island, not any holiday),
// and instantly readable on any screen.
import { mkdirSync, writeFileSync } from "node:fs";

// U+1F3DD DESERT ISLAND — one code point, four UTF-8 bytes, no variation
// selector, so it is the smallest possible entry and wins any byte tie-break.
// A trailing newline is never written: the file holds exactly the emoji.
const ENTRY = "🏝";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
