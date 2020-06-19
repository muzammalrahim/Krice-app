import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, Button, Picker, TouchableOpacity, Alert} from 'react-native';

import {connect} from "react-redux";


class Cart extends Component {

    sum_total = 0
    product_quantity_index=0
    quantity = [];
    product_quantity=[5,25]

    constructor(props, context) {
        super(props, context);


        this.state = {
            data: [],
            sum_total: 0,

        };
        this.quantityIncrement = this.quantityIncrement.bind(this);
        this.quantityDecrement = this.quantityDecrement.bind(this);


        for (let i = 0; i < this.props.cartItems.length; i++) {
            this.quantity[i] = 1
        }


    }

    // onSelectedItemsChange = (key, value) => {
    //     if (key == 1) {
    //         this.setState({value: this.state.quantity * this.price5kg});
    //         this.currentItem = this.price5kg
    //     }
    //     if (key == 2) {
    //         this.setState({value: this.state.quantity * this.price10kg});
    //         this.currentItem = this.price10kg
    //     }
    //     if (key == 3) {
    //         this.setState({value: this.state.quantity * this.price15kg});
    //         this.currentItem = this.price15kg
    //     }
    //     ;
    // }


    quantityIncrement(index, price) {
        this.quantity[index] = this.quantity[index] + 1;

        this.setState({
            data: this.props.cartItems
        }, () => {

            let stateCopy = Object.assign({}, this.state.data)
            // console.log("stateCopy[index]stateCopy[index]",index,stateCopy[index]);
            stateCopy[index].quantity = this.quantity[index]
            stateCopy[index].total = this.quantity[index] * price
            this.setState(stateCopy);

            if (this.props.cartItems.length > 0) {
                this.sum_total = this.props.cartItems.reduce((first, elements) => {

                    return (first + elements.total)
                }, 0)
            }
            this.setState({
                sum_total: this.sum_total
            }, () => {
                console.log(this.state)
            })
        })


    }

    quantityDecrement(index, price) {

        if (this.quantity[index] > 1) {
            this.quantity[index] = this.quantity[index] - 1;
            this.setState({
                data: this.props.cartItems
            })

            let stateCopy = Object.assign({}, this.state.data)
            // console.log("stateCopy[index]stateCopy[index]",index,stateCopy[index]);
            stateCopy[index].quantity = this.quantity[index]
            stateCopy[index].total = this.quantity[index] * price
            this.setState(stateCopy);
            console.log(this.state.data)

            if (this.props.cartItems.length > 0) {
                this.sum_total = this.props.cartItems.reduce((first, elements) => {

                    return (first + elements.total)
                }, 0)
            }
            this.setState({
                sum_total: this.sum_total
            }, () => {
                console.log(this.state)
            })
        }
    }

    updateUser = (itemValue,index,price) => {

        console.log(Number(itemValue),index,price)
        this.setState({
            data: this.props.cartItems
        }, () => {

            let stateCopy = Object.assign({}, this.state.data)
            // console.log("stateCopy[index]stateCopy[index]",index,stateCopy[index]);
            stateCopy[index].price =  price * Number(itemValue)

            this.setState(stateCopy);

            if (this.props.cartItems.length > 0) {
                this.sum_total = this.props.cartItems.reduce((first, elements) => {

                    return (first + elements.total)
                }, 0)
            }
            this.setState({
                sum_total: this.sum_total
            }, () => {
                console.log(this.state)
            })
        })

        // console.log(value)
        // if (value == 1500) {
        //     this.currentItem = "5KG"
        //     this.setState({value: this.state.quantity * this.price5kg});
        //     this.currentItemValue = 1500;
        // }
        // if (this.price10kg == (value)) {
        //     this.currentItem = "10KG"
        //     this.setState({value: this.state.quantity * this.price10kg});
        //     this.currentItemValue = this.price10kg
        //
        // }
        // if (this.price15kg == (value)) {
        //     this.currentItem = "15KG"
        //     this.setState({value: this.state.quantity * this.price15kg});
        //     this.currentItemValue = this.price15kg
        //
        // }
        // if (this.price15kg == (value)) {
        //     this.currentItem = "25KG"
        //     this.setState({value: this.state.quantity * this.price25kg});
        //     this.currentItemValue = this.price25kg
        //
        // }
        // this.setState({valueSelected: value})
    }


    componentDidMount() {
        this.setState({
            data: this.props.cartItems.map((data, index) => {
                data.total = data.price,
                    data.quantity = 1
                return data;
            })
        }, () => {
            if (this.props.cartItems.length > 0) {
                this.sum_total = this.props.cartItems.reduce((first, elements) => {
                    return (first + elements.total)
                }, 0)
            }
            this.setState({
                sum_total: this.sum_total
            })
        })


    }


    propsChange = () => {
        // for(let key in this.quantity){
        //     this.quantity[key] =1;
        // }
        setTimeout(() => {
            this.setState({
                data: this.props.cartItems.map((data, index) => {
                    data.total = data.price,
                        data.quantity = 1
                    return data;
                })
            }, () => {
                if (this.props.cartItems.length > 0) {
                    if (this.props.cartItems.length > 0) {
                        this.sum_total = this.props.cartItems.reduce((first, elements) => {

                            return (first + elements.price)
                        }, 0)
                        for (let key in this.quantity) {
                            this.quantity[key] = 1;
                        }
                    }
                    this.setState({
                        sum_total: this.sum_total
                    })
                }
            })
        }, 159)


    }
    confirm = () => {


        this.props.navigation.navigate('BuyCart', {
            data: this.state.data,
            total: this.state.sum_total
        })
    }

    render() {
        // console.log('props',this.props.cartItems)
        let innerContent = '';
        if (this.props.cartItems.length > 0) {
            innerContent = <View style={styles.wrapper}>
                <ScrollView>
                    <View style={styles.containerCart}>
                        <Text style={styles.textSize}>Your Cart</Text>
                    </View>
                    {this.props.cartItems.map((data, index) => {
                        return (<View key={data.id} style={styles.container}>
                            <Image style={styles.img} source={{uri: (data.img)}}/>
                            <View style={styles.rightcol}>
                                <Text style={styles.productName}>Name: {data.name}</Text>

                                <View style={styles.row}>
                                    <View style={{
                                        flexDirection: 'row',
                                        borderBottomWidth: 1,
                                        borderRightWidth: 1,
                                        borderLeftWidth: 1,
                                        borderTopWidth: 1
                                    }}>
                                        <Picker style={{
                                            width: 150,
                                            borderBottomWidth: 1,
                                            borderTopWidth: 1,
                                            borderLeftWidth: 1,
                                            borderRightWidth: 1
                                        }} selectedValue={this.state[index].value}
                                                onValueChange={(itemValue,itemIndex) => this.updateUser(itemValue,index,data.price)}>
                                            <Picker.Item label="5 KG" value="1"/>
                                            <Picker.Item label="25 KG" value="5"/>
                                        </Picker>
                                    </View>

                                    <TouchableOpacity onPress={() => {
                                        this.props.removeItem(data);
                                        this.propsChange();
                                    }} style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                        <View style={{
                                            position: 'relative',
                                            height: 30,
                                            width: 30,
                                            borderRadius: 15,
                                            backgroundColor: 'rgba(255,0,0,0.8)',
                                            right: -10,
                                            bottom: 0,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            zIndex: 2000,

                                        }}>
                                            <Text style={{color: 'white', fontWeight: 'bold'}}>-</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.price}>
                                    <Text style={{fontSize: 18}}>Rs {this.quantity[index] * data.price}</Text>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: "center", alignItems: 'center'}}>

                                    <TouchableOpacity style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 20,
                                        backgroundColor: 'lightgrey',
                                        width: 20
                                    }}
                                                      onPress={() => {
                                                          this.quantityDecrement(index, data.price)
                                                      }}>
                                        <Text>-</Text>
                                    </TouchableOpacity>
                                    <Text style={{padding: 5}}>{this.quantity[index]}</Text>
                                    <TouchableOpacity style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 20,
                                        backgroundColor: 'skyblue',
                                        width: 20
                                    }}
                                                      onPress={() => this.quantityIncrement(index, data.price)}>
                                        <Text>+</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>)
                    })}
                    <View style={styles.total}>
                        <Text style={styles.totalText}>Total</Text>
                        <Text style={styles.totalValue}>{this.state.sum_total}</Text>
                    </View>
                </ScrollView>
                <View style={styles.grandTotal}><View style={styles.row}>
                    <Text style={styles.textSize}>Grand
                        Total:
                    </Text>
                    <Text style={styles.Rs}>
                        Rs.{this.state.sum_total}
                    </Text>
                </View>
                    <Button type="solid" onPress={() => this.confirm()} title="Confirm"/>
                </View>
            </View>
        } else {
            innerContent =
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text>No items in your
                    cart</Text></View>
        }
        return innerContent;
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    containerCart: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',

    },
    container: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderTopWidth: 2
    },
    textSize: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    img: {
        marginTop: 20,
        width: 50,
        height: 50,
    },
    productName: {
        fontSize: 19,
        marginBottom: 18
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
    row: {flexDirection: 'row'},
    rightcol: {flexDirection: 'column', marginLeft: 30},
    price: {
        marginTop: 0,
        marginLeft: 5,
        fontWeight: 'bold',
        marginBottom: 10
    },
    total: {
        flexDirection: 'row',
        padding: 10,
        marginTop: 10,
        backgroundColor: "#ececec",
        justifyContent: "space-between",
        fontWeight: 'bold',
    },
    totalText: {
        fontSize: 20,
    },
    totalValue: {
        fontSize: 20,
        marginRight: 20,
        color: "#728873"
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
    }

});
const mapStateToProps = (state) => {

    return {
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (product) => {
            dispatch({type: 'REMOVE_FROM_CART', payload: product})

        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
