# Example react UI

This example application demonstrates using the [reactUI](https://github.com/sibvisions/reactUI) as external library. The application will add custom screens and will use other external libraries to demonstrate the full power.

## Dev Setup

### With npm install
- If you are using create-react-app make sure to downgrade react to v17.0.x (https://stackoverflow.com/a/71908461)
- Run `npm install @sibvisions/reactui` to install the reactUI as dependency
- Run `npm install @sibvisions/reactui` to install the reactUI as dependency
- In your `package.json` file, create a "init" command which copies files from reactui's resource folder to your projects public folder. 
```
  "scripts": {
    "init-unix": "cp -R node_modules/@sibvisions/reactui/resources public",
    "init-win": "Xcopy /E /I .\\node_modules\\@sibvisions\\reactui\\resources .\\public",
    "start": "react-scripts start", ...
  }
``` 
(This is necessary for themes and color-schemes and other resources)
- Run your init command with `npm run init`

### Advanced Setup (with npm link)
- Run `npm link` in your reactUI directory
- Run `npm link @sibvisions/reactui` in your reactUI.example directory
- Run `npm link ../reactUIExample/node_modules/react` in your reactUI directory to prevent react collision errors
- If you run `npm install`, you have to repeat step 2 and 3!
- If you run into issues, where it says that reactUI can't be found, run ```npm run bundle``` or ```npm run devbundle```, depending on whether you want to use production or development environmental variables, in your reactUI directory to create the dist directory where the example will receive the components, functions etc.

If you run `npm run devbundle`, the reactUI will run in "development" mode so it is possible to add a `config.json` file, which contains parameters which would normally be added in the url.

### config.json
If you don't enter the required properties in the URL, it is also possible to add a config.json file into your public directory:
```json
{
    "appName": "[application name here]",
    "baseUrl": "[baseUrl here]",
    "userName": "[username here]",
    "password": "[password here]",
    "deviceMode": "[deviceMode]",
    "langCode": "[language (en, de)]",
    "logoBig": "[path to logo in public directory]",
    "logoSmall": "[path to logo in public directory]",
    "logoLogin": "[path to logo in public directory]"
    "theme": "[theme here]",
    "colorScheme": "[color-scheme here]"
}
```

Note that the `baseUrl` property is **NOT** your browser URL, it is the URL to connect to application Server.

## Getting Started
Import the "ReactUI" Component from the reactUI library, in your main file (e.g. App.tsx) render the component and pass properties as you wish.

### Properties for the ReactUI Component
Name | Type | Description
--- | --- | --- |
customAppWrapper | React.ComponentType | A custom-application-frame for your WebApp, check out the link below for more info
onStartup | Function | A function which will be called, when the application sends the startup request to the server
onLogin | Function | A function which will be called, when the user logs in.
onMenu | Function | A function which will be called, when the client receives the menu-information from the server.
onOpenScreen | Funtion | a function which will be called when a screen is opened.

### Example
```typescript
  return (
    <ReactUI 
      onStartup={onStartup}
      onMenu={onMenu}
      onLogin={onLogin}
      customAppWrapper={CustomAppWrapper}
      />
  );
```

Run `npm start` to run your project. Here is an example URL you can use to see the demo. (JVx.mobile server required): http://localhost:3000/?language=en&appName=demo&baseUrl=http://localhost:8080/JVx.mobile/services/mobile#

## Features

### **To use the api functions define a variable with the 'useAPI' hook!**
```typescript
const api = useAPI();
```

- [Custom-Screens](src/readme-files/custom-screen) - add your react code as screens to your application.
- [Replace-Screens](src/readme-files/replace-screen) - replace an already existing screen of your application with your own screen and reuse use its data.
- [Custom-Components](src/readme-files/custom-component) - replace already existing components of a screen with your custom created components or remove an existing component from a screen.
- [Extend-Components](src/readme-files/extend-components) - extend existent components events with your own functions.
- [Custom-Startup-Properties](src/readme-files/custom-startup-props) - Send custom-startup-properties from your WebApp to the server.
- [Screen-Wrapper](src/readme-files/screen-wrapper) - Wrap your workscreen with customized JSX. By screen(s) or global.
- [Custom-Application-Frame](src/readme-files/custom-app-frame) - Build your custom application frame to replace the default frame.
- [Send Screen-Parameter to the Server](src/readme-files/screen-parameter) - Send screen-parameter to the server.
- [Edit/Remove Menu-Items](src/readme-files/edited-menu) - Edit or remove menu-items sent by the server.
- [API demonstration](src/readme-files/example-screen) - An example for screen customization and usage of API functions and hooks.

## API-Documentation
Click [here](https://github.com/sibvisions/reactUI#api-documentation) to get to the API-documentation. You can find additional information about available API-functions, hooks and requests.
