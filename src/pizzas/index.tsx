import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { PizzaList, StateType } from '../interface/pizzas';

class Pizzas extends Component<PizzaList, StateType> {
  constructor(props: PizzaList) {
    super(props);
    this.state = {
      pizza: 1,
    };
  }

  render() {
    const selectedPizza = this.props.pizzas.find(pizza => pizza.id === this.state.pizza);

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Menu de Pizzas</Text>
        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(itemValue, itemIndex) => this.setState({ pizza: itemValue })}
        >
          {this.props.pizzas.map((pizza) => (
            <Picker.Item key={pizza.id} label={pizza.nome} value={pizza.id} />
          ))}
        </Picker>

        <Text style={styles.pizzas}>Você escolheu: {selectedPizza?.nome}</Text>
        <Text style={styles.pizzas}>R$ {selectedPizza?.valor.toFixed(2)} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  pizzas: {
    marginTop: 15,
    fontSize: 26,
    textAlign: 'center',
  },
});

export default Pizzas;
