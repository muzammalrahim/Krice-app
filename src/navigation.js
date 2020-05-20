import React from "react";

import { createStackNavigator } from 'react-navigation-stack';
import Home from "./components/home";
import Details from "./components/details";
import Header from "./components/header";
import Cart from "./components/cart";
import Buyform from "./components/buyform";
import ShoppingCartIcon from "./components/shoppingCartIcon";
import {createAppContainer} from "react-navigation";
import BuyformCart from "./components/buyformcart";
const ImageHeader = props => (
        <Header {...props} style={{ backgroundColor: 'transparent' }}/>
);
const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {   header: (props) => <ImageHeader {...props} />
                }
        },
        Details: {
            screen: Details,
            navigationOptions: { headerTitle: 'Details',headerRight:()=>(<ShoppingCartIcon/>) }
        },
        Cart: {
            screen: Cart,
            navigationOptions: { title: 'Cart' }
        },
        Buy: {
            screen: Buyform,
            navigationOptions: { title: 'Buy' }
        },
        BuyCart: {
            screen: BuyformCart,
            navigationOptions: { title: 'Buy' }
        }
    },
    {
        initialRouteName: "Home"
    }
);

export default createAppContainer(AppNavigator);
