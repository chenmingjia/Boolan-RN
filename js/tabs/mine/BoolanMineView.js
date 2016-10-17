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
  TabBarIOS,
  Image,
    Dimensions,
} from 'react-native';

var { width, height } = Dimensions.get('window');

export default class BoolanMineView extends React.Component{

    render() {
        return (
            <View style={[styles.tabContent, {backgroundColor: '#f4f4f4'}]}>
                <View>
                <Image
                    style={styles.boolanImg}
                    source={require('./img/Boolan.png')}
                />
                </View>

            </View>

        )
    }
}


var styles = StyleSheet.create({
  tabContent: {

  }, boolanImg: {
      width:width,
        height:260*width/640,
        resizeMode: Image.resizeMode.contain,
  },
});