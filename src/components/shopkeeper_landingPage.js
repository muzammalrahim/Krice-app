import React, {Component} from 'react';
import {View, StyleSheet, Text} from "react-native";

class ShopkeeperLandingPage extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={{width:'80%',justifyContent:'space-around',flexWrap:'wrap'}}>
                    <View style={{height: 70,width:"100%",backgroundColor:'purple',justifyContent:'center',alignItems:"center",elevation: 9,marginTop:10}}>
                        <Text style={{fontSize:25,color:'white'}}>
                            View Stock
                        </Text>
                    </View>
                <View style={{height: 70,width:"100%",backgroundColor:'blue',justifyContent:'center',alignItems:"center",elevation: 9,marginTop:10}}>
                <Text style={{fontSize:25,color:'white'}}>
                    View Orders
                </Text>
                </View>
                    <View style={{height: 70,width:"100%",backgroundColor:'red',justifyContent:'center',alignItems:"center",elevation: 9,marginTop:10}}>
                        <Text style={{fontSize:25,color:'white'}}>
                            Add Product
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent:"center",
     alignItems:'center'
    }
})
export default ShopkeeperLandingPage;
