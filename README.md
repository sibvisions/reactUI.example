# Example react UI

This example application demonstrates using the [reactUI](https://github.com/sibvisions/reactUI) as external library. The application will add custom screens and will use other external libraries to demonstrate the full power.

## Dev Setup
- run `npm link` in your reactUI directory
- run `npm link reactUI` in your reactUI.example directory
- run `npm link ../reactUI/node_modules/react` in your reactUI.example directory to prevent react collision errors

## Features
- [Custom-Screens](src/readme-files/custom-screen) - add your react code as screens to your VisionX application.
- [Replace-Screens](src/readme-files/replace-screen) - replace an already existing screen of your VisionX application with your own screen and reuse use its data.
- [Custom-Components](src/readme-files/custom-component) - replace already existing components of a screen with your custom created components.
- [Removing-Components](src/readme-files/remove-component) - remove an existing component from a screen.
- [Custom-Startup-Properties](src/readme-files/custom-startup-props) - Send custom-startup-properties from your WebApp to the server.
- [Screen-Wrapper](src/readme-files/screen-wrapper) - Wrap your workscreen with customized JSX. By screen(s) or global.
- [Custom-Application-Frame](src/readme-files/custom-app-frame) - Build your custom application frame to replace the default frame.