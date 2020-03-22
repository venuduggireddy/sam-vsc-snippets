---
description: Side navigation model config typescript
scope: typescript
---

```typescript

import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

export let myCustomNavigationConfig: SideNavigationModel = {
    navigationLinks: [
    {
        id: 'entityInformation', text: 'Entity Information', route: '/search',
        queryParams: { 'index' : 'entityinfo'}, mode: NavigationMode.INTERNAL,
        children: [
        {
            id: 'registrations', text: 'Entity Registrations', mode: NavigationMode.INTERNAL,
            route: '/search', queryParams: { 'index' : 'registrations'}
        },
        {
            id: 'disasterResponse', text: 'Disaster Response Registry',
            mode: NavigationMode.INTERNAL, route: '/search',
            queryParams: { 'index' : 'disasterresponse'}
        },
        {
            id: 'exclusions', text: 'Exclusions', mode: NavigationMode.INTERNAL,
            route: '/search', queryParams: { 'index' : 'exclusions'}
        }]
    },
    {
        id: 'federalHierarchy', text: 'Federal Hierarchy', mode: NavigationMode.INTERNAL,
        route: '/search', queryParams: { ‘index’ : ‘fh’ }
    }]
};



```
