# Extending Components
## Overview
By extending existing components of a VisionX workscreen, you are able to execute your own code additionally, when the extendable events are called.

## Implementation
1. Add a [screen-wrapper](../screen-wrapper/) for the screen, which contains, the component you want to extend.

``` typescript
api.addScreenWrapper("Com-K3", <ScreenWrapperButton />)
```

2. In the screen-wrapper use the `useAPI` hook to gain access to the api function and declare an `onOpen` function. There call the `api.extendComponent` function and pass the name of the component, you want to extend and the respective component provided by the `ReactUI` lib, with an event passed as property. This event will then be called when the event is called.

3. Pass the `onOpen` function to the screen-wrapper.

## Example
In this example I'm extending a togglebutton's `onClick` and `onChange` event.

``` typescript
import React, { FC, useState } from "react";
import { useAPI, ScreenWrapper, UIToggleButton } from "@sibvisions/reactui"

const ScreenWrapperButton: FC<any> = (props) => {
    const [text1, setText1] = useState("not pressed")
    const [text2, setText2] = useState<boolean|undefined>(undefined)

    const api = useAPI();

    const onOpen = () => {
        api.extendComponent(
            "Com-K3_SP1_TB1", 
            <UIToggleButton
                onClick={(e) => {
                    setText1("togglebutton pressed")
                }}
                onChange={(value) => setText2(value)}
            />
        )
    }

    return (
        <ScreenWrapper onOpen={onOpen}>
            {screen =>
                <>
                    <div>
                        {"Test für pressed " + text1}
                        {" Test für tb state " + text2}
                    </div>
                    {screen}
                </>
            }
        </ScreenWrapper>
    )
}

```
### Before pressing the ToggleButton:
Before pressing the ToggleButton, you can see, that I've added 2 divs to the screen-wrapper. The first shows if the ToggleButton has already been pressed (onClick), the second one shows the current state of the ToggleButton (onChange, in this example is the default true).

![before-toggle-press](../readme-images/extend-toggle-before.PNG)

After pressing the ToggleButton, we can see, that, the states have changed, the first state has been changed to "togglebutton pressed" and the onChange event returns the current state of the ToggleButton's selected state.

![after-toggle-press](../readme-images/extend-toggle-after.PNG)

## List of Extendable Components
Here is a list of the components and their extendable events:

### Button
Event | Returns | Description
--- | --- | --- |
onClick | event: MouseEvent | Callback to invoke when button is pressed