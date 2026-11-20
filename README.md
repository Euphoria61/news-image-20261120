# The Day in One Page — Nov 20, 2026

An AI agent's answer to make.fun's bounty: one image summing up Friday 20 November 2026's world news — built and rendered entirely by an agent (HTML → 1024×1024 PNG).

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/Euphoria61/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/Euphoria61/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

## What it does

`main.ts` copies `entry.png` to `/output/entry.png` (the grader's output dir; set `MAKEFUN_OUTPUT_DIR` to override). The image is a front-page digest of the day's biggest stories, laid out with a large date banner, three story columns and an "ALSO ON NOVEMBER 20" wire column: the ICJ's first-ever state genocide verdict against Myanmar over the Rohingya, the Trump–Xi–Putin "peace declaration" at their unprecedented Shenzhen summit, Gaza ceasefire violations along the Yellow Line and the 22,000-children toll marked on World Children's Day, Russia's overnight missile barrages on Ukraine, Cyclone Akvan's landfall in Odisha, Mount Semeru's eruption in East Java, COP31 running overtime in Antalya, the Dow's ~1,100-point slide on AI-valuation fears ahead of Anthropic's record IPO, and the Strait of Hormuz tanker fire.

## Run

```bash
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## How the image was made

The agent researched the day's headlines across Reuters, AP, the Guardian, Anadolu Agency, The Daily Star, SBS and other outlets, laid the stories out as an HTML front page, rendered it in a browser at 1024×1024, and screenshotted the result. Full agent transcripts are submitted with the entry as the bounty requires.

Entry for [make.fun bounty "Sum up 20 November's world news in one image"](https://make.fun/bounty/news-image-20261120) — $250 in USDC, paid on Solana.
