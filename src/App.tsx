/** React imports */
import React, { FC, useEffect } from 'react';

/** UI imports */
import CustomCounter from './features/CustomCounter'
import ScreenWrapperFirst from './features/ScreenWrapperFirst';
import CustomChartScreen from './features/CustomChartScreen';
import ScreenWrapperSimple from './features/ScreenWrapperSimple';
import GlobalScreenWrapper from './features/GlobalScreenWrapper';
import CustomGreenButtonScreen from './features/CustomGreenButtonScreen';
import CustomAppWrapper from './features/CustomAppWrapper';

/** ReactUI imports */
import { ReactUI, useAPI, useAppContext, useMenuItems } from 'reactUI/dist/moduleIndex'

/** 3rd Party imports */
//import 'primereact/resources/themes/saga-blue/theme.css';
//import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import CustomScreenType from 'reactui/dist/main/customTypes/CustomScreenType';
import CustomComponentType from 'reactui/dist/main/customTypes/CustomComponentType';
import ScreenWrapperType from 'reactui/dist/main/customTypes/ScreenWrapperType';
import CustomProjectScreen from './features/CustomProjectScreen';
import { CustomScreenParameter, CustomToolbarItem, EditableMenuItem } from '../../reactUI/dist/main/customTypes';

/** 
 * To use ReactUI import it and return it in your "main" component like App.
 * To add custom-content like: custom-screens, replace-screens, custom-components and custom overlays
 * put custom content objects into arrays respective to their use-case (custom-screen, replace, component...)
 * and pass them as props to the ReactUI component.
 */
const App: FC = () => {

  const api = useAPI();
  const appContext = useAppContext();

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
    },
    {
      name: "Project Images",
      menuGroup: "Custom Screens",
      screen: <CustomProjectScreen />,
      icon: "fa-project-diagram"
    },
    {
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
      screen: "Fir-N7",
      wrapper: <ScreenWrapperFirst/>,
      options: { global: false }
    },
    {
      screen: ["Sec-BL"],
      wrapper: <CustomGreenButtonScreen/>,
      options: { global: true }
    }
  ]

  const screenParameter: CustomScreenParameter[] = [
    {
      name: "Fir-N7",
      parameter: {
        abc: "def",
        test: 123,
        hello: false
      }
    },
    {
      name: "Sec-BL",
      parameter: {
        wyz: "tuv",
        tset: 789,
        bye: true
      },
      onClose: true
    }
  ]

  const toolbarItems: Array<EditableMenuItem|CustomToolbarItem> = [
    {
      screenName: "LiveCounter",
      image: "fa-bookmark",
      title: "New Custom ToolbarItem 1"
    },
    {
      screenName: "Project Images",
      image: "fa-check",
      title: "New Custom ToolbarItem 2"
    },
    {
      screenName: "com.sibvisions.apps.mobile.demo.screens.features.UpAndDownloadWorkScreen",
      newTitle: "Changed Toolbar Title",
      newIcon: "fa-bath"
    },
    {
      screenName: "com.sibvisions.apps.mobile.demo.screens.features.MouseWorkScreen",
      remove: true
    }
  ]

  const editedMenuItems: EditableMenuItem[] = [
    {
      screenName: "com.sibvisions.apps.mobile.demo.screens.features.FirstWorkScreen",
      newTitle: "new First",
      newIcon: "fa-bookmark"
    },
    {
      screenName: "com.sibvisions.apps.mobile.demo.screens.features.SecondWorkScreen",
      remove: true
    }
  ]


  /** Return the ReactUI and pass your custom-content arrays as properties */
  return (
    <ReactUI 
      customScreens={customScreens} 
      customComponents={customComponentsArray}
      customStartupProps={customStartupProps}
      //screenWrappers={screenWrapperArray}
      //customAppWrapper={CustomAppWrapper}
      customScreenParameter={screenParameter}
      customToolbarItems={toolbarItems}
      //editedMenuItems={editedMenuItems}
      />
  );
}

export default App;