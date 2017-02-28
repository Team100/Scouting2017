import React from 'react';
import {AppRegistry, Text, View, StyleSheet, Button} from 'react-native';

export default class EndTab extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>End</Text>
                <Button style={styles.button} onPress={() => alert("Hi")}
                    title="Click Me!"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#44AAFF',
        height:925
    },
    text:{
        fontSize:50,
        textAlign:'center',
        margin:305
    },
    button:{
        width:2
    }
});

AppRegistry.registerComponent('EndTab', () => EndTab);