import { ScreenWrapper, useAPI } from "@sibvisions/reactui/dist";
import React, { FC } from "react";
import CustomCounter from "./CustomCounter";

const ScreenWrapperSecond: FC = () => {
    const api = useAPI()

    const onOpen = () => {
        api.addCustomComponent("Sec-BL_B_DOOPEN", <CustomCounter />)
    }

    return (
        <ScreenWrapper onOpen={onOpen}>
            {screen => 
                <>
                    {screen}
                </>
            }
        </ScreenWrapper>
    )
}
export default ScreenWrapperSecond