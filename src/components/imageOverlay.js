import React, {Component} from 'react';
import {View,StyleSheet,Text} from "react-native";



class ImageOverlay extends Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        let header = this.props.header ? <Text style ={styles.overlayheader}>{this.props.header}</Text> :null;
        let paragraph = this.props.paragraph ? <Text style ={styles.overlaytext}>{this.props.paragraph}</Text> :null;
        return (
           <View>
               {header}
               {paragraph}
           </View>
        );
    }
}
const styles = StyleSheet.create({
    overlayheader:{
        shadowColor:'#000',
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.8,
        shadowRadius:3,
        elevation:1,

        alignSelf:'center',
        fontSize:28,
        color:'#292929',
        textAlign:'center',
        padding:10,
        backgroundColor: 'rgba(255,255,255,0.6)',
        fontWeight:'bold'
    },
    overlaytext:{
        shadowColor:'#000',
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.6,
        shadowRadius:3,
        elevation:1,

        alignSelf:'center',
        fontSize:16,
        fontStyle:"italic",
        color:'#292929',
        textAlign:'center',
        padding:8,
        marginTop:8,
        backgroundColor: 'rgba(255,255,255,0.6)',

    }
})
export default ImageOverlay;
