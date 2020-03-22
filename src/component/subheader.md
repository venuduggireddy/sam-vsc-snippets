---
description: Subheader with all options back-button, title, primary/secondary buttons, search, and actions menu buttons
scope: html
---

```html
<sds-subheader>
  <!-- =============== BACK BUTTON =============== -->
  <button class="sds-button sds-button--circular">
    <fa-icon [icon]="['fas', 'chevron-left']" [fixedWidth]="true"></fa-icon>
  </button>

  <!-- =============== TITLE =============== -->
  <h1 class="font-heading-md text-semibold tablet-lg:width-mobile">
    ${1|Title|}
  </h1>

 
  <!-- =============== SEARCH =============== -->
  <sds-search
    (term)="${2|log($event)|}"
    parentSelector=".grid-row"
    placeholder="Entity an entity ID, name, or keyword"
    inputClass="width-card-lg widescreen:width-mobile display-none desktop-lg:display-inline-block"
  >
  </sds-search>

   <!-- =============== PRIMARY/SECONDARY BUTTONS =============== -->
  <ng-container subheader-buttons-container>
    <button class="usa-button usa-button--secondary">${3|Button|}</button>
    <button class="usa-button margin-top-05 tablet:margin-top-0">${4|Button|}</button>
  </ng-container>


  <!-- =============== ACTIONS BUTTONS =============== -->
  <sds-subheader-actions
    [model]="${5|menu|}"
    (clicks)="${6|log($event)|}"
  ></sds-subheader-actions>

</sds-subheader>

```