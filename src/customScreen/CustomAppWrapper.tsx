/** React imports */
import React, {FC} from "react";
import { useMenuItems } from "reactui/dist/moduleIndex";
import { Menubar } from "primereact/menubar";

/** scss import */
import "./CustomAppWrapper.scss"

const CustomAppWrapper: FC = ({children}) => {
    const menuItems = useMenuItems();
    
    return <div className="customApp">
        <Menubar model={menuItems} />
        {children}
    </div>
}

export default CustomAppWrapper;