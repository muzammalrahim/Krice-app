import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, Button, Picker, TouchableOpacity,Alert} from 'react-native';

import {connect} from "react-redux";


class Cart extends Component {
    price5kg;
    price10kg;
    price15kg;
    currentItem;
    sum_total=0

    quantity = [];

    constructor(props, context) {
        super(props, context);

        this.price5kg = 1500
        this.price10kg = this.price5kg * 2;
        this.price15kg = this.price5kg * 3;
        this.currentItem = '5KG';
        this.currentItemValue = this.price5kg;
        this.price5kg = 1500;
        this.state = {
            data: [],
            sum_total:0,


        };
        this.quantityIncrement = this.quantityIncrement.bind(this);
        this.quantityDecrement = this.quantityDecrement.bind(this);

        this.currentItem = this.price5kg;
        for (let i=0;i<this.props.cartItems.length ; i++){
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
        },()=>{

            let stateCopy = Object.assign({},this.state.data)
            // console.log("stateCopy[index]stateCopy[index]",index,stateCopy[index]);
            stateCopy[index].quantity = this.quantity[index]
            stateCopy[index].total = this.quantity[index] * price
            this.setState(stateCopy);
            console.log(this.state.data)

            if(this.props.cartItems.length > 0) {
                this.sum_total = this.props.cartItems.reduce((first, elements) => {
                    console.log("firstfirstfirstfirstfirst", elements)
                    return (first + elements.total)
                },0)
            }
            this.setState({
                sum_total:this.sum_total
            },()=>{
                console.log(this.state)
            })
        })




    }

    quantityDecrement(index,price) {
        // console.log("eeeeeeee",e);
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
                    console.log("firstfirstfirstfirstfirst", elements)
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

    updateUser = (value) => {

        // console.log(value)
        if (value == 1500) {
            this.currentItem = "5KG"
            this.setState({value: this.state.quantity * this.price5kg});
            this.currentItemValue = 1500;
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

    // static getDerivedStateFromProps(props,state) {
    //
    //      //  this.setState({
    //      //     data: this.props.cartItems,
    //      //
    //      // }, () => {
    //      //
    //      //     this.setState({
    //      //         data: this.state.data.map((data, index) => {
    //      //             data.total = data.price,
    //      //                 data.quantity = 1
    //      //             return data;
    //      //         })
    //      //     })
    //      // })
    //     return {
    //         data: props.cartItems.map((data, index) => {
    //             data.total = data.price,
    //                 data.quantity = 1
    //             return data;
    //         })
    //     }
    //  }
    componentDidMount() {
        this.setState({
            data: this.props.cartItems.map((data, index) => {
                data.total = data.price,
                    data.quantity = 1
                return data;
            })
        },()=>{
            if(this.props.cartItems.length > 0) {
                this.sum_total = this.props.cartItems.reduce((first, elements) => {
                    console.log("firstfirstfirstfirstfirst", elements)
                    return (first + elements.total)
                },0)
            }
            this.setState({
                sum_total:this.sum_total
            })
        })


    }


propsChange = ()=>{
        // for(let key in this.quantity){
        //     this.quantity[key] =1;
        // }
        setTimeout(()=>{
            this.setState({
                data: this.props.cartItems.map((data, index) => {
                    data.total = data.price,
                        data.quantity = 1
                    return data;
                })
            },()=> {
                if (this.props.cartItems.length > 0) {
                    if (this.props.cartItems.length > 0) {
                        this.sum_total = this.props.cartItems.reduce((first, elements) => {
                            console.log("firstfirstfirstfirstfirst", elements)
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
        },159)


}
confirm=()=>{


    this.props.navigation.navigate('BuyCart',{
        data:this.state.data,
        total:this.state.sum_total
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
                                    <View style={{flexDirection: 'row'}}>
                                        <Picker style={{
                                            width: 150,
                                            borderBottomWidth: 1,
                                            borderTopWidth: 1,
                                            borderLeftWidth: 1,
                                            borderRightWidth: 1
                                        }} selectedValue={this.state.valueSelected} onValueChange={this.updateUser}>
                                            <Picker.Item label="5 KG" value={this.price5kg}/>
                                            <Picker.Item label="10 KG" value={this.price10kg}/>
                                            <Picker.Item label="15 KG" value={this.price15kg}/>
                                        </Picker>
                                    </View>
                                    <View style={styles.price}>
                                        <Text>Rs {this.quantity[index] * data.price}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => {
                                        this.props.removeItem(data); this.propsChange();
                                    }}>
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
                                <View style={styles.row}>
                                    <Button color='lightgray' title='-'
                                            onPress={() => {this.quantityDecrement(index, data.price)}}/>
                                    <Text style={{padding: 5}}>{this.quantity[index]}</Text>
                                    <Button style={{marginRight: 10}} title='+'
                                            onPress={() => this.quantityIncrement(index, data.price)}/>
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
                    <Button type="solid" onPress={()=>this.confirm()} title="Confirm"/>
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
    row: {flexDirection: 'row'},
    rightcol: {flexDirection: 'column', marginLeft: 30},
    price: {
        marginTop: 20,
        marginLeft: 5,
        fontWeight: 'bold'

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
