---
description: Side toolbar is designed to be able to accommodate different types of content including navigation and filtering components
scope: html
---

```html
<sds-toolbar [expanded]="true">
  <sds-accordion>
    <sds-accordion-item [disabled]="true" [expanded]="true">
      <sds-accordion-item-header>Navigate To</sds-accordion-item-header>
      <!-- Here is where you add your navigation or filtering component -->
    </sds-accordion-item>
    <sds-accordion-item [expanded]="false">
      <sds-accordion-item-header>Filter By</sds-accordion-item-header>
      <!-- Here is where you add your navigation or filtering component  -->
    </sds-accordion-item>
  </sds-accordion>
</sds-toolbar>
```
