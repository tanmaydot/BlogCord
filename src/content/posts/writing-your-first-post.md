---
title: Writing your first post
description: Front matter fields, tags as channels, and pinning.
pubDate: 2026-10-05
tags: [guide]
---

Create a file like `src/content/posts/my-post.md`:

```md
---
title: My post
description: One line shown in the feed.
pubDate: 2026-10-12
tags: [notes]
---
```

Each tag becomes a channel in the sidebar. Set `pinned: true` to pin a post at the top, or `draft: true` to hide it from production builds.
