import React, {FC} from "react";
import { ScreenWrapper, useAPI } from "@sibvisions/reactui/dist";
import MyReactComp from "./MyReactComp";

const ScreenWrapperReactComp:FC<any> = (props) => {
    const api = useAPI();

    const onOpen = () => {
        api.addCustomComponent("ReaComTes-303_E_reactcomptest_NAME", <MyReactComp />)
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