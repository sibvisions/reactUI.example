/** React imports */
import React, {FC} from "react";

/** scss import */
import './CustomDisplayFirst.scss'

/** ReactUI imports */
import { CustomDisplayWrapper, useRemoveCompFromWorkscreen, WorkScreen } from "reactui/dist/moduleIndex";

/** 3rd Party imports */
import { Chip } from 'primereact/chip';
import { Carousel } from 'primereact/carousel';

/** Other imports */
import gal1 from "../assets/gal1.jpg";
import gal2 from "../assets/gal2.jpg";
import gal3 from "../assets/gal3.jpg";
import gal4 from "../assets/gal4.jpg";
import gal5 from "../assets/gal5.jpg";

/** 
 * This component is an example for custom-displays, which allow the user to "design" their own "main" screen.
 * Without a custom display, the workscreen will take all available space of the "main" screen,
 * with a custom display the user can put together their own screen. The workscreen will use the remaining space
 */
const CustomDisplayFirst:FC = () => {

    /** To remove a component from the workscreen, the component name is necesary and can be found in VisionX */
    useRemoveCompFromWorkscreen("Fir-N7_B_DOOPEN");
    

    /** PrimeReact Carousel setup */
    const images:Array<any> = [
        {id: '1', image: gal1, alt: 'display gal1'}, 
        {id: '2', image: gal2, alt: 'display gal2'}, 
        {id: '3', image: gal3, alt: 'display gal3'}, 
        {id: '4', image: gal4, alt: 'display gal4'}, 
        {id: '5', image: gal5, alt: 'display gal5'}
    ];

    /** PrimeReact Carousel setup */
    const itemTemplate = (item:any) => {
        return <img src={item.image} alt={item.alt} style={{ maxWidth: '300px' }} />
    }

    /** 
     * To use custom-display wrap the custom-display with "CusomDisplayWrapper" then write your JSX-code 
     * Call the from ReactUI imported "Workscreen" component where the workscreen should be displayed
     */
    return (
        <CustomDisplayWrapper>
            {(screen:any) => 
                <div>
                    <div style={{height: '50px', fontSize: '16px', background: '#457fca', color: 'white', lineHeight: '50px'}}>
                        This is the start of my custom-display for screen "First"!
                    </div>
                    <div>
                        <div style={{textAlign: 'center'}}>
                            <Chip label="Apple" icon="pi pi-apple" className="p-mr-2 p-mb-2" />
                            <Chip label="Facebook" icon="pi pi-facebook" className="p-mr-2 p-mb-2" />
                            <Chip label="Google" icon="pi pi-google" className="p-mr-2 p-mb-2" />
                            <Chip label="Microsoft" icon="pi pi-microsoft" className="p-mb-2" removable />
                        </div>
                        <div style={{flexDirection:'row'}}>
                            <div style={{marginLeft:'10px', alignSelf:'center'}}>
                                <button style={{marginRight: '5px'}}>custom-display</button>
                                <button style={{marginRight: '5px'}}>for screen</button>
                                <button style={{marginRight: '5px'}}>First!</button>
                            </div>
                            {screen}
                        </div>
                    </div>
                    <div style={{height: '200px', background: '#3e3bff'}}>
                        <Carousel value={images} numVisible={1} itemTemplate={itemTemplate}/>
                    </div>
                </div>
            }
        </CustomDisplayWrapper>

    )
}
export default CustomDisplayFirst