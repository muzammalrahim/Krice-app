import React, {Component} from 'react';
import Header from "./header";
import {ScrollView, StyleSheet} from "react-native";
import Banner from "./banner";
import Contentcontainer from "./contentcontainer";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <ScrollView style={styles.container}>
                    <Banner/>
                    <Contentcontainer/>
                </ScrollView>
            </React.Fragment>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
export default Home;
