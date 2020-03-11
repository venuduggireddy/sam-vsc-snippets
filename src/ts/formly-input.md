---
description:
  en-US: SF
scope: typescript
---

```typescript
{
      key: '${1}',
      wrappers: ['${2|filterwrapper,accordionwrapper|}'],
      templateOptions: { label: '${3|Label|}' },
      fieldGroup: [{
        key: '${4|key|}',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: '${3|Label|}',
          hideLabel: true
        },

      }]
    }

```
