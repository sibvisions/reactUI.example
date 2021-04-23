/** React imports */
import React, {FC, useState} from "react";
import { Editor } from 'primereact/editor';
import { CustomDisplayWrapper, WorkScreen } from "reactui/dist/moduleIndex";

/** 
 * This component is an example for custom-displays, which allow the user to "design" their own "main" screen.
 * Without a custom display, the workscreen will take all available space of the "main" screen,
 * with a custom display the user can put together their own screen. The workscreen will use the remaining space
 */
const CustomDisplaySimple:FC = () => {
    /** State for editor */
    const [text, setText] = useState<string|null>()

    /** 
     * To use custom-display wrap the custom-display with "CusomDisplayWrapper" then write your JSX-code 
     * Call the from ReactUI imported "Workscreen" component where the workscreen should be displayed
     */
    return (
        <CustomDisplayWrapper>
            {screen => <>
                {screen}
                <Editor style={{height:'200px'}} value={text === null ? undefined : text} onTextChange={(e) => setText(e.htmlValue)} /> 
            </>}
        </CustomDisplayWrapper>
    )
}
export default CustomDisplaySimple;