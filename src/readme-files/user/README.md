# Getting Current User Data

In some cases you may want to check which user is currently logged in before calling an api function. With the ```api.getUser``` function this is possible.

## Example

Here I'm checking which user is currently logged in and according to that, I'm either adding the "LiveCounter" custom-screen or the "ProjectImages" custom-screen.
```typescript
  const onLogin = () => {
    if (api.getUser().userName === "admin") {
      api.addCustomScreen("LiveCounter", <CustomCounter />);
    }
    else if (api.getUser().userName === "features") {
      api.addCustomScreen("ProjectImages", <CustomProjectScreen />);
    }
  }
```