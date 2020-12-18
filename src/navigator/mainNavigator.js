import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings186444Navigator from '../features/Settings186444/navigator';
import Settings186429Navigator from '../features/Settings186429/navigator';
import NotificationList186428Navigator from '../features/NotificationList186428/navigator';
import Maps186427Navigator from '../features/Maps186427/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings186444: { screen: Settings186444Navigator },
Settings186429: { screen: Settings186429Navigator },
NotificationList186428: { screen: NotificationList186428Navigator },
Maps186427: { screen: Maps186427Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
