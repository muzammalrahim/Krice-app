import React, {Component} from 'react';
import {View, StyleSheet, Text} from "react-native";

class Error extends Component {
    render() {
        return (
           <View style={styles.conatiner}>
               <Text style={styles.textStyle}>
               Error in Loading Data
               </Text>
           </View>
        );
    }
}
const styles= StyleSheet.create({
    conatiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',


    },
    textStyle:{
        fontSize:25,
        color:'red'
    }
})

export default Error;
