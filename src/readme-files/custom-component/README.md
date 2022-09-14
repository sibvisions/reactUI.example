# Custom-Components

## 1. Adding Custom Components

## Overview
Custom-Components replace already existing components of a screen with your own react-coded components. The custom-components
will be at the same spot in the layout, as the components which got replaced. The size of the custom-component gets measured
and the layout will be adjusted.

Use custom-components if you want to add your react components, which aren't supported by swing to a screen of your application.

## Implementation

1. First you need to register a [screen-wrapper](src/readme-files/screen-wrapper) for the screen where the custom-component is placed. In the screen-wrapper create a variable which uses the ```useAPI``` hook to gain access to api-functions.

```typescript
const api = useAPI();
```

2. Define a function which will be passed as ```onOpen``` property to the screen-wrapper. In the function call the ```screen.addCustomComponent``` function.

### screen.addCustomComponent Parameters
Parameter | Type | Description
--- | --- | --- |
id | string | ID of the component you want to replace, can be found in VisionX.
component | ReactElement | The custom component which should be added.

```typescript
    const onOpen = () => {
        screen.addCustomComponent("Fir-N7_B_DOOPEN", <CustomCounter />)
    }
```

## Example
I've replaced a button of a screen with a [react counter component](../../features/CustomCounter.tsx)

### Here is a screenshot of the screen before I've added the custom-component

![custom-component-before-replace](../readme-images/cc-sec-before.png)

### When adding the custom-component

![custom-component-after-replace](../readme-images/cc-sec-after.png)

## Removing Custom-Components

## Overview
Removes a component from a workscreen. The layout will be adjusted to the removed component. Used if you want to remove existing components from VisionX to not see them in web.

## Implementation

1. The same as step 1 of adding custom-components above.

2. Define a function which will be passed as ```onOpen``` property to the screen-wrapper. In the function call the ```screen.removeComponent``` function.

### screen.addCustomComponent Parameters
Parameter | Type | Description
--- | --- | --- |
id | string | ID of the component you want to remove, can be found in VisionX.

```typescript
    const onOpen = () => {
        screen.removeComponent("Fir-N7_B_DOOPEN");
    }
```

## Example
### Before I removed a component

![before-removing-component](../readme-images/rc-before-rem.png)

### After

![after-removing-component](../readme-images/rc-after-rem.png)