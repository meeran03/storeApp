
import React from 'react'
import {View,Text,ScrollView} from 'react-native'

//Here we import our components
import Header from '../Components/Header'
import Location from '../Components/Main/Location'

//Our Services
import {registerForPushNotificationsAsync} from '../Services/PushNotifications'
import {updateUser} from '../Services/User'

function Home(props) {
    React.useEffect(() => {
        registerForPushNotificationsAsync().then(token => {
            updateUser("push_token",token)
        })
      },[])
    return (
        <View style={{backgroundColor:"white",flex:1}}>
            <Header title="Home" navigation={props.navigation} />
            <ScrollView>
                <Location navigation={props.navigation}/>
            </ScrollView>
        </View>
    )
}

export default Home