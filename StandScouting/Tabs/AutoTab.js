import React from 'react';
import {AppRegistry, Text, View, StyleSheet, Button} from 'react-native';

export default class AutoTab extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Auto</Text>
                <View style={styles.button}>
                    <Button onPress={() => alert("Hi")} title="Click Me!"/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFF500',
        height:925
    },
    text:{
        fontSize:50,
        textAlign:'center',
        padding:30
    },
    button:{
        flex:3,

    }
});

AppRegistry.registerComponent('AutoTab', () => AutoTab);