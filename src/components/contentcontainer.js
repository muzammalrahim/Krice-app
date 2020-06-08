import React from 'react';
import {View, StyleSheet, ScrollView,ActivityIndicator,TextInput} from 'react-native';
import {withNavigation} from 'react-navigation';
import Product from '../components/product';
import {base_url} from '../Back_End_URL/backend_api_urls'
import Error from "./error";
const axios = require('axios');


const products = [
    {
        id: 1,
        name: 'Supreme Rice',
        price: 7500,
        img: 'https://media.socastsrm.com/wordpress/wp-content/blogs.dir/2419/files/2019/12/supreme.png'
    },
    {
        id: 2,
        name: 'Sela Super Fine',
        price: 750,
        img: `https://4.imimg.com/data4/SR/FX/MY-166470/indian-long-grain-1121super-kernal-sela-basmati-rice-500x500.png`
    },
    {
        id: 3,
        name: 'Awami Rice',
        price: 1000,
        img: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIh1EQi6LEJJIUYXsYVrvEfKJnqmoAdaAOWPjFbCIk48VD6GPy&usqp=CAU`
    },
    {
        id: 4,
        name: 'KT Basmati',
        price: 900,
        img: `https://4.imimg.com/data4/JT/LW/MY-19725769/basmati-rice-250x250.jpg`
    },
];


class Contentcontainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checker: true,
            data:products
        }
        console.log(base_url)
    }

    productData=''

    // async componentDidMount() {
    //     try {
    //         const data = await axios.get(`${base_url}products`, {
    //             method: 'GET'
    //         });
    //         console.log(data.data.product)
    //         this.productData = data.data.product
    //         this.setState({
    //             checker:true,
    //             data:this.productData
    //         })
    //     } catch (error) {
    //         console.log(error)
    //         this.setState({
    //             checker:true,
    //             data:''
    //         })
    //     }
    //     // fetch('http://localhost:3000/api/getuser').then(response => console.log( response)).catch(reason => console.log(reason))
    //
    // }

    render() {
        return (
            <ScrollView
                style={{
                    flexGrow: 0,
                    width: "100%",
                    height: "100%",
                }}>
                {
                  this.state.checker ? this.state.data!='' ?  this.state.data.map((product, index) => {
                        return (
                            <View style={styles.row} key={index + 1}>
                                <View style={styles.col}>
                                    <Product product={product}/>
                                </View>
                            </View>
                        )
                    }):<Error/> :

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

