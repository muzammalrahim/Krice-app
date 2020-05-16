import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Card, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import ImageOverlay from "./imageOverlay";
import {connect} from "react-redux";
import Toast from 'react-native-simple-toast';

class Product extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {
                id:this.props.product.id,
                name: this.props.product.name,
                price: this.props.product.price,
                img: this.props.product.img
            })}>
            <Card
                image={{uri: this.props.product.img}}>
                <ImageOverlay header="Avaiable"/>
                <Text style={styles.textName} h2>
                    {this.props.product.name}
                </Text>
                <Text style={styles.price} h4>
                    Rs. {this.props.product.price}
                </Text>
                <Text h6 style={styles.description}>
                    added 2h ago
                </Text>
                <Button style={styles.btnStyle}
                    type="outline"
                    title='Buy now'
                    onPress={() => this.props.navigation.navigate('Buy', {
                        id:this.props.product.id,
                        name: this.props.product.name,
                        price: this.props.product.price,
                        img: this.props.product.img
                    })} />
                <Button style={styles.btnStyle}
                        type="solid"
                        title='Add To Cart'
                        onPress={()=>{this.props.addItemToCart({id:this.props.product.id,name:this.props.product.name,price:this.props.product.price,img:this.props.product.img});this.showToast()}}
                         />


            </Card>
            </TouchableOpacity>
        );
    }
showToast = ()=>{
    Toast.show('Item Has Been Added to Cart.', Toast.SHORT);
}

}

const styles = StyleSheet.create({
    textName:{marginBottom: 10, marginTop: 20 },
    name: {
        color: '#5a647d',
        fontWeight: 'bold',
        fontSize: 30
    },
    price: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        fontSize: 10,
        color: '#c1c4cd'
    },
    btnStyle:{
      width:'100%',
      padding:"6 ,12 ",
      backgroundColor:'#337ab7',
      borderColor:'#337ab7',

    }
});
const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
    }
}

export default connect(null, mapDispatchToProps)(withNavigation(Product));
