import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import ShoppingCartIcon from "./shoppingCartIcon";
import Icon from 'react-native-vector-icons/Ionicons'



class Header extends Component {
    constructor(props, context) {
        super(props, context);
        this.navigation = this.navigation.bind(this)
    }
    navigation(){
       this.props.navigation.navigate('ShopkeeperLogin')
    }

    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={this.navigation}>
                <Icon name="ios-person" size={50}  />
                </TouchableOpacity>
                <View style={{flexDirection:'row',flexGrow:2,justifyContent:'center' }}>
                <Image source={require('../../assets/splash.jpg')} style={styles.cart} />

                <Text style={styles.logo}>Krice-app </Text>
                </View>
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
        justifyContent:'space-around',
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
