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
export default ScreenWrapperButton