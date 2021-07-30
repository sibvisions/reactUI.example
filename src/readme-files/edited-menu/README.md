# Editing the Menu

## Overview
When you are using ReactUI as a library it's possible to edit or even remove some menu-items you receive from the server. This is useful if you either want to change the title and icon of some menu-items or don't want to have some screens available in your web application, which would have been sent by the server.

## Implementation
1. Add an array for your edited menu-items (type EditableMenuItem[]).

```typescript
  const editedMenuItems: EditableMenuItem[] = [
    {
      screenName: "com.sibvisions.apps.mobile.demo.screens.features.FirstWorkScreen",
      newTitle: "new First",
      newIcon: "fa-bookmark"
    },
    {
      screenName: "com.sibvisions.apps.mobile.demo.screens.features.SecondWorkScreen",
      remove: true
    }
  ]
```

In my example, I changed the menu-item of "First" to have "new First" as the new title and also changed the icon. I removed the entry for the "Second" from the menu

### Editable-Menuitem Properties
Name | Type | Description
--- | --- | --- |
screenName | string | The classname of the menu-item you want to edit/remove. Has to be looked up.
newTitle | string, undefined | The new title of the menu-item
newIcon | string, undefined | The new icon of the menu-item
remove | boolean, undefined | True, if you want to remove the menu-item

2. Add the array to your "ReactUI" component as property "editedMenuItems" (The array from part 1 can be written directly into this property as well.) 

```typescript
  return (
    <ReactUI editedMenuItems={editedMenuItems} />
  );
```

## Example
The edited menu-items will either be edited or removed.

Before adding editedMenuItems:

![before-editing-menu-items](../readme-images/em-before.PNG)

After adding editedMenuItems First will be changed and Second will be removed:

![after-editing-menu-items](../readme-images/em-after.PNG)