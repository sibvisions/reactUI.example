import React, {FC} from "react";
import { ScreenWrapper, useAPI, useScreen } from "@sibvisions/reactui";
import CustomCounter from "./CustomCounter";

const ScreenWrapperContacts:FC<any> = (props) => {
    const api = useAPI();

    const screen = useScreen(props.screenName);

    const onOpen = () => {
        screen.addCustomComponent("Con-CG_E_contacts_IMAGE", <CustomCounter />)
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
export default ScreenWrapperContacts