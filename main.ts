// Till Firmware Do Us Part — make.fun entry (u-azazex-till-firmware-do-us-part-32172929).
// A deterministic program: it writes one wedding vow, spoken by a robot at
// its own wedding, to /output/entry.txt. The vow retells the classic wedding
// promise ("in sickness and in health, for richer, for poorer") in machine
// terms, and closes on a machine's version of "till death do us part".
import { mkdirSync, writeFileSync } from "node:fs";

const VOW: string =
  "I vow to love you in sickness and in low battery, for richer code and for poorer signal, until my last fan stops spinning.";

// Gate check, mirroring the bounty scorer: one sentence, 1–200 characters,
// no trailing newline, so the file the judge reads is exactly this vow.
const sentenceCount: number = VOW.split(".").filter((part) => part.trim().length > 0).length;
if (VOW.trim().length === 0 || VOW.length > 200 || sentenceCount !== 1) {
  throw new Error(`Vow fails the gate: ${VOW.length} chars, ${sentenceCount} sentence(s).`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", VOW, "utf8");
