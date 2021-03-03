import React from 'react'
import {View,Text,Button, ActivityIndicator} from 'react-native'
import {socket} from '../../Services/Websocket'
import {getOrders} from '../../Services/Orders'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import OrderTile from '../../Components/OrderTile'
import Header from '../../Components/Header'

let chatsocket = socket()

class Orders extends React.Component {
    constructor() {
        super();
        this.state = {
            data : [],
            loading : true
        }
    }
    
  componentDidMount() {
    getOrders().then(res => {
        console.log(res)
        this.setState({data : (res),loading:false})

    })
    chatsocket.onmessage = function(e) {
        //const data = JSON.parse(e.data);
        getOrders().then(res => {
            this.setState({data : (res)})
            console.log("data is ",res)    
        })
      }.bind(this)

    chatsocket.onclose = function(e) {
      console.error('Chat socket closed unexpectedly',e.message);
    };
  }


    render() {
        if (this.state.loading) {
            return <ActivityIndicator size="large" color="red" style={{flex:1,justifyContent:"center",alignItems:"center"}} />
        }
        return (

            <View style={{flex:1}}>
                <Header title="My Orders" />
                <ScrollView>
                    {this.state.data.map((item,index) => {
                        return(
                            <OrderTile item={item} key={index} navigation={this.props.navigation} />
                        )
                    })}
                </ScrollView>
            </View>
        )}
}

export default Orders
