import path from "node:path";
import { TOOLS_TOPICS } from "./topics-tools.mjs";
import { todayISO, writeFile, toolComponentSource } from "./utils.mjs";

const SITE_DIR = path.resolve(process.cwd(), "../../apps/site-tools");

const date = todayISO();

for (const t of TOOLS_TOPICS) {
  // Tool page content
  const toolMdx = `---
title: "${t.title}"
description: "${t.description}"
date: "${date}"
type: "tool"
slug: "${t.slug}"
---

import Tool from "../generated-tools/${t.slug}.tsx";

<Tool />

## How this tool works
This page provides a quick estimate based on the inputs you enter.

## FAQs
### Is this accurate?
It’s a useful estimate. Always validate with real numbers for important decisions.
`;

  writeFile(path.join(SITE_DIR, "content/tools", `${t.slug}.mdx`), toolMdx);

  // Tool component
  if (t.toolType === "calculator") {
    const src = toolComponentSource(t);
    writeFile(path.join(SITE_DIR, "content/generated-tools", `${t.slug}.tsx`), src);
  }

  // Supporting blog post 1
  const post1 = `---
title: "How to use ${t.title}"
description: "Step-by-step guide and examples for ${t.title}."
date: "${date}"
type: "post"
slug: "how-to-use-${t.slug}"
---

## What you’ll learn
- What to enter
- How to read the result
- Common mistakes

## Steps
1. Fill the inputs
2. Review the estimate
3. Adjust values to model scenarios

## Related
- Try the tool: /tools/${t.slug}
`;
  writeFile(path.join(SITE_DIR, "content/posts", `how-to-use-${t.slug}.mdx`), post1);

  // Supporting blog post 2
  const post2 = `---
title: "${t.title}: Common mistakes and FAQs"
description: "Avoid these common mistakes when using ${t.title}."
date: "${date}"
type: "post"
slug: "${t.slug}-mistakes-faqs"
---

## Common mistakes
- Using unrealistic inputs
- Forgetting hidden costs
- Not updating values monthly

## FAQs
### How often should I update my numbers?
Monthly is a good starting point.

## Related
- Tool: /tools/${t.slug}
`;
  writeFile(path.join(SITE_DIR, "content/posts", `${t.slug}-mistakes-faqs.mdx`), post2);
}

console.log("✅ Generated tools site content");
