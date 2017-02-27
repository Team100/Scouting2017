/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import BeginScene from './BeginScene';

export default class StandScouting extends Component {
  render() {
  return (
    <Navigator
      initialRoute={{ title: 'Initial Scene', index: 0}}
      renderScene={(route, navigator) =>
      <BeginScene
        title={route.title}

        onForward={() => {
          const nextIndex = route.index + 1;
          navigator.push({
            title: 'Scene ' + nextIndex,
            index: nextIndex,
          });
        }}

        onBack={() => {
          if (route.index> 0) {
            navigator.pop();
          }
        }}
        />
      }
      />
    )
  }
}


AppRegistry.registerComponent('StandScouting', () => StandScouting);
