import React from 'react'
import Commons from '../commons/commonsUI'
import { intToCurrency } from '../../utils/numbers'
import {
  View,
  TextInput, 
  StyleSheet
} from 'react-native'

export default class InputComponent extends Commons {
  state = {
    value: typeof this.props.value === 'number' ? this.props.value : 0,
    maskValue: this.props.maskValue ? this.props.maskValue : '0,00',
    readOnly: typeof this.props.readOnly === 'boolean' ? this.props.readOnly : false,
    max: this.props.max ? this.props.max : 5000000,
  }

  /**
   * @description metodo nativo de react para la actualizaciones de las props
   * @param {*} prevProps
   */
  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      const { value } = this.props
      this.setState({
        value,
        maskValue: intToCurrency(value),
      })
    }
  }

  /**
   * @description Metodo para obtener el valor del input
   * @param { Event } e
   * @returns { Void }
   */
  handleOnChange = ( value = '' ) => {
    
    let { maskValue = '' } = this.state
    const { max } = this.state
    const { returnValue = () => {} } = this.props
    // sacamos los puntos y comas
    const newValue = parseInt(value.toString().replace(/\.|,/g, ''), 0)
    
    // Actualizamos el maskValue
    maskValue = intToCurrency(newValue)
    
   
    // Validamos que el nuevo valor sea menor o igual al maximo permitido
    if (newValue <= max) {
      returnValue(newValue)
      this.setState({ value: newValue, maskValue })
    }
  }

  /**
   * @description Metodo que se ejecuta al hacer focus en el campo
   */
  handleOnFocus = () => {
    this.setState({ maskValue: '' })
  }

  render() {
    // Alias del state
    const { maskValue, readOnly } = this.state
    
    return (
      <View>
        <TextInput
          value={maskValue}
          keyboardType='numeric'
          onChangeText={value => this.handleOnChange(value)}
          onFocus={ () => this.handleOnFocus() }
          maxLength = { 25 }
          style={ styles.input }
          readOnly={ readOnly}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input:{
    borderWidth: 0.5,
    width:100,
    height: 40,
    textAlign:'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    borderColor: '#fff'
  }
})