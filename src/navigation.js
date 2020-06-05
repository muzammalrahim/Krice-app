import React from "react";

import { createStackNavigator } from 'react-navigation-stack';
import Home from "./components/home";
import Details from "./components/details";
import Header from "./components/header";
import Cart from "./components/cart";
import Buyform from "./components/buyform";
import ShoppingCartIcon from "./components/shoppingCartIcon";
import {createAppContainer,createSwitchNavigator} from "react-navigation";
import BuyformCart from "./components/buyformcart";

import {
    ActivityIndicator,
    AsyncStorage,
    Button,StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import SignInScreen from "./components/signin";




const ImageHeader = props => (
    <Header {...props} style={{ backgroundColor: 'transparent' }}/>
);
class AuthLoadingScreen extends React.Component {
    constructor() {
        super();

    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
    componentDidMount(){
        setTimeout(()=>{
            this._bootstrapAsync();
            console.log("s")
        },5000)

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});




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
        },


    },
    {
        initialRouteName: "Home"
    }
);

// const AuthSack = createStackNavigator(
//     {
//         Home: {
//             screen: Home,
//             navigationOptions: {   header: (props) => <ImageHeader {...props} />
//             }
//         },
//         Details: {
//             screen: Details,
//             navigationOptions: { headerTitle: 'Details',headerRight:()=>(<ShoppingCartIcon/>) }
//         },
//         Cart: {
//             screen: Cart,
//             navigationOptions: { title: 'Cart' }
//         },
//         Buy: {
//             screen: Buyform,
//             navigationOptions: { title: 'Buy' }
//         },
//         BuyCart: {
//             screen: BuyformCart,
//             navigationOptions: { title: 'Buy' }
//         },
//
//
//     },
//     {
//         initialRouteName: "Home"
//     }
// );
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export const Navigator= createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppNavigator,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));

