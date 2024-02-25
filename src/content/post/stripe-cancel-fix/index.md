---
title: "サブスクのスケジュールをキャンセルする時にサブスクもキャンセルしたい"
publishDate: "24 Feburary 2024"
description: ""
tags: ["stripe"]
draft: false
---

end_behaviorがcancelの(キャンセル予定の)scheduleを持つサブスクリプションを取り消すとき、単にscheduleをreleaseしてもサブスクリプション自体のキャンセルは取り消されないので、[preserve_cancel_date](https://docs.stripe.com/api/subscription_schedules/release#release_subscription_schedule-preserve_cancel_date)というパラメータで対応

```typescript
await stripeClient.subscriptionSchedules.release(schedule, {
	preserve_cancel_date: false,
});
```
