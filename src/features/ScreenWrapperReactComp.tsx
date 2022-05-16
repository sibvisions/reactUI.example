import React, {FC} from "react";
import { ScreenWrapper, useScreen } from "@sibvisions/reactui";
import MyReactComp from "./MyReactComp";

const ScreenWrapperReactComp:FC<any> = (props) => {
    const screen = useScreen(props.screenName);

    const onOpen = () => {
        screen.addCustomComponent("ReaComTes-303_E_reactcomptest_NAME", <MyReactComp />)
    }

    return (
        <ScreenWrapper onOpen={onOpen}>
            {workScreen =>
                <>
                    {workScreen}
                </>
            }
        </ScreenWrapper>
    )
}
export default ScreenWrapperReactComp