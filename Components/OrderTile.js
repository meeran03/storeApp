import React from 'react'
import {View,Text,Button, ActivityIndicator, StyleSheet} from 'react-native'
import {getDeliveryBoy,getOrderProducts} from '../Services/Orders'
import { TouchableOpacity } from 'react-native-gesture-handler'


class Orders extends React.Component {
    constructor() {
        super();
        this.state = {
            data : [],
            loading : true,
            price : 1,
        }
    }
    
  async componentDidMount() {
    this.setState({
        delivery_boy : this.props.item.delivery_boy
    })
    await getOrderProducts(this.props.item.id).then((res) => {
        console.log("Products are : ",res)
        this.setState({
            products : res,
            loading : false,
        })
    })

  }


    render() {
        if (this.state.loading) {
            return <ActivityIndicator size="small" color="red" style={{flex:1,justifyContent:"center",alignItems:"center"}} />
        }
        return (
            <View style={styles.container}>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Text style={{fontSize:12,fontFamily:"Raleway_medium",color:"#e94e87"}}>ORDER ID:</Text>
                    <Text style={{fontSize:12,fontFamily:"Raleway_medium",color:"grey"}}>{this.props.item.id}</Text>
                </View>

                <View style={{flexDirection:"row",paddingTop:5,justifyContent:"space-between"}}>
                    <Text style={{fontFamily:"Raleway_medium",color:"grey"}}>Status:</Text>
                    <Text style={{fontFamily:"Raleway_medium",color:"grey"}}>{(this.props.item.status).toUpperCase()}</Text>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:5}}>
                    <Text style={{fontSize:12,fontFamily:"Raleway_medium",color:"#e94e87"}}>DELIVERY BOY:</Text>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Text style={{fontFamily:"Raleway_medium",color:"grey"}}>Name:</Text>
                    <Text style={{fontFamily:"Raleway_medium"}}>{(this.state.delivery_boy.user.username).toUpperCase()}</Text>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Text style={{fontFamily:"Raleway_medium",color:"grey"}}>Phone:</Text>
                    <Text style={{fontFamily:"Raleway_medium"}}>{this.state.delivery_boy.user.phone}</Text>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:5}}>
                    <Text style={{fontSize:12,fontFamily:"Raleway_medium",color:"#e94e87"}}>ORDER PRODUCTS:</Text>
                </View>

                {this.state.products.map((product,index) => {
                    return(
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{fontFamily:"Raleway_medium",color:"grey"}}>{(product.product.name).toUpperCase()}</Text>
                        <Text style={{fontFamily:"Raleway_medium",color:"grey"}}>{product.quantity}</Text>
                    </View>
                    )
                })}

                <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:10}}>
                    <Text style={{fontSize:16,fontFamily:"Raleway_medium",color:"#e94e87"}}>TOTAL PRICE:</Text>
                    <Text style={{fontSize:16,fontFamily:"Raleway_medium",color:"#e94e87"}}>{this.props.item.price}</Text>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-evenly",paddingVertical:10}}>
                    <TouchableOpacity style={{backgroundColor:"#e94e87",padding:8}} 
                        onPress={() => this.props.navigation.navigate("OrderDetail",{
                            order : this.props.item
                        })}
                    >
                        <Text style={{color:"white"}}>TRACK ORDER</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )}
}

export default Orders

const styles = StyleSheet.create({
    container : {
        margin: 10,
        shadowColor: 'grey',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
        elevation: 5,
        backgroundColor : "white",
        padding : 10
    }
})