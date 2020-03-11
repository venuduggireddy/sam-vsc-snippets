---
prefix: pagination
description:
  en-US: pagination
scope: html
---

```html
<sds-pagination
  [paginationConfiguration]="${1|top,bottom|}"
  [(page)]="page"
  (pageChange)="pageChange.next($event)">
</sds-pagination>
```
