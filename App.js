import 'react-native-gesture-handler';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';




import Onboarding from './app/src/view/screens/Onboarding/Onboarding';
import Signin from './app/src/view/screens/Signin/Signin';
import Forget_Password from './app/src/view/screens/Forget_Password/Forget_Password';
import Verification from './app/src/view/screens/Verification/Verification';
import Reset_password from './app/src/view/screens/Reset_password/Reset_password';
import Tell_us_about_your_self from './app/src/view/screens/Tell_us_about_your_self/Tell_us_about_your_self';



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
LogBox.ignoreAllLogs();



import {
  StyleSheet,
  Text,
  View, Image, ImageBackground,
  TextInput,
  TouchableOpacity,
  LogBox,
  ScrollView,
  ActivityIndicator,
  Alert
} from 'react-native';



// import B1 from './src/assets/svg/b1.svg'
// import B2 from './src/assets/svg/b2.svg'
// import B3 from './src/assets/svg/b3.svg'



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reset_password"
          component={Reset_password}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Forget_Password"
          component={Forget_Password}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tell_us_about_your_self"
          component={Tell_us_about_your_self}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>

  );





  //   function Tabb() {

  //     return (
  //       <Tab.Navigator

  //         tabBarOptions={{
  //           labelStyle: {
  //             fontSize: 10,
  //             margin: 0,
  //             padding: 0,
  //             // marginBottom:'2%',
  //             color: 'pink'
  //           },

  //         }}
  //         screenOptions={({ route }) => ({
  //           tabBarLabelStyle: {
  //             textAlign: 'center', marginBottom: '5%',
  //           },
  //           tabBarShowLabel: false,

  //           tabBarStyle: {
  //             backgroundColor: '#ffff',
  //             borderTopColor: 'white',
  //             borderTopWidth: 0.5,
  //             height: 50,
  //             // borderTopLeftRadius: 20,
  //             // borderTopRightRadius: 20,
  //           },


  //           tabBarActiveTintColor: '#FE934E',
  //           tabBarInactiveTintColor: '#9E9E9E',
  //         })}
  //       >

  //         <Tab.Screen
  //           name="Home1"
  //           component={Home}
  //           options={{

  //             tabBarIcon: ({ focused }) =>
  //               focused ? <Bb1 /> : <B1 />,
  //             headerShown: false, title: 'Edit List'
  //           }}
  //           listeners={({ }) => ({
  //             tabPress: () => {
  //               console.log('++++++++++++++++++')
  //             },
  //           })}
  //         />

  //         <Tab.Screen
  //           name="Workouts"
  //           component={Workouts}
  //           options={{

  //             // tabBarIcon: ({ focused }) => (

  //             //   <TabIcon
  //             //     focused={focused}
  //             //     source={require('./src/assets/images/bottom2.png')}
  //             //     name={"Workouts"}
  //             //   />

  //             // ),
  //             tabBarIcon: ({ focused }) =>
  //               focused ? <Bb2 /> : <B2 />,
  //             headerShown: false, title: 'Workouts '
  //           }}
  //           onPress={() => {
  //             console.log('sak')

  //           }}
  //         />


  //         <Tab.Screen
  //           name="Daily_report"
  //           component={Daily_report}
  //           options={{

  //             // tabBarIcon: ({ focused }) => (
  //             //   <TabIcon
  //             //     focused={focused}
  //             //     source={require('./src/assets/images/bottom3.png')}
  //             //     name={"Daily_report"}
  //             //   />
  //             // ),
  //             tabBarIcon: ({ focused }) =>
  //               focused ? <Bb3 /> : <B3 />,
  //             headerShown: false, title: 'Daily_report '
  //           }}
  //           onPress={() => {
  //             console.log('sak')

  //           }}
  //         />
  //         <Tab.Screen
  //           name="Settings"
  //           component={Settings}
  //           options={{

  //             // tabBarIcon: ({ focused }) => (
  //             //   <TabIcon
  //             //     focused={focused}
  //             //     source={require('./src/assets/images/bottom4.png')}
  //             //     name={"Settings"}
  //             //   />
  //             // ),
  //             tabBarIcon: ({ focused }) =>
  //               focused ? <Bb4 /> : <B4 />,
  //             headerShown: false, title: 'Settings '
  //           }}
  //           onPress={() => {
  //             console.log('sak')

  //           }}
  //         />


  //       </Tab.Navigator>
  //     );
  //   }
}
export default App;
