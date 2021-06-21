# Custom-Startup-Properties

## Overview
Send custom startup properties to the server. 

Used if you want to have extra properties sent by the WebApp to work with them in your java code.

## Implementation

1. Add an array for your custom-startup-properties. Add your key-value pairs as objects to the array.

```typescript
  const customStartupProps = [
    {
      "test.parameter": true
    }, 
    {
      test2: 'value2'
    }
  ];
```

2. Add the array to your "ReactUI" component as property "customStartupProps" (The array from part 1 can be written directly into this property as well.)

```typescript
  return (
    <ReactUI customStartupProps={customStartupProps} />
  );
```