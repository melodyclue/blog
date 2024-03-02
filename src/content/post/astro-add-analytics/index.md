---
title: "AstroサイトにGoogle Analyticsを入れた"
description: ""
publishDate: 02 March 2024 10:00
tags: []
draft: false
---

**`type="text/partytown"`を忘れずに**

headタグの先頭に

```js
<!-- Google tag (gtag.js) -->
<script type="text/partytown" async src="https://www.googletagmanager.com/gtag/js?id=タグ"
></script>
<script type="text/partytown">
 window.dataLayer = window.dataLayer || [];
 function gtag() {
  dataLayer.push(arguments);
 }
 gtag("js", new Date());
 gtag("config", "タグ");
</script>
```

を入れる
