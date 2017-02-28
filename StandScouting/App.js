import React from 'react';
import {AppRegistry, Text, View, Button, StyleSheet} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import InitTab from './Tabs/InitTab';
import AutoTab from './Tabs/AutoTab';
import TeleOPTab from './Tabs/TeleOPTab';
import EndTab from './Tabs/EndTab';

class InitScreen extends React.Component {
  render() {
    return(
      <View>
        <InitTab />
      </View>
    );
  }
}

class AutoScreen extends React.Component {
  render() {
    return(
      <View>
        <AutoTab />
      </View>
    );
  }
}

class TeleOPScreen extends React.Component {
  render() {
    return(
      <View>
        <TeleOPTab />
      </View>
    );
  }
}

class EndScreen extends React.Component {
  render() {
    return(
      <View>
        <EndTab />
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return(
      <View style={styles.container}>
        <Text style={styles.headerText}>Team 100 Scouting</Text>
      </View>
      );
  }
}

class Scouting extends React.Component {
  render(){
    return(
      <Tabs style={styles.tabs}/>
    );
  }
}

const Tabs = TabNavigator({
  Init: { screen: InitScreen },
  Auto: { screen: AutoScreen },
  TeleOP: { screen: TeleOPScreen },
  End: { screen: EndScreen },
  }, {
  tabBarOptions:{
    labelStyle:{
      fontSize:16,
      padding:10
    },
    style:{
      backgroundColor:'#FF9900',
      height:75
    }  
  },
  }
);

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FF9900'
  },
  headerText:{
    color:'#FFFFFF',
    fontSize:25,
    padding:20
  }
});

AppRegistry.registerComponent('Scouting', () => Scouting);