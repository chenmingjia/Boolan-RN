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
  View
} from 'react-native';

import BoolanTabsView from './tabs/BoolanTabsView'

export default class BoolanApp extends  React.Component{

  render(){
    return(
      <BoolanTabsView></BoolanTabsView>
    );
  }
}

