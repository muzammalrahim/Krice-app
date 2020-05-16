import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import Product from '../components/product';

const BASE_URL = 'https://raw.githubusercontent.com/sdras/sample-vue-shop/master/dist';

const products = [
    {
        id:1,
        name: 'Khaki Suede Polish Work Boots',
        price: 2500,
        img: `${BASE_URL}/shoe1.png`
    },
    {
        id:2,
        name: 'Camo Fang Backpack Jungle',
        price: 1000,
        img: `${BASE_URL}/jacket1.png`
    },
    {
        id:3,
        name: 'Parka and Quilted Liner Jacket',
        price: 1500,
        img: `${BASE_URL}/jacket2.png`
    },
    {
        id:4,
        name: 'Cotton Black Cap',
        price: 300,
        img: `${BASE_URL}/hat1.png`
    },
];

class Contentcontainer extends React.Component {
    render() {
        return (
            <ScrollView
                style={{
                    flexGrow: 0,
                    width: "100%",
                    height: "100%",
                }}>
                {
                    products.map((product, index) => {
                        return(
                            <View style={styles.row} key={index+1}>
                                <View style={styles.col}>
                                    <Product product={product}/>
                                </View>
                            </View>
                        )
                    })
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

