import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Image, ScrollView, Button,Picker} from "react-native";



class Buyform extends Component {
    price5kg;
    price10kg;
    price15kg;
    currentItem;
    currentItemValue;
    constructor(props) {
        super(props);
        const {navigation} = this.props;
        const img = navigation.getParam('img');
        const price = navigation.getParam('price');
        const name = navigation.getParam('name');
        this.price5kg = price
        this.price10kg = this.price5kg * 2;
        this.price15kg = this.price5kg * 3;
        this.currentItem = '5KG';
        this.currentItemValue =  this.price5kg;
        this.price5kg = price;
        this.items = [
            {key: 1, label: "G-5, Islamabad"},
            {key: 2, label: "G-6, Islamabad"},
            {key: 3, label: "G-7, Islamabad"},
            {key: 4, label: "G-8, Islamabad"},
            {key: 5, label: "G-9, Islamabad"},
            {key: 6, label: "G-10, Islamabad"},
            {key: 7, label: "G-11, Islamabad"},
            {key: 8, label: "G-12, Islamabad"},
            {key: 9, label: "G-13, Islamabad"},
            {key: 10, label: "G-14, Islamabad"},
            {key: 11, label: "G-15, Islamabad"},
            {key: 12, label: "G-16, Islamabad"},
            {key: 13, label: "G-17, Islamabad"},
            {key: 14, label: "G-18, Islamabad"},
        ];

        this.state = {
            value: this.price5kg,
            quantity: 1,
            valueSelected: 500,
            sector: ''
        };
        this.quantityIncrement = this.quantityIncrement.bind(this);
        this.quantityDecrement = this.quantityDecrement.bind(this);


    }

    onSelectedItemsChange = (key, value) => {

    }

    quantityIncrement() {
        this.setState({
            quantity: this.state.quantity + 1
        }, () => {
            this.setState({
                value: (this.currentItemValue * this.state.quantity),
            })
        })
    }

    quantityDecrement() {
        if (this.state.quantity > 1) {
            this.setState({
                quantity: this.state.quantity - 1
            }, () => {
                this.setState({
                    value: this.state.value - this.currentItemValue,
                })
            })
        }
    }

    updateValue = (value) => {
        const {navigation} = this.props;
        const img = navigation.getParam('img');
        const price = navigation.getParam('price');
        const name = navigation.getParam('name');
        // console.log(value)
        if (value == price) {
            this.currentItem = "5KG"
            this.setState({value: this.state.quantity * this.price5kg});
            this.currentItemValue = price;
        }
        if (this.price10kg == (value)) {
            this.currentItem = "10KG"
            this.setState({value: this.state.quantity * this.price10kg});
            this.currentItemValue = this.price10kg

        }
        if (this.price15kg == (value)) {
            this.currentItem = "15KG"
            this.setState({value: this.state.quantity * this.price15kg});
            this.currentItemValue = this.price15kg

        }
        this.setState({valueSelected: value})
    }
    updateSector = (sector) => {
        this.setState({sector: sector})
    }

    render() {
        const {navigation} = this.props;
        const img = navigation.getParam('img');
        const price = navigation.getParam('price');
        const name = navigation.getParam('name');

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.center}>
                        <Text style={styles.orderDetails}>
                            Order Details
                        </Text>


                        <View style={styles.container1}>
                        <Image style={styles.img} source={{uri: (img)}}/>
                        <View style={styles.rightcol}>
                            <Text style={styles.productName}>Name: {name}</Text>

                            <View style={styles.row}>
                                <View style={{flexDirection: 'row'}}>
                                    <Picker style={{
                                        width: 150,
                                        borderBottomWidth: 1,
                                        borderTopWidth: 1,
                                        borderLeftWidth: 1,
                                        borderRightWidth: 1
                                    }} selectedValue={this.state.valueSelected} onValueChange={this.updateUser}>
                                        <Picker.Item label="5 KG" value={this.price5kg}/>
                                        <Picker.Item label="15 KG" value={this.price10kg}/>
                                        <Picker.Item label="25 KG" value={this.price15kg}/>
                                    </Picker>
                                </View>
                                <View style={styles.price}>
                                    <Text>Rs {price}</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <Button color='lightgray' title='-' onPress={this.quantityDecrement}/>
                                <Text style={{padding: 5}}>{this.state.quantity}</Text>
                                <Button style={{marginRight: 10}} title='+' onPress={this.quantityIncrement}/>
                            </View>

                        </View>
                    </View>
                        <View
                            style={
                                {
                                    width: '100%',
                                    marginTop: 40,
                                    borderBottomColor: 'black',
                                    borderBottomWidth: 1,

                                }}
                        >

                        </View>
                        <Text style={styles.orderDetails}>Your Details</Text>
                        <View style={styles.containerWidth}>

                            <Text style={styles.label}>Your Name*</Text>
                            <TextInput placeholder="Name" style={styles.input}/>
                            <Text style={styles.label}>Phone*</Text>
                            <TextInput placeholder="Enter Your Phone No" style={styles.input}/>
                            <Text style={styles.label}>Email*</Text>
                            <TextInput placeholder="Email" style={styles.input}/>
                            <Text style={styles.label}>Address*</Text>
                            <TextInput placeholder="Address" style={styles.input}/>
                            <Text style={styles.label}>City*</Text>
                            <TextInput value="Islamabad" editable={false} style={styles.readonly}
                                       defaultValue="Islamabad"/>
                            <Text style={styles.infoText}>*Only In Islamabad</Text>
                            <Text style={styles.label}>Sector*</Text>
                            <View style={{flexDirection: 'column', flex: 1,}}>
                                <Picker style={{
                                    width: 200,
                                    borderBottomWidth: 1,
                                    borderTopWidth: 1,
                                    borderLeftWidth: 1,
                                    borderRightWidth: 1
                                }} selectedValue={this.state.sector} onValueChange={this.updateSectore}>
                                    <Picker.Item label="G-13 Islamabad" value='G-13 Islamabad'/>
                                    <Picker.Item label="G-14 Islamabad" value='G-14 Islamabad'/>
                                    <Picker.Item label="G-15 Islamabad" value='G-15 Islamabad'/>
                                    <Picker.Item label="G-16 Islamabad" value='G-16 Islamabad'/>
                                    <Picker.Item label="G-17 Islamabad" value='G-17 Islamabad'/>
                                    <Picker.Item label="G-18 Islamabad" value='G-18 Islamabad'/>

                                </Picker>
                            </View>

                            <Text style={styles.colorBlue}>Terms & Conditions*</Text>
                            <Text style={styles.infoText}>*Terms and Conditions applied.</Text>
                            <Text style={styles.termsText}>* Your order will be delivered only on Wednesday and
                                Saturday</Text>
                            <Text style={styles.termsText}>* We will contact you to confirm your order</Text>

                        </View>
                        <View style={styles.deliverySection}>
                            <Image style={styles.deliveryImge} source={require('../../assets/cash_on_delivery.jpg')}/>
                            <Text style={styles.label}>Cash on Delivery</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.grandTotal}>
                    <View style={styles.row}>
                        <Text style={styles.textSize}>Grand
                            Total:
                        </Text>
                        <Text style={styles.Rs}>
                            Rs.{this.state.value}
                        </Text>
                    </View>
                    <Button type="solid" title="Buy Now"/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container1: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    textSize: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    img: {
        width: 50,
        height: 80,
    },
    productName: {
        fontSize: 14,
    },
    productQuantity: {
        fontSize: 14,
        marginTop: 20
    },
    select: {
        marginLeft: 5,
        marginTop: 10,
        flex: 1,

        flexDirection: 'row',
        alignItems: "center"

    },
    // row: {flexDirection: 'row'},
    rightcol: {flexDirection: 'column', marginLeft: 30},
    price: {
        marginTop: 20,
        marginLeft: 5,
        fontWeight: 'bold'

    },
    container: {
        flex: 1,
    },
    orderDetails: {
        marginTop: 30,
        marginLeft: 10,
        fontWeight: "bold",
        fontSize: 16
    },
    label: {
        marginTop: 10,
        marginLeft: 5,
        fontSize: 14
    },
    input: {
        padding: 5,
        borderBottomWidth: 1,

    },
    containerWidth: {
        width: '90%',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    readonly: {
        marginTop: 10,
        padding: 5,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
    },
    infoText: {
        color: 'gray',
        fontSize: 10,
        marginLeft: 5,
    },
    selection: {
        width: '100%',
    },
    colorBlue: {
        marginTop: 15,
        color: 'mediumblue'
    },
    termsText: {
        marginTop: 10,
        marginLeft: 5,
        padding: 2,
        fontSize: 14,
        textAlign: 'justify',
    },
    deliveryImge: {
        width: "30%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deliverySection: {
        flexDirection: 'row',
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 80,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 10,
    },
    grandTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#dfdfdf',
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
    Rs: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#728873"
    },
    // textSize: {
    //     fontSize: 20,
    //     fontWeight: 'bold'
    // },
    row: {flex: 1, flexDirection: 'row'},
})
export default Buyform;
