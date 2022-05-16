import React, {FC} from "react";
import { ScreenWrapper } from "@sibvisions/reactui";

/** scss import */
import './GlobalScreenWrapper.scss'

/**
 * A global screen-wrapper is a "design" for the "main" screen, which is displayed across all screens.
 */
const CustomGlobalDisplay:FC = () => {

    /** 
     * To use a global screen-wrapper wrap the JSX-code in "ScreenWrapper" and put 
     * "screen" where you want the workscreen to be displayed. 
     */
    return (
        <ScreenWrapper>
            {screen => <>
                <div style={{height: '40px', fontSize: '16px', background: 'rgba( 214,116,11,1 )', color: 'white', lineHeight: '40px', textAlign: "center"}}>
                    Visit us on our homepage <a className="sib-link" href="https://visionx.sibvisions.com/" target="_blank">visionx.sibvisions.com</a>
                </div>
                {screen}
                <div style={{height: '40px', fontSize: '16px', background: '#0E76A8', color: 'white', lineHeight: '40px', textAlign: "center"}}>
                    Follow us on LinkedIn! <i className="fab fa-linkedin"></i> SIB Visions GmbH
                </div>
            </>}
        </ScreenWrapper>
    )
}
export default CustomGlobalDisplay