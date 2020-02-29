/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';

import SubmitButton from './components/button/submit'
import DetailButton from './components/button/detail'
// containers 
import SliderAmpount from './containers/sliderAmount/sliderAmount'
import SliderMonth from './containers/SliderMonth/sliderMonth'
import { intToCurrency,convertValue } from './utils/numbers'

export default class App extends React.Component {
  state = {
    month: 3,
    amount: null,
    total: 0,
    isOk: false,
    minAmount: 5000,
  }
   /**
   * @description Metodo para obtener el valor del input
   * @param { int } amount
   * @returns { Promise<Void> }
   */
  getValueAmount = async amount => {
    const newValue = amount.toString().slice(0, -2)
    console.log(amount)
    await this.setState({ amount: newValue })
    await this.getTotalAmount()
  }

  /**
   * @description Metodo para obtener el valor del input
   * @param { int } month
   * @returns { Promise<Void> }
   */
  getValueMoth = async month => {
    await this.setState({ month })
    await this.getTotalAmount()
  }

  /**
   * @description Metodo que obtiene el total
   * @returns { Promise<Void>}
   */
  getTotalAmount = () => {
    const { month, amount, minAmount } = this.state
    if (!month || !amount) {
      this.setState({ isOk: false })
      return false
    }

    if (amount >= minAmount) {
      const total = intToCurrency(parseInt(amount / month.toFixed(2)) * 100)
      this.setState({
        total,
        isOk: true,
      })
    }
    return true
  }

  getCredit = messaje => {
    Alert.alert(messaje)
  }

  render(){
    const { total, isOk } =  this.state
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={styles.app}>
            <View style={styles.container}>
              <Text style={styles.title}>Simulá tu crédito</Text>
              <View style={styles.amountSlider}>
                {/* Slider de monto*/ }
                <SliderAmpount getAmount={amount => this.getValueAmount(amount) }/>
                {/* Slider de monto*/ }
                <SliderMonth getMonth={ month => this.getValueMoth(month)}/>

                 {/* Seccion de total */}
                <View style={styles.totalAmount }>
                  <Text style={styles.totalText}>CUOTA FIJA POR MES </Text>
                  <Text style={styles.amount}>{`$${total}`}</Text>
                </View>
                {/* Seccion de botones */}
                <View style={ styles.buttonContainer }>
                  
                    <SubmitButton 
                      title="OBTENÉ CRÉDITO" 
                      disabled={!isOk} 
                      messaje="GetCredit()"
                      onClick={ messaje => this.getCredit(messaje)}
                    />

                    <DetailButton 
                      title="VER DETALLE DE CUOTAS" 
                      disabled={!isOk} 
                      messaje="credit details"
                      onClick={ messaje => this.getCredit(messaje)}
                    />                    
                  
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  app:{
    width: '100%',
    height: 500,
    backgroundColor: '#084B8A',
    alignContent: 'center',
    alignItems: 'center'
  },
  container:{
    marginTop: 30,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 5,
    width: '90%',
    height: '85%',
    backgroundColor:'#0B3861',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom:30
  },
  title:{
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
    marginTop: 20
  },
  totalAmount:{
    width: 300,
    height: 45,
    marginTop: 20,
    backgroundColor: '#0B243B',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  totalText:{
    color: '#fff',
    marginRight: 20
  },
  amount:{
    color: '#fff',
    fontSize:25,
    fontWeight: 'bold'
  },
  buttonContainer:{
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
