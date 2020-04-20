import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AntDesign, Ionicons} from 'react-native-vector-icons';

import Home from './pages/Home';
import Pay from './pages/Pay';
import Wallet from './pages/Wallet';
console.disableYellowBox = true;

import PayButton from './Components/PayButton';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Wallet: {
    lib: AntDesign,
    name: 'creditcard',
  },
  Notifications: {
    lib: Ionicons,
    name: 'ios-notifications-outline',
  },
  Settings: {
    lib: AntDesign,
    name: 'setting',
  },
};

function Routes() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({color, size, focused}) => {
          if (route.name === 'Pay') {
            return (
              <PayButton
                onPress={() => navigation.navigate('Pay')}
                focused={focused}
              />
            );
          }

          const {lib: Icon, name} = icons[route.name];
          return <Icon name={name} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
          borderTopColor: 'rgba(255,255,255,0.2)',
        },
        activeTintColor: '#ffffd',
        inactiveTintColor: '#92929c',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Inicio',
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          title: 'Carteira',
        }}
      />
      <Tab.Screen
        name="Pay"
        component={Pay}
        options={{
          title: '',
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Pay}
        options={{
          title: 'Notificações',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Pay}
        options={{
          title: 'Ajustes',
        }}
      />
    </Tab.Navigator>
  );
}

export default Routes;
