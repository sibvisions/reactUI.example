/** React imports */
import React, { FC } from 'react';

/** UI imports */
import CustomCounter from './customScreen/CustomCounter'
import ScreenWrapperFirst from './customScreen/ScreenWrapperFirst';
import CustomChartScreen from './customScreen/CustomChartScreen';
import ScreenWrapperSimple from './customScreen/ScreenWrapperSimple';
import GlobalScreenWrapper from './customScreen/GlobalScreenWrapper';
import CustomGreenButtonScreen from './customScreen/CustomGreenButtonScreen';
import CustomAppWrapper from './customScreen/CustomAppWrapper';

/** ReactUI imports */
import {ReactUI} from 'reactUI/dist/moduleIndex'

/** 3rd Party imports */
//import 'primereact/resources/themes/saga-blue/theme.css';
//import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import CustomScreenType from 'reactui/dist/main/customTypes/CustomScreenType';
import CustomComponentType from 'reactui/dist/main/customTypes/CustomComponentType';
import ScreenWrapperType from 'reactui/dist/main/customTypes/ScreenWrapperType';

/** 
 * To use ReactUI import it and return it in your "main" component like App.
 * To add custom-content like: custom-screens, replace-screens, custom-components and custom overlays
 * put custom content objects into arrays respective to their use-case (custom-screen, replace, component...)
 * and pass them as props to the ReactUI component.
 */
const App: FC = () => {

  /**
   * Add your custom-screens to an array as objects with properties:
   * screenName: name of the screen used as routing and gets displayed in the menu-group
   * menuGroup: menu-group the custom-screen should be added into, if the menu-group isn't already added a new menu-group is created
   * customScreen: the component you want to add to the ReactUI
   * icon: an icon which will be displayed in the menu, FontAwesome like: fa-xxx, PrimeIcons like: pi-xxx FontAwesome preferred!
   * replace: replace an existing screen with the given name, the screen-name can be found in VisionX
   */
  const customScreens: CustomScreenType[] = [
    {
      name: "LiveCounter",
      menuGroup: "Custom Screens",
      screen: <CustomCounter />,
      icon: "pi-plus"
    }, {
      replace: true,
      name: "Cha-OL", 
      screen: <CustomChartScreen/>
    }
  ];

  /**
   * Add your custom-components to an array as objects with properties:
   * name: the name of the component you want to replace, the component name can be found in VisionX
   * component: the component you want to replace another component with, if not used, the component gets removed
   */
  const customComponentsArray: CustomComponentType[] = [
    {
      name: "Sec-BL_B_DOOPEN", 
      component: <CustomCounter/>
    },
    {
      name: "Con-CG_E_contacts_STREET"
    }
  ];

  /**
   * Add key-value objects to an array to send custom-startup properties to the server 
   */
  const customStartupProps = [
    {
      "test.parameter": true
    }, 
    {
      test2: 'value2'
    }
  ];

  /**
   * Screen-wrappers are used to display your customized component instead of just the workscreen.
   * In screen-wrappers you are able to decide where the workscreen should be displayed and if there should be other elements.
   * For more info check out one of the examples.
   * Add your screen-wrappers to an array as objects with properties:
   * screen: (string string[]) name/s of screen/s where the screen-wrapper should be displayed,
   *         use 'global' to set a screen-wrapper across all workscreens
   * wrapper: the cscreen-wrapper to show on screen
   * options: global (boolean, default true): if true or undefined, displays global screen-wrapper if available, false don't display global
   */
  const screenWrapperArray: ScreenWrapperType[] = [
    {
      screen: "global",
      wrapper: <GlobalScreenWrapper/>,
    },
    {
      screen: "Sim-SH",
      wrapper: <ScreenWrapperSimple/>
    },
    {
      screen: ["Fir-N7"],
      wrapper: <ScreenWrapperFirst/>,
      options: { global: false }
    },
    {
      screen: ["Sec-BL"],
      wrapper: <CustomGreenButtonScreen/>,
      options: { global: true }
    }
  ]

  /** Return the ReactUI and pass your custom-content arrays as properties */
  return (
    <ReactUI 
      customScreens={customScreens} 
      customComponents={customComponentsArray}
      customStartupProps={customStartupProps}
      screenWrappers={screenWrapperArray}
      customAppWrapper={CustomAppWrapper} />
  );
}

export default App;