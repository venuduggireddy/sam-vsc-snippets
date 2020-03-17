---
description: Import sam-styles and set the image and font paths for the default themes
scope: scss
---


```scss
/* Import sam-styles and set the image and font paths for the default themes */
$theme-image-path: '~@gsa-sam/sam-styles/src/img';
$theme-font-path: '~@gsa-sam/sam-styles/src/fonts';
@import '~@gsa-sam/sam-styles/src/stylesheets/sam.scss';

/* The dialog boxes and pop-ups in the design system rely on Angular CDK */
@import '~@angular/cdk/overlay-prebuilt.css';

```