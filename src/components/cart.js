import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, Button} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {connect} from "react-redux";

class Cart extends Component {
    price5kg;
    price10kg;
    price15kg;
    currentItem;

    constructor(props, context) {
        super(props, context);

        this.price5kg = 1500
        this.price10kg = this.price5kg * 2;
        this.price15kg = this.price5kg * 3;
        this.currentItem = '5KG';
        this.currentItemValue = this.price5kg;
        this.price5kg = 1500;
        this.state = {
            data:[],
            value: 500,
            quantity: 1,
            valueSelected: 500
        };
        this.quantityIncrement = this.quantityIncrement.bind(this);
        this.quantityDecrement = this.quantityDecrement.bind(this);

        this.currentItem = this.price5kg

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
componentDidMount() {
    this.setState({
        data:this.props.cartItems,

    },()=>{
        this.state.data.forEach((data,index)=>{
            console.log('st:::::::::::',data.price);
        })
    })
}

    render() {
        console.log('props',this.props.cartItems)


        return (
            <View style={styles.wrapper}>
                <ScrollView>

                    <View style={styles.containerCart}>
                        <Text style={styles.textSize}>Your Cart</Text>
                    </View>
                    {this.state.data.map((data,index)=>{ return (<View key={data.id} style={styles.container}>
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
                                    <Text>Rs {data.price}</Text>
                                </View>
                                <Text>Remove from cart</Text>
                            </View>
                            <View style={styles.row}>
                                <Button color='lightgray' title='-' onPress={this.quantityDecrement}/>
                                <Text style={{padding: 5}}>{this.state.quantity}</Text>
                                <Button style={{marginRight: 10}} title='+' onPress={this.quantityIncrement}/>
                            </View>

                        </View>
                    </View>)})}


                    <View style={styles.total}>
                        <Text style={styles.totalText}>Total</Text>
                        <Text style={styles.totalValue}>{this.state.value}</Text>
                    </View>

                </ScrollView>
                <View style={styles.grandTotal}><View style={styles.row}>
                    <Text style={styles.textSize}>Grand
                        Total:
                    </Text>
                    <Text style={styles.Rs}>
                        Rs.{this.state.value}
                    </Text>
                </View>
                    <Button type="solid" title="Confirm"/>
                </View>
            </View>
        );
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
        borderTopWidth:2
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
        removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product })
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Cart);
