import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import ShoppingCartIcon from "./shoppingCartIcon";




class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Image source={require('../../assets/ecommerce.jpg')} style={styles.cart} />
                <Text style={styles.logo}>Krice-app </Text>
                <ShoppingCartIcon style={{alignSelf:"center"}}/>
            </View>


        );
    }
}
const styles = StyleSheet.create({
    header:{
         height:80,
        marginTop:30,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        padding:20,
        borderBottomWidth:4,
        borderBottomColor:'#ccc',
    },
    cart:{
       width:40,
       height:40
    },
    logo:{
        fontSize:20,
        marginLeft:10,
        fontStyle:'italic',
        color:'#292929'
    }
})

export default Header;
