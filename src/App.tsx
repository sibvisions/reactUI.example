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
import { ReactUI, useAPI } from '@sibvisions/reactui';

/** 3rd Party imports */
//import 'primereact/resources/themes/saga-blue/theme.css';
//import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import CustomProjectScreen from './features/CustomProjectScreen';
import ScreenWrapperChoice from './features/ScreenWrapperChoice';
import CustomBrowser from './features/CustomBrowser';
import ScreenWrapperContacts from './features/ScreenWrapperContacts';
import ScreenWrapperReactComp from './features/ScreenWrapperReactComp';
import ScreenWrapperButton from './features/ScreenWrapperButton';
import ScreenWrapperExample from './features/ScreenWrapperExample';

/** 
 * To use ReactUI import it and return it in your "main" component like App.
 * To add custom-content like: custom-screens, replace-screens, custom-components and custom overlays
 * put custom content objects into arrays respective to their use-case (custom-screen, replace, component...)
 * and pass them as props to the ReactUI component.
 */
const App: FC = () => {

  const api = useAPI();

  const onStartup = () => {
    api.addStartupProperties([{ "test.parameter": true }, { test2: 'value2' }]);
  }

  const onLogin = () => {
    //api.addScreenWrapper("global", <GlobalScreenWrapper/>);
    if (api.getUser().userName === "admin") {
      api.addCustomScreen("LiveCounter", <CustomCounter />);
      api.addScreenWrapper("Con-CG", <ScreenWrapperContacts />);
      api.addScreenWrapper("ReaComTes-303", <ScreenWrapperReactComp />)
    }
    else if (api.getUser().userName === "features") {
      api.addScreenWrapper("SimCon-QQ", <ScreenWrapperExample />);
      api.addCustomScreen("ProjectImages", <CustomProjectScreen />);
      api.addReplaceScreen("Cha-OL", <CustomChartScreen />);
      api.addScreenWrapper("Fir-N7", <ScreenWrapperFirst/>, { global: false });
      api.addScreenWrapper("Com-K3", <ScreenWrapperButton />);
      //api.addScreenWrapper("Mou-SI", <ScreenWrapperMouse/>);
      //api.addScreenWrapper("Cho-IM", <ScreenWrapperChoice/>);
      api.addGlobalComponent("MobileBrowser", <CustomBrowser />);
    }
  }

  const onMenu = () => {
    if (api.getUser().userName === "admin") {
      api.addMenuItem({
        id: "LiveCounter",
        text: "Live Counter",
        menuGroup: "Custom Screens",
        icon: "pi-plus",
        navigationName: ""
      });

      api.addToolbarItem({
        id: "LiveCounter",
        icon: "fa-bookmark",
        title: "New Custom ToolbarItem 1",
        navigationName: ""
      });
    }
    else if (api.getUser().userName === "features") {
      api.addMenuItem({
        id: "ProjectImages",
        text: "Project Images",
        menuGroup: "Custom Screens",
        icon: "fa-cloud-download",
        navigationName: ""
      });

      api.editMenuItem({
        id: "com.sibvisions.apps.mobile.demo.screens.features.FirstWorkScreen",
        newTitle: "new First",
        newIcon: "fa-bookmark"
      });

      api.removeMenuItem("com.sibvisions.apps.mobile.demo.screens.features.SecondWorkScreen");

      api.addToolbarItem({
        id: "com.sibvisions.apps.mobile.demo.screens.features.PopupExampleWorkScreen",
        icon: "fa-bookmark",
        title: "Popup",
        navigationName: ""
      });

      api.editToolbarItem({
        id: "com.sibvisions.apps.mobile.demo.screens.features.UpAndDownloadWorkScreen",
        newTitle: "Changed Toolbar Title",
        newIcon: "fa-bath"
      });

      api.removeToolbarItem("com.sibvisions.apps.mobile.demo.screens.features.MouseWorkScreen");
    }
  }


  /** Return the ReactUI and pass your custom-content arrays as properties */
  return (
    <ReactUI 
      onStartup={onStartup}
      onMenu={onMenu}
      onLogin={onLogin}
      //customAppWrapper={CustomAppWrapper}
      />
  );
}

export default App;