import React, {FC} from "react";
import { ScreenWrapper } from "reactui/dist/moduleIndex";

/** scss import */
import './GlobalScreenWrapper.scss'

/**
 * A global custom-display is a "design" for the "main" screen, which is displayed across all screens
 */
const CustomGlobalDisplay:FC = () => {

    /** 
     * To use a global display wrap the JSX-code in "ScreenWrapper" and put 
     * "screen" where you want the workscreen to be displayed. 
     */
    return (
        <ScreenWrapper>
            {screen => <>
                <div style={{height: '40px', fontSize: '16px', background: '#457fca', color: 'white', lineHeight: '40px', paddingLeft:'20px'}}>
                    Follow us on <i className="pi pi-twitter"/> @ABCDE
                </div>
                {screen}
                <div style={{height: '40px', fontSize: '16px', background: '#b31307', color: 'white', lineHeight: '40px', paddingLeft:'20px'}}>
                    Subscribe to our <i className="pi pi-youtube"/> channel ABCDE
                </div>
            </>}
        </ScreenWrapper>
    )
}
export default CustomGlobalDisplay