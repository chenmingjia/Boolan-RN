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

import BoolanApp from './BoolanApp'


function setup(): ReactClass<{}> {
 
  class Root extends React.Component {
    state: {
    };

    constructor() {
      super();
    }
    render() {
      return (
         <BoolanApp></BoolanApp>
      );
    }
  }

  return Root;
}






module.exports = setup;
