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
} from 'react-native';

import BoolanMineView from './mine/BoolanMineView'



export default class BoolanTabsView extends React.Component{

  static title = '<TabBarIOS>';
  static description = 'Tab-based navigation.';
  static displayName = 'TabBarExample';

  state = {
    selectedTab: 'redTab',
    notifCount: 0,
    presses: 0,
  };

  _renderContent = (color: string, pageText: string, num: number) => {
  return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
      <Text style={styles.tabText}>{pageText}</Text>
      <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
   );
  };

  render() {
    return (
        <TabBarIOS
            unselectedTintColor="#999999"
            tintColor="#2abaff"
            barTintColor="#ffffff">
          <TabBarIOS.Item
              title="课程"
              icon={require('./img/课程grow.png')}
              selectedIcon={require('./img/课程blue.png')}
              selected={this.state.selectedTab === 'blueTab'}
              onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}>
            {this._renderContent('#414A8C', 'Blue Tab')}
          </TabBarIOS.Item>
          <TabBarIOS.Item
              title="会议"
              icon={require('./img/大会grow.png')}
              selectedIcon={require('./img/大会grow.png')}
              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
            this.setState({
              selectedTab: 'redTab',
              notifCount: this.state.notifCount + 1,
            });
          }}>
            {this._renderContent('#783E33', 'Red Tab', this.state.notifCount)}
          </TabBarIOS.Item>
          <TabBarIOS.Item
              icon={require('./img/我grow.png')}
              selectedIcon={require('./img/我blue.png')}
              renderAsOriginal
              title="我的"
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
              presses: this.state.presses + 1
            });
          }}>
            <BoolanMineView></BoolanMineView>
          </TabBarIOS.Item>
        </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});