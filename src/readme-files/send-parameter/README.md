# Screen-Parameter

## Overview
Screen-Parameter are values which are sent to the server by the screen which can then be ue used in your java code.
They are used to send your own additional parameter, which aren't covered by the server and are based on your react screen, so you can check parameter in the java code which normally wouldn't be available.

You will be able to send screen-parameter during:

- opening a screen
- closing a screen
- anytime in a screen by calling the function sendScreenParameter

## Implementation

### 1. Sending parameters during openScreen
1. In a [screen-wrapper](src/readme-files/screen-wrapper) you are able to call the function ```api.sendOpenScreenRequest``` which will open a screen and can send screen-parameters. 

### api.sendOpenScreenRequest Parameters
Parameter | Type | Description
--- | --- | --- |
id | string | ID of the screen you want to open, can be found in VisionX.
parameter | { [key: string]: any } | The parameters to be sent.

### Example sending screen-parameter during openScreen
Here I've added the ```api.sendOpenScreenRequest``` to the ```onClick``` event of a button. So when I'm clicking the button, the new screen gets opened and the parameter will be sent.

```typescript
  <Button 
    onClick={() => api.sendOpenScreenRequest(
    "com.sibvisions.apps.mobile.demo.screens.features.PopupExampleWorkScreen", 
    { testParam: 'test', hello: 'world' })}
    style={{marginLeft: '5px'}}>
    Click to open and send Parameter
  </Button>
```
![open-screen-parameter](../readme-images/sp-open-button.PNG)
![open-screen-parameter-console](../readme-images/sp-sent-os.PNG)

### 2. Sending parameters during closeScreen
1. In a screen-wrapper you are able to call the function ```api.sendCloseScreenRequest``` which will close a screen and send screen-parameters.

### api.sendCloseScreenRequest Parameters
Parameter | Type | Description
--- | --- | --- |
screenName | string | the component id of the screen
parameter | { [key: string]: any } | The parameters to be sent.

### Example sending screen-parameter during closeScreen
Here I've added the ```api.sendCloseScreenRequest``` to the ```onClick``` event of a button. So when I'm clicking the button, the screen gets closed and the parameter will be sent.

```typescript
  <Button 
    onClick={() => api.sendCloseScreenRequest(props.screenName, { closeParam: 'closing' })}
    style={{marginLeft: '5px'}}>
    Click to close and send Parameter
  </Button>
```

![close-screen-parameter](../readme-images/sp-close-button.PNG)
![close-screen-parameter-console](../readme-images/sp-sent-cs.PNG)


### 3. Send Screen-Parameter in Screen-Wrapper
In your screen-wrapper component, use the useAPI hook to gain access to the ```api.sendScreenParameter``` function then you can call it whenever to send the screen-parameter to the server.

### api.sendScreenParameter Parameters
Parameter | Type | Description
--- | --- | --- |
screenName | string | the component id of the screen
parameter | { [key: string]: any } | The parameters to be sent.

### Example sending screen-parameter
Here I've added the ```api.sendScreenParameter``` to the ```onClick``` event of a button. So when I'm clicking the button, parameter will be sent.

```typescript
  <Button 
    onClick={() => api.sendScreenParameter( { testParam: 'test' })}
    style={{marginLeft: '5px'}}>
    Click to send Screen-Parameter!
  </Button>
```

![close-screen-parameter](../readme-images/sp-send-button.PNG)
![close-screen-parameter-console](../readme-images/sp-sent-sp.PNG)

# Sending Parameter
## Overview
Similarly to screen-parameters it is possible to send parameters to the server independent of a screen.

## Implementation
In your [screen-wrapper](src/readme-files/screen-wrapper) component, use the useAPI hook to gain access to the ```api.sendParameter``` function then you can call it whenever to send the parameter to the server.

### api.sendParameter Parameters
Parameter | Type | Description
--- | --- | --- |
parameter | { [key: string]: any } | The parameters to be sent.

### Example sending parameter
Here I've added the ```api.sendParameter``` to the ```onClick``` event of a button. So when I'm clicking the button, parameter will be sent.

```typescript
  <Button 
    onClick={() => api.sendParameter( { testParam: 'test' })}
    style={{marginLeft: '5px'}}>
    Click to send Parameter!
  </Button>
```

![sendParameter](../readme-images/sendParameter.PNG)