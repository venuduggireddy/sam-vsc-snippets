---
description: Pagination with top and bottom options
scope: html
---

```html
<sds-pagination
  [paginationConfiguration]="${1|top,bottom|}"
  [(page)]="page"
  (pageChange)="pageChange.next($event)">
</sds-pagination>
```
