import React, {FC} from "react";
import { CustomDisplayWrapper } from "reactui/dist/moduleIndex";

/** scss import */
import './CustomGlobalDisplay.scss'

/**
 * A global custom-display is a "design" for the "main" screen, which is displayed across all screens
 */
const CustomGlobalDisplay:FC = () => {

    /** 
     * To use a global display wrap the JSX-code in "CustomDisplayWrapper" and put 
     * "GlobalWorkScreen" where you want the workscreen to be displayed. 
     */
    return (
        <CustomDisplayWrapper>
            {screen => <>
                <div style={{height: '40px', fontSize: '16px', background: '#457fca', color: 'white', lineHeight: '40px', paddingLeft:'10px'}}>
                    Follow us on <i className="pi pi-twitter"/> @ABCDE
                </div>
                {screen}
                <div style={{height: '40px', fontSize: '16px', background: '#b31307', color: 'black', lineHeight: '40px', paddingLeft:'10px'}}>
                    Subscribe to our <i className="pi pi-youtube"/> channel ABCDE
                </div>
            </>}
        </CustomDisplayWrapper>
    )
}
export default CustomGlobalDisplay