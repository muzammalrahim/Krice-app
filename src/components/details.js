import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Card} from 'react-native-elements';
import {connect} from "react-redux";
import {withNavigation} from "react-navigation";
import Toast from "react-native-simple-toast";

class Details extends React.Component {
    render() {
        const {navigation} = this.props;
        const id = navigation.getParam('id');
        const img = navigation.getParam('img');
        const price = navigation.getParam('price');
        const name = navigation.getParam('name');

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
                            Etiam commodo pretium dolor vitae convallis. Aliquam porttitor lacinia purus, sed eleifend
                            turpis luctus sed. Aliquam ac elit sit amet magna dignissim tempus. Vestibulum ultrices,
                            odio eu tempus dignissim, dui nibh congue diam, quis ornare felis ligula eget neque.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                            egestas. Quisque vitae tincidunt purus, ut rutrum felis. Aenean augue turpis, egestas sit
                            amet leo sit amet, dictum iaculis urna. Donec aliquet commodo lorem vitae sollicitudin.
                            Donec efficitur odio id est ornare imperdiet. Proin pulvinar diam vel fringilla malesuada.
                            Ut sit amet nibh ac turpis tempus tristique. Pellentesque nec velit eget mi consectetur
                            fermentum.
                        </Text>
                    </View>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.row}>
                        <Button title="Add to cart" type="solid" onPress={()=>{this.props.addItemToCart({id:id,name:name,price:price,img:img});this.showToast()}}/>
                        <Button title="Buy Now" type="solid"  onPress={() => this.props.navigation.navigate('Buy', {
                            name: name,
                            price: price,
                            img: img
                        })}/>
                    </View>
                </View>
            </View>
        );
    }
    showToast = ()=>{
        Toast.show('Item Has Been Added to Cart.', Toast.SHORT);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
        justifyContent: "flex-end"
    },
    row: {
        width: "100%",
        flexDirection: 'row',
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "space-around"
    }
});
const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
    }
}
export default connect(null, mapDispatchToProps)(Details);
