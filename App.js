import React from 'react';
import { Text } from 'react-native';
import { NativeRouter, Link } from 'react-router-native';
import { BottomNavigation,Tab} from 'react-router-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './components/Home';
import Profile from './components/Profile';

const renderTabIcon = props => {
    const { route, focused, tabActiveTintColor, tabTintColor,horizontal } = props;
    let iconName;
    let tabColor;
  if (route.name === '/') {
          iconName = `ios-home`;
          tabColor=focused?tabActiveTintColor:tabTintColor;
        } else if (route.name  === 'Reserve') {
          iconName = `ios-save$`;
        }
        else if (route.name === '/profile') {
          iconName = `ios-settings`;
          tabColor=focused?tabActiveTintColor:tabTintColor;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tabColor} />;
  }

const App = () => (
  <NativeRouter>
    <BottomNavigation
        tabTintColor="gray"
        tabActiveTintColor="red"
      >
      <Tab
        exact
        path="/"
        label="Home"
        component={Home}
        renderTabIcon={renderTabIcon}
      />
       <Tab
        path="/profile"
        label="Profile"
        component={Profile}
        renderTabIcon={renderTabIcon}
      />
    </BottomNavigation>
  </NativeRouter>
)

export default App;