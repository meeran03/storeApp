import React from 'react'
import {View,Text,Button, ActivityIndicator,Dimensions} from 'react-native'
import {socket,socketBoy} from '../../Services/Websocket'
import MapView,{Marker} from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';


const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


class Orders extends React.Component {
    constructor() {
        super();
        this.state = {
            data : [],
            loading : true
        }
    }
    
  componentDidMount() {  
      console.log(this.props.route.params.order)
    let chatsocket = socketBoy(this.props.route.params.order.id)
    chatsocket.onmessage = function(e) {
        this.setState({
            location : JSON.parse(e.data).location,
            loading : false,
            customer : this.props.route.params.order.customer
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

            <View>
                <MapView
                    style={{  height: height }}
                    region={{ latitude: this.state.location.latitude, longitude: this.state.location.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
                >
                    <Marker
                        coordinate={this.state.location}
                        title="My Marker"
                        description="Some description"
                    />
                    <MapViewDirections
                     origin = {{latitude: 37.771707, longitude: -122.4053769}}
                     strokeWidth={3}
                     strokeColor="hotpink"
                     destination={
                                {
                                latitude : this.state.customer.latitude,
                                longitude : this.state.customer.longitude
                                }
                            }
                        // destination={{ latitude: this.state.location.latitude, longitude: this.state.location.longitude }}
                        apikey="AIzaSyD-S-cuUziy083ZS2a2X_Btnr-msbXJFnw"
                        />
                </MapView>
            </View>
        )}
}

export default Orders
