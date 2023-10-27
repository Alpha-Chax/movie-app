import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeIcon, ShoppingBagIcon, UserGroupIcon, WalletIcon } from "react-native-heroicons/outline";
import React from 'react'
import Movies from "../screens/Movies";
import TvShows from "../screens/TvShows";
import Celebrities from "../screens/Celebrities";
import Search from "../screens/Search";
import TMDB from "../screens/TMDB";

const BottomNavigationBar = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
    <Tab.Screen
      name="Movies"
      component={Movies}
      options={{
        tabBarLabel: "Movies",
        tabBarStyle: { paddingVertical: 5 },
        tabBarLabelStyle: tabLabelStyles,
        tabBarIcon: () => (<HomeIcon color="#000000" />),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Tv Shows"
      component={TvShows}
      options={{
        tabBarLabel: "Tv Shows",
        tabBarStyle: { paddingVertical: 5 },
        tabBarLabelStyle: tabLabelStyles,
        tabBarIcon: () => (<ShoppingBagIcon color="#000000" />),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Celebrities"
      component={Celebrities}
      options={{
        tabBarLabel: "Celebrities",
        tabBarStyle: { paddingVertical: 5 },
        tabBarLabelStyle: tabLabelStyles,
        tabBarIcon: () => (<WalletIcon color="#000000" />),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarLabel: "Search",
        tabBarStyle: { paddingVertical: 5 },
        tabBarLabelStyle: tabLabelStyles,
        tabBarIcon: () => (<UserGroupIcon color="#000000" />),
        headerShown: false,
      }}
    />
     <Tab.Screen
      name="TMDB"
      component={TMDB}
      options={{
        tabBarLabel: "TMDB",
        tabBarStyle: { paddingVertical: 5 },
        tabBarLabelStyle: tabLabelStyles,
        tabBarIcon: () => (<UserGroupIcon color="#000000" />),
        headerShown: false,
      }}
    />
  </Tab.Navigator>
  )
}

export default BottomNavigationBar


const tabLabelStyles = {
    color: 'black',
    fontSize: 12,
    paddingBottom: 5,
  };
  