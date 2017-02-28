import React from 'react';
import {AppRegistry, Text, View, StyleSheet, Button} from 'react-native';

export default class TeleOPTab extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>TeleOP</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#44FF44',
        height:925
    },
    text:{
        fontSize:50,
        textAlign:'center',
        padding:305
    }
});

AppRegistry.registerComponent('TeleOPTab', () => TeleOPTab);