import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, Alert } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Provider} from "react-redux";
import store from './src/configuration/store/index';

import Login from './src/screens/LoginScreen'
import Register from './src/screens/RegisterScreen'
import Author from './src/screens/AuthourScreen'
import Home from './src/screens/HomeScreen'
import Profile from './src/screens/ProfileScreen'
import Favourite from './src/screens/FavouriteScreen'
import Notification from './src/screens/NotificationScreen'
import WritePost from './src/screens/WritePostScreen'
import Splash from './src/screens/SplashScreen';

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();

function AppTabs () {
  return (
    <Tab.Navigator
    initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#fff',
        tabBarStyle: {
          position: 'absolute',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderTopWidth: 1,
          backgroundColor: '#fff',
          ...styles.shadow,
        }
      }}
    >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  source={require('./src/assets/icons8-home-page-48.png')}
                  resizeMode='contain'
                  style={{
                    margin: 2,
                    width: 35,
                    height: 35,
                    tintColor: focused ? '#9384D1' : 'grey'
                  }}
                />
                <Text
                   style = {{color: focused ? '#C9A7EB' : 'silver', fontSize: 9, }}
                    >Home</Text>
              </View>
            )
          }}
        />
        <Tab.Screen
          name='Favourite'
          component={Favourite}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',

                }}
              >
                <Image
                  source={require('./src/assets/icons8-filled-heart-64.png')}
                  resizeMode='contain'
                  style={{
                    margin: 2,
                    width: 30,
                    height: 30,
                    tintColor: focused ? '#9384D1' : 'silver'
                  }}
                />
                <Text
                    style = {{color: focused ? '#9384D1' : 'silver', fontSize: 9}}
                    >Favorites</Text>
              </View>
            )
          }}
        />
        <Tab.Screen
          name='Post'
          component={WritePost}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',

                }}
              >
                <Image
                  source={require('./src/assets/icons8-create-48.png')}
                  resizeMode='contain'
                  style={{
                    margin: 2,
                    width: 30,
                    height: 30,
                    tintColor: focused ? '#9384D1' : 'silver'
                  }}
                />
                <Text
                    style = {{color: focused ? '#9384D1' : 'silver', fontSize: 9}}
                    >Write</Text>
              </View>
            )
          }}
        />
        <Tab.Screen
          name='Notifications'
          component={Notification}
          options={{
            tabBarBadge: 3,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',

                }}
              >
                <Image
                  source={require('./src/assets/icons8-notification-48.png')}
                  resizeMode='contain'
                  style={{
                    margin: 2,
                    width: 30,
                    height: 30,
                    tintColor: focused ? '#9384D1' : 'silver'
                  }}
                />
                <Text
                    style = {{color: focused ? '#9384D1' : 'silver', fontSize: 9}}
                    >Notification</Text>
              </View>
            )
          }}
          
        />
        <Tab.Screen
          name='Profile'
          component={Profile}  
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',

                }}
              >
                <Image
                  source={require('./src/assets/icons8-customer-48.png')}
                  resizeMode='contain'
                  style={{
                    margin: 2,
                    width: 30,
                    height: 30,
                    tintColor: focused ? '#9384D1' : 'silver'
                  }}
                />
                <Text
                    style = {{color: focused ? '#9384D1' : 'silver', fontSize: 9}}
                    >Profile</Text>
              </View>
            )
          }}
        />
      </Tab.Navigator>
  )
}

function App() {

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Splash'
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="HomeTabs" component={AppTabs} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    flexDirection: 'column',
    backgroundColor: 'silver',
  },
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.01,
    shadowRadius: 1.5,
    elevation: 1
  }
})

export default App;
