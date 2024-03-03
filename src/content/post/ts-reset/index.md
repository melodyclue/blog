---
title: ts-resetを使うとより型安全になった
description: ""
publishDate: 03 March 2024
tags: ["typescript"]
draft: false
---

[ts-reset](https://www.totaltypescript.com/ts-reset)

`.filter(Boolean)`について

これが

```ts
// BEFORE
const filteredArray = [1, 2, undefined].filter(Boolean); // (number | undefined)[]
```

こうなるので、直感的な型安全になる

```ts
// AFTER
import "@total-typescript/ts-reset/filter-boolean";

const filteredArray = [1, 2, undefined].filter(Boolean); // number[]
```
