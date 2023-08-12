import React, { Component } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Pizzas from './src/pizzas';
import { pizzasData } from './src/interface/pizzas';

interface StateType {
  pizza: number;
}


export default class App extends Component<{}, StateType>{
  constructor(props: {}) {
    super(props)
    this.state = {
      pizza: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <Pizzas pizzas={pizzasData} />
    </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  }
});
