import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TvIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import {
  UserIcon,
  FilmIcon,
  UserGroupIcon,
} from "react-native-heroicons/solid";
import React from "react";
import Movies from "../screens/Movies";
import TvShows from "../screens/TvShows";
import Celebrities from "../screens/Celebrities";
import Search from "../screens/Search";
import TMDB from "../screens/TMDB";

const BottomNavigationBar = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingHorizontal: 5,
          paddingTop: 10,
          paddingBottom:10,
          backgroundColor: "#24292e",
          position: "absolute",
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "#3e9b39",
        tabBarInactiveTintColor: "#ffffff",
        tabBarLabelStyle: {
          fontSize: 11, 
        },
      })}
    >
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarLabel: "Movies",
          
          tabBarIcon: ({color}) => <FilmIcon color={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Tv Shows"
        component={TvShows}
        options={{
          tabBarLabel: "Tv Shows",
          
          tabBarIcon: ({color}) => <TvIcon color={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Celebrities"
        component={Celebrities}
        options={{
          tabBarLabel: "Celebrities",
          
          tabBarIcon: ({color}) => <UserIcon color={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          
          tabBarIcon: ({color}) => <MagnifyingGlassIcon color={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="TMDB"
        component={TMDB}
        options={{
          tabBarLabel: "TMDB",
          
          tabBarIcon: ({color}) => <UserGroupIcon color={color} />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigationBar;


