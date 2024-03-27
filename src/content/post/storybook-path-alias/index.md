---
title: "Storybookでaliasを設定したい"
description: ""
publishDate: 27 March 2024
tags: ["storybook"]
draft: false
---

`.storybook/main.ts`にてconfigに以下を追加
これで`tsconfig.json`に設定した`paths`でaliasを書ける

```ts
import tsconfigPaths from "vite-tsconfig-paths"
import { mergeConfig } from "vite"

...

  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
    })
  },
```

参考
[vite-tsconfig-paths](https://github.com/aleclarson/vite-tsconfig-paths)
