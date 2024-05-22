// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import Signin from './Screens/Signin';
import Signun from './Screens/Signup';
import ResetPassword from './Screens/Resetpassword';
import ForgotSuccess from './Screens/Forgotsuccess';
import Dashboard from './Screens/Dashboard';
import AboutCourse from './Screens/AboutCourse';
import Video from './Screens/Video';
import Notifications from './Screens/Notifications';
import Chat from './Screens/Chat';
import Profile from './Screens/Profile';
import Bottombar from './Screens/Components/Bottombar';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{ 
              headerShown: false,
              headerBackTitleVisible: true
          }} 
      />
      <Stack.Screen 
          name='Signin' 
          component={Signin} 
          options={{ 
              headerShown: false,
              headerBackTitleVisible: true
          }}
      />
      <Stack.Screen 
          name='Signup' 
          component={Signun} 
          options={{ 
              headerShown: false,
              headerBackTitleVisible: true
          }}
      />
      <Stack.Screen 
          name='ResetPassword' 
          component={ResetPassword} 
          options={{ 
              headerShown: false,
              headerBackTitleVisible: true
          }}
      />
      <Stack.Screen 
          name='ForgotSuccess' 
          component={ForgotSuccess} 
          options={{ 
              headerShown: false,
              headerBackTitleVisible: true
          }}
      />
      <Stack.Screen 
          name='Dashboard' 
          component={Dashboard} 
          options={{ 
              headerShown: false,
              headerBackTitleVisible: true
          }}
      />
        <Stack.Screen 
            name='AboutCourseGraphicDesign' 
            component={AboutCourse} 
            options={{ 
                headerShown: false,
                headerBackTitleVisible: true
            }}
        />
        <Stack.Screen 
            name='Video' 
            component={Video} 
            options={{ 
                headerShown: false,
                headerBackTitleVisible: true
            }}
        />
        <Stack.Screen 
            name='Notifications' 
            component={Notifications} 
            options={{ 
                headerShown: false,
                headerBackTitleVisible: true
            }}
        />
        <Stack.Screen 
            name='Chat' 
            component={Chat} 
            options={{ 
                headerShown: false,
                headerBackTitleVisible: true
            }}
        />
        <Stack.Screen 
            name='Profile' 
            component={Profile} 
            options={{ 
                headerShown: false,
                headerBackTitleVisible: true
            }}
        />
        <Stack.Screen 
            name='Bottombar' 
            component={Bottombar} 
            options={{ 
                headerShown: false,
                headerBackTitleVisible: true
            }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;