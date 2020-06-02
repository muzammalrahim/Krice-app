import React from 'react';
import {View, Text, StyleSheet, Button, Vibration,ToastAndroid } from 'react-native';
import {Card} from 'react-native-elements';
import {connect} from "react-redux";
import {withNavigation} from "react-navigation";


class Details extends React.Component {
    render() {
        const {navigation} = this.props;
        const id = navigation.getParam('id');
        const img = navigation.getParam('img');
        const price = navigation.getParam('price');
        const name = navigation.getParam('name');
        const description = navigation.getParam('description');

        return (
            <View style={styles.container}>
                <Card
                    image={{uri: img}}>
                    <Text style={{marginBottom: 10, marginTop: 20}} h2>
                        {name}
                    </Text>
                    <Text h4>
                        Rs. {price}
                    </Text>
                </Card>
                <View style={styles.descriptionContainer}>
                    <View style={styles.description}>
                        <Text style={styles.textSize}>
                            Description:
                        </Text>
                        <Text>
               {description}
                        </Text>
                    </View>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.row}>
                        <View style={{flexDirection:'row', justifyContent:'space-around',marginBottom:10}}>
                        <Button title="Add to cart" type="solid"  onPress={()=>{this.showToast()}}/>
                        <Button title="Buy Now" type="solid"  onPress={() => this.props.navigation.navigate('Buy', {
                            name: name,
                            price: price,
                            img: img
                        })}/>
                    </View>
                    </View>
                </View>
            </View>
        );
    }
    showToast = ()=>{
        const {navigation} = this.props;
        const id = navigation.getParam('id');
        const img = navigation.getParam('img');
        const price = navigation.getParam('price');
        const name = navigation.getParam('name');
        if(this.props.cartItems.length > 0) {
            let data =this.props.cartItems;
            let checker = false;
            for(let i=0;i<this.props.cartItems.length;i++){

                if (data[i].id == id){
                    ToastAndroid .show("Item Is already in Cart",ToastAndroid .SHORT);
                    checker =true;
                    Vibration.vibrate()
                    break;
                }

            }
            if(checker == false){
                this.props.addItemToCart({
                    id: id,
                    name: name,
                    price: price,
                    img: img
                })
                ToastAndroid .show('Item Has Been Added to Cart.', ToastAndroid .SHORT);
            }


        }else{
            this.props.addItemToCart({
                id: id,
                name: name,
                price:price,
                img: img
            })
            ToastAndroid .show('Item Has Been Added to Cart.', ToastAndroid .SHORT);
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    descriptionContainer: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: "center"
    },
    description: {
        width: '80%',

    },
    textSize: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    buttons: {
        width: "100%",
        flex: 1,
        justifyContent: "flex-end",

    },
    row: {
        width: "100%",
        flexDirection: 'column',
        flexGrow: 1,

        justifyContent: "flex-end"
    }
});
const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Details);
