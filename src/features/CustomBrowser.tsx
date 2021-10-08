/** React imports */
import React, {FC} from "react";

const CustomBrowser:FC<any> = (props) => {

    return (
        <iframe className="rc-mobile-browser" src={props.url}/>
    )
}
export default CustomBrowser
