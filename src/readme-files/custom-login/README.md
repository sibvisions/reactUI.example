# Custom-Login

## Overview
You are able to replace the default login-views, with your custom-login views for each login-mode. It is possible to just replace specific mode's so not every view has to be implemented.

## Implementation
1. Create your custom login-view components and write your own login-view.

### Custom Default Login View Properties
Parameter | Type | Description
--- | --- | --- |
username | string | The currently entered username.
password | string | The currently entered password.
setLoginMode | (loginMode: "default", "reset", "mFTextInput", "mFWait", "mFURL") => void | Sets the current login mode (displayed view).
sendLoginRequest| (username: string, password: string, rememberMe?:boolean, options?:any) => void | A function which sends a login-request to the server, pass the username and the password, if you want add a remember me field for autologin. In the options field you can pass any additional parameters which the server should process.

Source to an example custom-login-view can be found [here](../../features/CustomLoginView.tsx).

### Custom Reset Login View Properties
Parameter | Type | Description
--- | --- | --- |
username | string | The currently entered username.
password | string | The currently entered password.
setLoginMode | (loginMode: "default", "reset", "mFTextInput", "mFWait", "mFURL") => void | Sets the current login mode (displayed view).
sendResetRequest | (identifier: string, options?:any) => void | A function which sends a reset-password-request to the server, pass the identifier (e.g. email) and in the options field you can pass any additional parameters which the server should process.

Source to an example custom-reset-view can be found [here](../../features/CustomResetView.tsx).

### Custom MFAText Login View Properties
Parameter | Type | Description
--- | --- | --- |
username | string | The currently entered username.
password | string | The currently entered password.
setLoginMode | (loginMode: "default", "reset", "mFTextInput", "mFWait", "mFURL") => void | Sets the current login mode (displayed view).
sendLoginRequest| (username: string, password: string, code: string, options?:any) => void | A function which sends a login-request to the server, pass the username and the password and the code for your multi factor authentication. In the options field you can pass any additional parameters which the server should process.

### Custom MFAWait & MFAUrl Login View Properties
Parameter | Type | Description
--- | --- | --- |
username | string | The currently entered username.
password | string | The currently entered password.
setLoginMode | (loginMode: "default", "reset", "mFTextInput", "mFWait", "mFURL") => void | Sets the current login mode (displayed view).
mfaData | { code: string, timeout: number, timeoutReset: boolean, undefined }, { link: string/    {target?: "_self", "_blank", url: string, height?: number, width?: number}, timeout: number, timeoutReset: boolean, undefined } | Contains the information for the multi factor authentification.

2. In your main class (e.g. App.tsx) call the `api.addCustomLogin` function in a function, which will then be passed in the `onStartup` property used in the `ReactUI` component.

### api.addCustomLogin Parameters
Parameter | Type | Description
--- | --- | --- |
defaultView | (props: ICustomDefaultLogin) => ReactElement, undefined | A function to render your custom login.
resetView | (props: ICustomResetLogin) => ReactElement, undefined | A function to render your custom reset.
mfaTextView | (props: ICustomMFAText) => ReactElement, undefined | A function to render your custom multi factor authentication (text).
mfaWaitView | (props: ICustomMFAWait) => ReactElement, undefined | A function to render your custom multi factor authentication (wait).
mfaUrlView | (props: ICustomMFAUrl) => ReactElement, undefined | A function to render your custom multi factor authentication (url).

``` typescript
    const api = useAPI();

    const onStartup = () => {
        api.addCustomLogin((props) => <CustomLoginView {...props} />, true, true);
    }

    return (
        <ReactUI onStartup={onStartup} />
    );
```

### Example

#### **Before adding the Custom Login View**
Loginmode "default":
![default-login-before](../readme-images/custom-login-default-before.PNG)

Loginmode "reset":
![reset-login-before](../readme-images/custom-login-reset-before.PNG)

#### **After adding the Custom Login View**
Loginmode "default:
Loginmode "default":
![default-login-before](../readme-images/custom-login-default-after.PNG)

Loginmode "reset":
![reset-login-before](../readme-images/custom-login-reset-after.PNG)