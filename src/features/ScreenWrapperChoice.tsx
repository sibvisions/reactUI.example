/** React imports */
import React, {FC, useState} from "react";
import { Editor } from 'primereact/editor';
import { ScreenWrapper } from "@sibvisions/reactui/dist";

/** 
 * This component is an example for screen-wrapper, which allow the user to design their own "main" screen.
 * Without a screen-wrapper, the workscreen will take all available space of the "main" screen,
 * with a screen-wrapper the user can put together their own screen. The workscreen will use the remaining space
 */
const ScreenWrapperChoice:FC = () => {
    /** State for editor */
    const [text, setText] = useState<string|null>()

    /** 
     * To use screen-wrappers wrap the screen-wrapper with "ScreenWrapper" then write your JSX-code 
     * Call "screen" where the workscreen should be displayed
     */
    return (
        <ScreenWrapper>
            {screen => <>
                {screen}
                <Editor style={{height:'200px'}} value={text === null ? undefined : text} onTextChange={(e) => setText(e.htmlValue)} /> 
            </>}
        </ScreenWrapper>
    )
}
export default ScreenWrapperChoice;