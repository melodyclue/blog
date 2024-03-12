---
title: "lefthookでコミット時のlintを自動化する"
description: ""
publishDate: 12 March 2024
tags: ['lefthook']
draft: false
---

[lefthook - Gitフックを作成するライブラリ](https://github.com/evilmartians/lefthook)
例えば... コミットする前にprettierとeslintを実行する、コミット前にコミットメッセージがコミット規約に準じているかをチェックする

[commitlint - コミットメッセージが一般的なコミット規約に順しているかをチェックするlint](https://github.com/conventional-changelog/commitlint)

`lefthook.yml`を更新した後に`lefthook install`するとgit hookが作成される

```yml title="lefthook.yml"
commit-msg:
  commands:
    lint-commit-msg:
      run: npx commitlint --edit
```
