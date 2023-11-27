---
title: "Remix.run - CSRF Token"
summary: "Remix.runにおいて、CSRFトークンの検証をできるようにする"
date: 2023-11-27T11:00:00+09:00
draft: false
pin: true
tags: ["react"]
---

- `remix-utils` を使う
- `csrf.server.ts` というサーバーユーティリティを作る
- `csrf` に使うクッキーを定義して、`csrf` インスタンスを作成する

- `CSRF#commitToken` でトークンとクッキーヘッダを呼べる
- `AuthenticityTokenProvider` コンポーネントでトークンを渡す

- あるフォームにて、`AuthenticityTokenInput` でフォームにトークンを追加する

- `useFetcher` や `useSubmit` を使っている場合は `useAuthenticityToken` フックがある

- `action` 内で `CSRF#validate` でトークンの検証をする
