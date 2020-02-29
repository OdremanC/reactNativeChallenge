import React from 'react'
import Slider from '../../components/slider/slider'
import Commons from '../../components/commons/commonsUI'
import InputComponent from '../../components/input/input'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class SliderMonth extends Commons {
  state = {
    month: 3,
  }

  /**
   * @description Metodo para obtener el valor del slider
   * @param { int } value
   * @returns { Promise<Void> }
   */
  getInputMonthValue = value => {
    // Alias de prop
    const { getMonth = () => {} } = this.props
    this.setState({ month: value })
    // Retornamos el valor
    getMonth(value)
  }

  /**
   * @description Metodo para obtener el valor del slider
   * @param { int } value
   * @returns { Promise<Void> }
   */
  getMonthValueSlider = value => {
    value = parseInt(value)
    // Alias de prop
    const { getMonth = () => {} } = this.props
    this.setState({ month: value })
    // Retornamos el valor
    getMonth(value)
  }

  render() {
    const { month } = this.state
    return (
      <View style={ styles.containerSlider }>
        <View style={ styles.inputAmount }>
          <Text style={ styles.amountTitle }>PLAZO</Text>
          <InputComponent
            value={ month.toString() }
            returnValue={month => this.getInputMonthValue(month)}
            readOnly={false}
            max={24}
            maxLength={2}
          />
        </View>
        <View style={ styles.sliderAmount }>
          <Slider
            value={ month }
            returnValueChanged={({ value }) => this.getMonthValueSlider(value)}
            min={3}
            max={24}
            markMin='3'
            markMax='24'
            type="mont"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerSlider:{
    width: 300,
    alignContent: 'center',
    marginTop:20
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