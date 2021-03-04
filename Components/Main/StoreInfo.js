import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';

function StoreInfo(props) {
    React.useEffect(() => {

    },[])
    return (
        <View style={styles.container}>
            <Text style={{color:"#e94e87",fontFamily:"Raleway_medium"}}>Store Information</Text>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <Text style={{color:"grey",fontFamily:"Raleway",width:'70%'}}>R-Block Model Town,Lahore</Text>
            </View>
        </View>
    )
}
export default StoreInfo;

const styles=StyleSheet.create({
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