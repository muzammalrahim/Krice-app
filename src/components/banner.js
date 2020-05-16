import React, {Component} from 'react';
import {Image, StyleSheet, ImageBackground, ImageComponent, View} from "react-native";
import ImageOverlay from "./imageOverlay";




class Banner extends Component {
    render() {
        return (
            <View >
            <ImageBackground source={require('../../assets/Banner.png')}  resizeMode='cover'style={styles.banner}>
               <ImageOverlay  header='React-Native' paragraph='e-commerce' />
            </ImageBackground>
            </View>
                );
    }
}
const styles= StyleSheet.create({
    banner:{
        width:'100%',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:'100%'
    }
})
export default Banner;
