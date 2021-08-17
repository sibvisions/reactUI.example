# Custom-Startup-Properties

## Overview
Send custom startup properties to the server. 

Used if you want to have extra properties sent by the WebApp to work with them in your java code.

## Implementation

1. Create a function you will then pass as ```onStartup``` function to your ```ReactUI``` component. In this function call the ```api.addStartupProperties``` function and add an array with your key-value pairs as objects.

### api.addStartupProperties Parameters
Parameter | Type | Description
--- | --- | --- |
startupProps | Array<[key:string]: any> | Array of the startup properties to be sent

```typescript
  const onStartup = () => {
    api.addStartupProperties([{ "test.parameter": true }, { test2: 'value2' }]);
  }
```