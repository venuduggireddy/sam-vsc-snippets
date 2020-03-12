---
description: Collapse component with show hide content
scope: html
---

```html
 <div class="text-center">
  <button type="button"
  class="usa-button text-center"
  [attr.aria-expanded]="!${1|isCollapsedContent|}"
  aria-controls="${2|collapseID|}"
  (click)="${1|isCollapsedContent|} = !${1|isCollapsedContent|}"
  > Show / Hide Content
  </button>
 </div>


<p
  id="${2|collapseID|}"
  [sdsCollapse]="${1|isCollapsedContent|}"
   class="bg-base-lighter margin-top-1 padding-2">
   $0
</p>

```