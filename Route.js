import React from 'react';
import * as Font from 'expo-font';
import { Ionicons,Entypo } from '@expo/vector-icons';


import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//Our Screens
import Login from './Screens/Auth/Login'
import Register from './Screens/Auth/Register'
import ChangePassword from './Screens/Auth/ChangePassword'

import Home from './Screens/Home'
import Loading from './Screens/Loading'
import Notification from './Screens/Notification'
import ChangeLocation from './Screens/Map/ChangeLocation.js'

//Order Stack Screens
import Orders from './Screens/Orders/Orders'
import OrderDetail from './Screens/Orders/OrderDetail'
import Chat from './Screens/Orders/Chat'

const Stack = createStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{
                headerTitleAlign: "center"
            }} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
        </Stack.Navigator>
    )
}

function MainStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown : false,}} />
        </Stack.Navigator>
    )
}

function OrderStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Orders" component={Orders} options={{headerShown : false,}} />
            <Stack.Screen name="OrderDetail" component={OrderDetail} />
            <Stack.Screen name="Chat" component={Chat}/>
        </Stack.Navigator>
    )
}


const Tab = createBottomTabNavigator()
function MyTabs() {
    return (
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName = "ios-home";

            if(route.name === 'MainStack') {
            }
            else if (route.name === 'ProfileStack') {
                iconName = 'person';
            } else if (route.name === 'Cart') {
                return <Entypo name="shopping-cart" size={size} color={color} />
            } else if (route.name === "Notification") {
                iconName = "notifications"
            } else if (route.name === "Users") {
                return <Entypo name="users" size={size} color={color} />
            }

            return <Ionicons name={iconName} size={size} color={color} />;
        },

        

        })}>
          <Tab.Screen name="MainStack" component={MainStack}  options={{ 
              headerShown : false,
              tabBarLabel : "Home",
            }} />
          <Tab.Screen name="OrderStack" component={OrderStack}  options={{
              headerShown : false,
              tabBarLabel: "Orders"
            }} />
          <Tab.Screen name="Notification" component={Notification}  options={{
              headerShown : false,
              tabBarLabel: "Notifications"
            }} />

          {/* <Tab.Screen name="ProfileStack" component={ProfileStack}  options={{
              headerShown : false,
              tabBarLabel : "Profile"
            }} /> */}
        {/* <Tab.Screen name="Chat" component={Chat} /> */}
      </Tab.Navigator>
    )}

const customFonts = {
    Raleway: require('./assets/fonts/Raleway-Regular.ttf'),
    Raleway_medium: require('./assets/fonts/Raleway-Medium.ttf'),
    Raleway_bold: require('./assets/fonts/Raleway-Bold.ttf'),
  }




function Routes() {
    async function _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        setLoaded(true)
      }
    React.useEffect(() => {
        _loadFontsAsync();        
    },[])

    const [loaded,setLoaded] = React.useState(false);
      
      if (!loaded) {
        return null;
      }
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Loading" component={Loading}  options={{
                    headerShown : false,
                }} />
                <Stack.Screen name="AuthStack" component={AuthStack}  options={{
                    headerShown : false,
                }} />
                <Stack.Screen name="MyTabs" component={MyTabs}  options={{
                    headerShown : false,
                }} />
                <Stack.Screen name="Notification" component={Notification}  options={{
                    headerShown : false,
                }} />
                <Stack.Screen name="Change Location" component={ChangeLocation}  options={{
                    headerShown : false,
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;