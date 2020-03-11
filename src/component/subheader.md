---
prefix: subheader
description:
  en-US: subheader
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

  <!-- =============== PRIMARY/SECONDARY BUTTONS =============== -->
  <ng-container subheader-buttons-container>
    <button class="usa-button usa-button--secondary">${2|Button|}</button>
    <button class="usa-button margin-top-05 tablet:margin-top-0">${3|Button|}</button>
  </ng-container>

  <!-- =============== SEARCH =============== -->
  <sds-search
    (term)="${4|log($event)|}"
    parentSelector=".grid-row"
    placeholder="Entity an entity ID, name, or keyword"
    inputClass="width-card-lg widescreen:width-mobile display-none desktop-lg:display-inline-block"
  >
  </sds-search>

  <!-- =============== ACTIONS BUTTONS =============== -->
  <sds-subheader-actions
    [model]="${5|menu|}"
    (clicks)="${6|log($event)|}"
  ></sds-subheader-actions>

  <!-- =============== DRAWER CONTENT =============== -->
  <sds-subheader-drawer
    [drawerContentTemplate]="contentTemplate"
  ></sds-subheader-drawer>
</sds-subheader>

<ng-template #contentTemplate>
  <div class="bg-accent-cool-lighter padding-1">
    $0
  </div>
</ng-template>

```