import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home/Home';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function MainNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name={'home-outline'} size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainNavigation;
