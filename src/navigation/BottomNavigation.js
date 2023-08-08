import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CheckIn from "../screens/CheckIn/CheckIn";
import MeetUp from "../screens/MeetUp/MeetUp";
import Notification from "../screens/Notification/Notification";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ROUTES from ".";
import ProfileStackNavigstion from "./ProfileStackNavigstion";
import PlaceStackNavigation from "./PlaceStackNavigation";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Image, View } from "react-native";
import { BASE_URL } from "../apis";

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  const { user } = useContext(UserContext);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: "#5BA199",
        tabBarInactiveTintColor: "#E5E3E4",

        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#141519",
          borderTopColor: "#E5E3E420",
          borderTopWidth: 0.2,
        },
      }}
    >
      <Tab.Screen
        name={ROUTES.HEDERROUTES.PLACE_STACK.STACK}
        component={PlaceStackNavigation}
        options={{
          title: ROUTES.HEDERROUTES.PLACE_STACK.HOME,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="md-home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.HEDERROUTES.MEETUP}
        component={MeetUp}
        options={{
          headerShown: true,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="user-friends" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.HEDERROUTES.CHECKIN_STACK}
        component={CheckIn}
        options={{
          headerShown: true,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="location" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.HEDERROUTES.NOTIFICATION}
        component={Notification}
        options={{
          headerShown: true,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="notifications" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.HEDERROUTES.PROFILE_STACK.STACK}
        component={ProfileStackNavigstion}
        options={{
          title: ROUTES.HEDERROUTES.PROFILE_STACK.PROFILE,
          tabBarIcon: ({ size, color }) => (
            // <Ionicons name="person" size={24} color={color} />
            <View
              style={{
                borderRadius: 50,
                overflow: "hidden",
                backgroundColor: color,
                padding: 1,
              }}
            >
              <Image
                source={{ uri: `${BASE_URL}/${user?.image}` }}
                style={{ height: 22, width: 22, borderRadius: 50 }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigation;
