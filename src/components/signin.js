import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet, Text, TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                {/*<View style={{flexDirection:"row" ,justifyContent:'space-around',alignItems:"center",backgroundColor:"lightgrey",elevation:6,width:"50%",padding:6,borderRadius:6}}>*/}
                {/*    <Icon name="logo-facebook" size={29} /><Text >Facebook Sign In</Text>*/}
                {/*</View>*/}
                </TouchableOpacity>
                <View style={{marginTop:9,width:"50%",elevation:6,borderRadius:6}}>
                <Button style={{paddingLeft:20}} title="Continue As Guest" onPress={this._signInAsync}/>
                </View>
            </View>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default SignInScreen
