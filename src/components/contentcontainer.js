import React from 'react';
import {View, StyleSheet, ScrollView,ActivityIndicator} from 'react-native';
import {withNavigation} from 'react-navigation';
import Product from '../components/product';
import {base_url} from '../Back_End_URL/backend_api_urls'
const axios = require('axios');

// const BASE_URL = 'https://raw.githubusercontent.com/sdras/sample-vue-shop/master/dist';
// const Base_Product_Api = 'http://localhost/krice_api/api/products'
// const products = [
//     {
//         id: 1,
//         name: 'Supreme Rice',
//         price: 7500,
//         img: 'https://media.socastsrm.com/wordpress/wp-content/blogs.dir/2419/files/2019/12/supreme.png'
//     },
//     {
//         id: 2,
//         name: 'Camo Fang Backpack Jungle',
//         price: 1000,
//         img: `${BASE_URL}/jacket1.png`
//     },
//     {
//         id: 3,
//         name: 'Parka and Quilted Liner Jacket',
//         price: 1500,
//         img: `${BASE_URL}/jacket2.png`
//     },
//     {
//         id: 4,
//         name: 'Cotton Black Cap',
//         price: 300,
//         img: `${BASE_URL}/hat1.png`
//     },
// ];


class Contentcontainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checker: false,
            data:[]
        }
        console.log(base_url)
    }

    productData=''

    async componentDidMount() {
        try {
            const data = await axios.get(`${base_url}products`, {
                method: 'GET'
            });
            console.log(data.data.product)
            this.productData = data.data.product
            this.setState({
                checker:true,
                data:this.productData
            })
        } catch (error) {
            console.log(error)
        }
        // fetch('http://localhost:3000/api/getuser').then(response => console.log( response)).catch(reason => console.log(reason))

    }

    render() {
        return (
            <ScrollView
                style={{
                    flexGrow: 0,
                    width: "100%",
                    height: "100%",
                }}>
                {
                  this.state.checker ?  this.state.data.map((product, index) => {
                        return (
                            <View style={styles.row} key={index + 1}>
                                <View style={styles.col}>
                                    <Product product={product}/>
                                </View>
                            </View>
                        )
                    }) :

                    <ActivityIndicator size="large" color="#0000ff" />

                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    col: {
        flex: 1,
    },
});

export default withNavigation(Contentcontainer);

