import React, {FC} from "react";
import { ScreenWrapper, useAPI } from "@sibvisions/reactui/dist";
import CustomCounter from "./CustomCounter";

const ScreenWrapperContacts:FC<any> = (props) => {
    const api = useAPI();

    const onOpen = () => {
        api.addCustomComponent(props.screenName, "Con-CG_NT_contacts", <CustomCounter />)
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