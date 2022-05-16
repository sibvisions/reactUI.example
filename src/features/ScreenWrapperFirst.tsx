/** React imports */
import React, {FC} from "react";

/** scss import */
import './ScreenWrapperFirst.scss'

/** ReactUI imports */
import { ScreenWrapper, useAPI, useScreen } from "@sibvisions/reactui";

/** 3rd Party imports */
import { Chip } from 'primereact/chip';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button'

/** Other imports */
import gal1 from "../assets/gal1.jpg";
import gal2 from "../assets/gal2.jpg";
import gal3 from "../assets/gal3.jpg";
import gal4 from "../assets/gal4.jpg";
import gal5 from "../assets/gal5.jpg";
import CustomCounter from "./CustomCounter";

/** 
 * This component is an example for custom-displays, which allow the user to "design" their own "main" screen.
 * Without a custom display, the workscreen will take all available space of the "main" screen,
 * with a custom display the user can put together their own screen. The workscreen will use the remaining space
 */
const ScreenWrapperFirst:FC<any> = (props) => {

    const api = useAPI();

    const screen = useScreen(props.screenName);

    // /** To remove a component from the workscreen, the component name is necesary and can be found in VisionX */
    // useRemoveComponent("Fir-N7_B_DOOPEN");

    const onOpen = () => {
        //screen.sendOpenScreenParameters({abc: "def", test: 789, xyz: true })
        screen.addCustomComponent("Fir-N7_B_DOOPEN", <CustomCounter />)
        //screen.removeComponent("Fir-N7_B_DOOPEN");
        console.log(api.getUser())
    }

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
     * To use screen-wrappers wrap the screen-wrapper with "ScreenWrapper" then write your JSX-code 
     * Call screen where the workscreen should be displayed
     */
    return (
        <ScreenWrapper onOpen={onOpen}>
            {workScreen =>
                <div>
                    <div
                        style={{
                            height: '50px',
                            fontSize: '16px',
                            background: '#457fca',
                            color: 'white',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        This is the start of my screen-wrapper for screen "First"!
                        <Button 
                            onClick={() => screen.sendScreenParameter( { testParam: 'test' })}
                            style={{marginLeft: '5px'}}>
                            Click to send Screen-Parameter!
                        </Button>
                        <Button 
                            onClick={() => api.sendOpenScreenRequest(
                                "com.sibvisions.apps.mobile.demo.screens.features.PopupExampleWorkScreen", 
                                { testParam: 'test', hello: 'world' })}
                            style={{marginLeft: '5px'}}>
                            Click to open and send Parameter
                        </Button>
                        <Button 
                            onClick={() => screen.sendCloseScreenRequest({ closeParam: 'closing' })}
                            style={{marginLeft: '5px'}}>
                            Click to close and send Parameter
                        </Button>
                    </div>
                    <div>
                        <div style={{ flexDirection: 'row' }}>
                            <div style={{ height: "100%", display:"flex", marginLeft: '10px', alignSelf: 'center', border: "1px solid" }}>
                                <Chip label="Apple" icon="pi pi-apple" className="p-mr-2 p-mb-2 sw-chip"  />
                                <Chip label="Facebook" icon="pi pi-facebook" className="p-mr-2 p-mb-2 sw-chip" />
                                <Chip label="Google" icon="pi pi-google" className="p-mr-2 p-mb-2 sw-chip" />
                                <Chip label="Microsoft" icon="pi pi-microsoft" className="p-mb-2 sw-chip" removable />
                            </div>
                            {workScreen}
                        </div>
                    </div>
                    <div style={{ height: '200px' }}>
                        <Carousel value={images} numVisible={1} itemTemplate={itemTemplate} />
                    </div>
                </div>
            }
        </ScreenWrapper>
    )
}
export default ScreenWrapperFirst