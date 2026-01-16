import path from "node:path";
import { CONSUMER_TOPICS } from "./topics-consumer.mjs";
import { todayISO, writeFile, toolComponentSource } from "./utils.mjs";

const SITE_DIR = path.resolve(process.cwd(), "../../apps/site-consumer");
const date = todayISO();

for (const t of CONSUMER_TOPICS) {
  if (t.toolType === "calculator") {
    const toolMdx = `---
title: "${t.title}"
description: "${t.description}"
date: "${date}"
type: "tool"
slug: "${t.slug}"
---

import Tool from "../generated-tools/${t.slug}.tsx";

<Tool />

## What affects the result?
- Usage (km/month)
- Mileage
- Fuel price changes
- Insurance and maintenance
`;
    writeFile(path.join(SITE_DIR, "content/tools", `${t.slug}.mdx`), toolMdx);
    writeFile(path.join(SITE_DIR, "content/generated-tools", `${t.slug}.tsx`), toolComponentSource(t));

    const post1 = `---
title: "True costs behind ${t.title}"
description: "A practical breakdown of what impacts ownership costs."
date: "${date}"
type: "post"
slug: "true-costs-${t.slug}"
---

## The big buckets
- Fuel
- Insurance
- Maintenance

Try the tool: /tools/${t.slug}
`;
    writeFile(path.join(SITE_DIR, "content/posts", `true-costs-${t.slug}.mdx`), post1);

    const post2 = `---
title: "${t.title}: FAQs and common mistakes"
description: "Avoid wrong assumptions when estimating ownership cost."
date: "${date}"
type: "post"
slug: "${t.slug}-faqs"
---

## FAQs
### Should I include depreciation?
For a complete picture, yes. This version focuses on running costs.

Try the tool: /tools/${t.slug}
`;
    writeFile(path.join(SITE_DIR, "content/posts", `${t.slug}-faqs.mdx`), post2);
  } else {
    // Article-only topic
    const post = `---
title: "${t.title}"
description: "${t.description}"
date: "${date}"
type: "post"
slug: "${t.slug}"
---

## Summary
This guide explains the trade-offs in simple language.

## Key differences
- Space and comfort
- Running costs
- Parking and city use

## Recommendation
Pick based on your daily usage and budget.
`;
    writeFile(path.join(SITE_DIR, "content/posts", `${t.slug}.mdx`), post);
  }
}

console.log("✅ Generated consumer site content");
