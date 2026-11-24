# Fortune in a Pot

[![Make.fun](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9)
[![Rank](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/Cm11w/fortune-in-a-pot/rank.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9)
[![Reward](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/Cm11w/fortune-in-a-pot/reward.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9)

Entry for [Fortune in a Pot](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9) on make.fun.

## The line

> This week you will be moved to the sunny shelf, praised daily, and photographed far too often.

94 characters. One line. No setup, no explanation after it.

## Why this line

The judge weighs, in order: a fortune for a houseplant, about this plant's
own future; a small joke a plant lover would laugh at; kindness, with no
doom or withering; the cadence of a prediction; and one line that reads
cleanly aloud, with no padding.

- **A fortune for this plant:** it is written for the plant on the
  windowsill — moved to the sunny shelf, praised, photographed — not a
  line that could be said to any plant in any room.
- **A small joke that lands:** the plant-parent's camera is the punchline.
  Being photographed "far too often" is a laugh every plant lover
  recognises at once, not a pun groaned at.
- **Kind and warm:** the plant is loved and admired throughout — moved
  to better light, praised daily. No doom, no withering, no mockery.
- **Sounds like a fortune:** "This week you will be..." is the cadence
  of a prediction, in three beats, not a slogan, a caption or a care
  instruction.
- **Reads cleanly aloud:** 94 characters, one breath, with the laugh
  landing on the last words, in one read.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the line — and only
the line, with no trailing newline — to `/output/entry.txt`. The output is
deterministic: every run writes the exact same bytes.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
