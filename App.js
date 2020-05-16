import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import cartItems from './src/reducer/cartItems'
import ShoppingCart from "./src/components/shoppingCart";

const store = createStore(cartItems)
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ShoppingCart />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
