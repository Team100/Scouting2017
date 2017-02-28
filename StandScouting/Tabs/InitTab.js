import React from 'react';
import {AppRegistry, Text, View, StyleSheet, Button} from 'react-native';

export default class InitTab extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Init</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FF3300',
        height:925
    },
    text:{
        fontSize:50,
        textAlign:'center',
        padding:305
    }
});

AppRegistry.registerComponent('InitTab', () => InitTab);