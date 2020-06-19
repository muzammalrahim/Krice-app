import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform
} from "react-native";

import {withNavigation} from 'react-navigation'

import Icon from 'react-native-vector-icons/Ionicons'
import {connect} from 'react-redux'

const ShoppingCartIcon = (props) => (
    <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
        <View style={{padding: 15}}>
            <View style={{
                position: 'absolute',
                height: 30,
                width: 30,
                borderRadius: 15,
                backgroundColor: 'rgba(95,197,123,0.8)',
                right: 25,
                bottom: 25,
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2000,

            }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>{props.cartItems.length}</Text>
            </View>
            <Icon name="ios-cart" size={50}/>
        </View>
    </TouchableOpacity>
)

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}


export default connect(mapStateToProps)(withNavigation(ShoppingCartIcon));

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        paddingLeft: 20, paddingTop: 10, marginRight: 5
    }
});
