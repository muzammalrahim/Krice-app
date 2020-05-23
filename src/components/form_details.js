import React, {Component} from 'react';
import {Button, Image, Picker, ScrollView, StyleSheet, Text, TextInput, View,TouchableOpacity} from "react-native";
import {Card} from "react-native-elements";


class FormDetails extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            sector: ''
        };
        this.handleChange= this.handleChange.bind(this);
    }
    handleChange(event = {}) {
        const name = event.target && event.target.name;
        const value = event.target && event.target.value;

        this.setState({[name]: value});
    }
    updateSector = (sector) => {
        this.setState({sector: sector})
    }
    submit(){
        console.log("state",this.state);
    }
    render() {
        return (
            <View style={styles.container}>

                <ScrollView>
                    <View style={styles.center}>
                        <Text style={styles.orderDetails}>Your Details</Text>
                        <View style={styles.containerWidth}>

                            <Text style={styles.label}>Your Name*</Text>
                            <TextInput name="name" placeholder="Name" onChangeText={this.handleChange} value={this.state.name} style={styles.input}/>
                            <Text style={styles.label}>Phone*</Text>
                            <TextInput name ="phone_no"placeholder="Enter Your Phone No"  onChangeText={this.handleChange} value={this.state.phone_no} style={styles.input}/>
                            <Text style={styles.label}>Email*</Text>
                            <TextInput name="email" placeholder="Email" onChangeText={this.handleChange} value={this.state.email}style={styles.input}/>
                            <Text style={styles.label}>Address*</Text>
                            <TextInput name="address" placeholder="Address" onChangeText={this.handleChange} value={this.state.address} style={styles.input}/>
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
                                }} selectedValue={this.state.sector} onValueChange={this.updateSector}>
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
                            <Text style={styles.termsText}>*Your order will be delivered only on Wednesday and
                                Saturday</Text>
                            <Text style={styles.termsText}>*We will contact you to confirm your order</Text>

                        </View>
                        <Card style={styles.deliverySection}>
                            <TouchableOpacity >
                                <View style={styles.deliverySection}>
                                    <Image style={styles.deliveryImge} source={require('../../assets/cash_on_delivery.jpg')}/>
                                    <Text style={styles.label}>Cash on Delivery</Text>
                                </View>
                            </TouchableOpacity>
                        </Card>

                    </View>
                </ScrollView>

            </View>



        );
    }
}
const styles = StyleSheet.create({



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
        width: "50%",
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deliverySection: {
        flexDirection: 'row',
        padding: 15,

        shadowColor: "#af0",
        shadowOffset: {
            width: 15,
            height: 80,
        },
        shadowOpacity: 1,
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


})
export default FormDetails;
