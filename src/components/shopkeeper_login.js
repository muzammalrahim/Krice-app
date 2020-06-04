import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from "react-native";

const axios = require('axios');

class ShopkeeperLogin extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            email: '',
            password: ''
        }

        this.login = this.login.bind(this)
    }

    handleChangeEmail(eventEmail) {

        this.setState({email: eventEmail});
    }

    handleChangePassword(eventPassword) {

        this.setState({password: eventPassword});
    }

    async login() {
        try {
            const userLogin = await axios.post('https://url', {})
        } catch (error) {
            console.log(this.state)
            this.props.navigation.navigate('Shopkeeper')
        }
    }

    render() {
        return (

            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', width: "80%"}}>
                            <Text style={{flexGrow: 1, alignSelf: 'center', width: "30%"}}>
                                Email:
                            </Text>

                            <View
                                style={{flexGrow: 2, flexDirection: 'row', justifyContent: 'flex-end', width: "100%"}}>
                                <TextInput name="email" placeholder="Email"
                                           onChangeText={this.handleChangeEmail.bind(this)}
                                           value={this.state.email} style={styles.input}/>
                            </View>
                        </View>

                    </View>
                    <View style={{flexDirection: 'row', width: "80%", marginTop: 10}}>
                        <Text style={{alignSelf: 'center', width: "30%"}}>
                            Password:
                        </Text>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', width: "100%"}}>
                            <TextInput name="password" placeholder="Password"
                                       onChangeText={this.handleChangePassword.bind(this)}
                                       value={this.state.password} style={styles.input}/>
                        </View>
                    </View>

                    <View style={{marginTop: 20, justifyContent: 'center', alignItems: 'flex-end', width: "60%"}}>
                        <Button title="Login" type="solid" onPress={this.login}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    container: {
        width: "80%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 300,

    },
    input: {
        padding: 5,

        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        width: "100%",
        marginLeft: 5


    }
})

export default ShopkeeperLogin;
