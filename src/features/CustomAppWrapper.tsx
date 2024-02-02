/** React imports */
import React, {FC} from "react";
import { useMenuItems, ProfileMenu } from "@sibvisions/reactui/dist";
import { Menubar } from "primereact/menubar";

/** scss import */
import "./CustomAppWrapper.scss"

const CustomAppWrapper: FC<any> = ({children}) => {
    const menuItems = useMenuItems();
    
    return (
        <> 
            <div className="customApp__menu">
                {/*<Menubar model={menuItems} />*/}
                <ProfileMenu />
            </div>
            {children}
        </>

    )

}

export default CustomAppWrapper;