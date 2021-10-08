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
import { ReactUI, useAPI } from 'reactUI';

/** 3rd Party imports */
//import 'primereact/resources/themes/saga-blue/theme.css';
//import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import CustomProjectScreen from './features/CustomProjectScreen';
import ScreenWrapperChoice from './features/ScreenWrapperChoice';
import CustomBrowser from './features/CustomBrowser';

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
    }
    else if (api.getUser().userName === "features") {
      api.addCustomScreen("ProjectImages", <CustomProjectScreen />);
      api.addReplaceScreen("Cha-OL", <CustomChartScreen />);
      api.addScreenWrapper("Fir-N7", <ScreenWrapperFirst/>, { global: false });
      //api.addScreenWrapper("Mou-SI", <ScreenWrapperMouse/>);
      //api.addScreenWrapper("Cho-IM", <ScreenWrapperChoice/>);
      api.addGlobalComponent("MobileBrowser", <CustomBrowser />)
    }
  }

  const onMenu = () => {
    if (api.getUser().userName === "admin") {
      api.addMenuItem({
        id: "LiveCounter",
        text: "Live Counter",
        menuGroup: "Custom Screens",
        icon: "pi-plus"
      });

      api.addToolbarItem({
        id: "LiveCounter",
        icon: "fa-bookmark",
        title: "New Custom ToolbarItem 1"
      });
    }
    else if (api.getUser().userName === "features") {
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