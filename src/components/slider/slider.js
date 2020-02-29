import React from 'react'
import Slider from 'react-native-slider'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Commons from '../commons/commonsUI'
import { intToCurrency } from '../../utils/numbers'

export default class SliderComponent extends Commons {
  state = {
    value: this.props.value ? this.props.value : 5000,
    min: this.props.min ? this.props.min : 3,
    max: this.props.max ? this.props.max : 24,
  }

  /**
   * @description Metodo que detecta el cambio en la slider
   * @param { INT } value
   * @returns { Promise<Void> }
   */
  onSliderChange = async value => {
    const { returnValueChanged = ()=>{} } = this.props
    await this.setStateAsync({ value })

    returnValueChanged({
      value,
      maskValue: intToCurrency(value),
    })
  }

  /**
   * @description Metodo nativo de react
   * @param {*} prevProps
   */
  componentDidUpdate(prevProps) {
    const { min } = this.state
    
    if (prevProps !== this.props) {
      
      if (this.props.value >= min) {
        // se aplica ya que el valor al venir del currency component viene con 2 ceros demas por los decimales
        const newValue = this.props.type ==='amount' ? parseInt(this.props.value.toString().slice(0, -2),0) : this.props.value
        
        this.setState({
          value: newValue > 0 ? newValue : min,
          maskValue: this.props.maskValue ? this.props.maskValue : this.state.maskValue,
        })
      }
    }
  }

  render() {
    const { min, max, value } = this.state
    const { markMin = 0, markMax = 0 } = this.props
    return (
      <View style={styles.container}>
        <Slider
          value={value}
          onValueChange={value => this.onSliderChange(value)}
          minimumValue={min}
          maximumValue={max}
          style={styles.slider}
          minimumTrackTintColor="#fff"
          maximumTrackTintColor="#fff"
          thumbTintColor="#fff"
        />
        <View style={styles.amounts}>
          <Text style={styles.min}>{ markMin }</Text>
          <Text style={styles.max}>{ markMax }</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  amounts:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container:{
    width: '100%',
    color: '#ffffff',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center'
  },
  slider:{
    color: '#fff'
  },
  min:{
    color: '#fff'
  },
  max:{
    color: '#fff'
  }
})