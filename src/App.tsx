/** React imports */
import React, { FC, useEffect } from 'react';

/** UI imports */
import CustomCounter from './features/CustomCounter'
import ScreenWrapperFirst from './features/ScreenWrapperFirst';
import CustomChartScreen from './features/CustomChartScreen';
import ScreenWrapperMouse from './features/ScreenWrapperMouse';
import GlobalScreenWrapper from './features/GlobalScreenWrapper';
import CustomGreenButtonScreen from './features/CustomGreenButtonScreen';
import CustomAppWrapper from './features/CustomAppWrapper';

/** ReactUI imports */
import { ReactUI, useAPI, useAppContext} from 'reactUI/dist/moduleIndex'

/** 3rd Party imports */
//import 'primereact/resources/themes/saga-blue/theme.css';
//import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import CustomProjectScreen from './features/CustomProjectScreen';
import ScreenWrapperChoice from './features/ScreenWrapperChoice';

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
  // const customScreens: CustomScreenType[] = [
  //   {
  //     id: "LiveCounter",
  //     text: "Live Counter",
  //     menuGroup: "Custom Screens",
  //     icon: "pi-plus",
  //   },
  //   {
  //     name: "Project Images",
  //     menuGroup: "Custom Screens",
  //     screen: <CustomProjectScreen />,
  //     icon: "fa-project-diagram",
  //   },
  //   {
  //     replace: true,
  //     name: "Cha-OL", 
  //     screen: <CustomChartScreen/>
  //   }
  // ];

  const onStartup = () => {
    api.addCustomScreen("LiveCounter", <CustomCounter />);
    api.addCustomScreen("ProjectImages", <CustomProjectScreen />);

    api.addReplaceScreen("Cha-OL", <CustomChartScreen />);

    api.addStartupProperties([{ "test.parameter": true }, { test2: 'value2' }]);

    api.addScreenWrapper("global", <GlobalScreenWrapper/>);
    api.addScreenWrapper("Fir-N7", <ScreenWrapperFirst/>, { global: false });
    api.addScreenWrapper("Mou-SI", <ScreenWrapperMouse/>);
    api.addScreenWrapper("Cho-IM", <ScreenWrapperChoice/>);
  }

  const onMenu = () => {
    api.addMenuItem({
      id: "LiveCounter",
      text: "Live Counter",
      menuGroup: "Custom Screens",
      icon: "pi-plus"
    });

    api.addMenuItem({
      id: "ProjectImages",
      text: "Project Images",
      menuGroup: "Custom Screens",
      icon: "fa-project-diagram"
    });

    api.editMenuItem({
      id: "com.sibvisions.apps.mobile.demo.screens.features.FirstWorkScreen",
      newTitle: "new First",
      newIcon: "fa-bookmark"
    });

    api.removeMenuItem("com.sibvisions.apps.mobile.demo.screens.features.SecondWorkScreen");

    api.addToolbarItem({
      id: "LiveCounter",
      icon: "fa-bookmark",
      title: "New Custom ToolbarItem 1"
    });

    api.addToolbarItem({
      id: "com.sibvisions.apps.mobile.demo.screens.features.PopupExampleWorkScreen",
      icon: "fa-bookmark",
      title: "Popup"
    });

    api.editToolbarItem({
      id: "com.sibvisions.apps.mobile.demo.screens.features.UpAndDownloadWorkScreen",
      newTitle: "Changed Toolbar Title",
      newIcon: "fa-bath"
    });

    api.removeToolbarItem("com.sibvisions.apps.mobile.demo.screens.features.MouseWorkScreen");
  }


  /** Return the ReactUI and pass your custom-content arrays as properties */
  return (
    <ReactUI 
      onStartup={onStartup}
      onMenu={onMenu}
      />
  );
}

export default App;