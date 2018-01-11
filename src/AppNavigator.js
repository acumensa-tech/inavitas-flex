import React from "react";
import { DrawerNavigator, StackNavigator } from "react-navigation";
import SplashScreen from "./Pages/Splash";
import Dashboard from "./Pages/Dashboard";
import Header from "./Components/Header";
import SideBar from "./Sidebar";
import SubUnitsPage from "./Pages/SubUnits";
import Graphics from "./Pages/Graphics";
import Alarms from "./Pages/Alarms";
import SelectUser from "./Pages/SelectUser";
import {
  dashData,
  userInstantData,
  currentUserUnit,
  subUnits,
  currentUser,
  users
} from "./data";
const MainDrawer = DrawerNavigator(
  {
    Dashboard: {
      screen: ({ navigation }) => (
        <Dashboard
          navigation={navigation}
          dashData={dashData}
          userInstantData={userInstantData}
          currentUserUnit={currentUserUnit}
          subUnitsNumber={subUnits.length}
        />
      )
    },
    SubUnits: {
      screen: ({ navigation }) => (
        <SubUnitsPage
          navigation={navigation}
          currentUserUnit={currentUserUnit}
          subUnitsData={subUnits}
        />
      )
    },
    Graphics: {
      screen: ({ navigation }) => (
        <Graphics navigation={navigation} currentUserUnit={currentUserUnit} />
      )
    },
    Alarms: {
      screen: ({ navigation }) => (
        <Alarms navigation={navigation} currentUserUnit={currentUserUnit} />
      )
    }
  },
  {
    contentComponent: props => <SideBar {...props} userData={currentUser} />,
    drawerPosition: "right",
    initialRouteName: "Dashboard",
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle"
  }
);
export const AppNavigator = StackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: ({ navigation }) => (
      <SelectUser navigation={navigation} users={users} />
    ),
    navigationOptions: {
      header: null
    }
  },
  MainDrawer: {
    screen: ({ screenProps, navigation }) => (
      <MainDrawer screenProps={navigation} />
    ),
    navigationOptions: {
      header: null
    }
  }
});
