import React, {Component} from 'react';
import {View,StyleSheet,Text} from "react-native";


class ViewOrders extends Component {
    render() {
        return (
          <View style={styles.container}>
              <Text>View Orders</Text>
          </View>
        );
    }
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default ViewOrders;
