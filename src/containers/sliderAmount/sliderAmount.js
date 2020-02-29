import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Slider from '../../components/slider/slider'
import Currency from '../../components/currency/currency'
import Commons from '../../components/commons/commonsUI'
import { intToCurrency } from '../../utils/numbers'

export default class SliderAmount extends Commons {
  state = {
    inputAmount: {
      value: 0,
      maskValue: '0,00',
    },
  }

  /**
   * @description Metodo para obtener el valor del slider
   * @param { object } inputAmount
   * @returns { Promise<Void>}
   */
  getValueSlider = inputAmount => {
    // Alias
    const { getAmount = () => {} } = this.props
    // new Value
    const newValue = parseInt(inputAmount.value, 0) * 100;

    this.setState({
      inputAmount: {
        value: newValue,
        maskValue: intToCurrency(newValue),
      },
    })
    // Devolvemos el valor al container principal
    getAmount(newValue)
  }

  /**
   * @description Metodo para obtener el valor del oinput
   * @param { int } amount
   * @returns { void }
   */
  getInputAmountValue = amount => {
    // Alias
    const { getAmount = () => {} } = this.props
    this.setState({
      inputAmount: {
        value: amount ? amount : 500000,
        maskValue: intToCurrency(amount),
      },
    })
    // Devolvemos el valor al container principal
    getAmount(amount)
  }

  render() {
    const { inputAmount } = this.state

    return (
      <View style={ styles.containerSlider }>
        <View style={ styles.inputAmount }>
          <Text style={ styles.amountTitle }>MONTO TOTAL</Text>
          <Currency
            value={inputAmount.value}
            maskValue={inputAmount.maskValue}
            returnValue={value => this.getInputAmountValue(value)}
            readOnly={false}
            max={5000000}
            type="amount"
          />
        </View>
        <View style={ styles.sliderAmount }>
          <Slider 
            value={inputAmount.value}
            returnValueChanged={ value => this.getValueSlider(value)}
            max={50000}
            min={5000}
            markMin='$5.000'
            markMax='$50.000'
            type="amount"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerSlider:{
    width: 300,
    alignContent: 'center'
  },
  inputAmount:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center'
  },
  amountTitle:{
    color: '#fff',
    fontSize:10
  },
  sliderAmount:{

  }
})