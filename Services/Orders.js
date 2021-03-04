import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native'


//Here is the base API
import axios from './API'
import {encode as btoa} from 'base-64'




export async function getOrders() {
    const token = await AsyncStorage.getItem('token')
    const store = await AsyncStorage.getItem('store')
    const storeData = JSON.parse(store)
    console.log(storeData)
    return axios.get('/order/?exclude=DELIVERED&store=' + storeData.id,{
        headers : {
            "Authorization" : `Bearer ${token}`
        }
    }).then(response => {
        return response.data
    }).catch(e => {
        Alert.alert(e)
    })
}

export async function getDeliveryBoy(id) {
    const token = await AsyncStorage.getItem('token')
    return axios.get('/deliveryboy/' + id + '/',{
        headers : {
            "Authorization" : `Bearer ${token}`
        }
    }).then(response => {
        console.log(response.data)
        return response.data
    }).catch(e => {
        Alert.alert(e)
    })
}

export async function getOrderProducts(id) {
    const token = await AsyncStorage.getItem('token')
    return axios.get('/order-product/?order_id=' + id,{
        headers : {
            "Authorization" : `Bearer ${token}`
        }
    }).then(response => {
        console.log(response.dat)
        return response.data
    }).catch(e => {
        Alert.alert(e)
    })
}