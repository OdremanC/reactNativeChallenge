import React from 'react'
import Commons from '../commons/commonsUI'
import {
  View,
  TextInput, 
  StyleSheet
} from 'react-native'

export default class Input extends Commons {
  state = {
    value: this.props.value ? this.props.value : '3',
    maxLength: this.props.maxLength ? this.props.maxLength : 10,
    max: this.props.max ? this.props.max : 24,
  }

    /**
   * @description Metodo nativo de react
   * @param {*} prevProps
   */
  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      let { value } = this.props
      this.setState({ value })
    }
  }
  
  /**
   * @description Metodo para obtener el valor
   * @param { Event } e
   * @returns { Void }
   */
  handleOnChange = (value) => {
    
    // obtenemos el state
    const { max } = this.state
    const { returnValue = () => {} } = this.props
    
    // obtenemos solo numeros
    value = value ? parseInt(value.toString().replace(/\D+/, ''), 0) : 0

    if (value <= max) {        
      this.setState({ value })
      // retornamos el valor
      returnValue(value)
    }    
  }

  render() {
    const { value, maxLength } = this.state
    
    return (
      <View>
        <TextInput
          value={ value }
          onChangeText={value => this.handleOnChange(value)}
          maxLength={maxLength}
          keyboardType='numeric'
          style={ styles.input }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input:{
    width:100,
    height: 40,
    textAlign:'center',
    borderWidth: 0.5,
    color: '#fff',
    borderColor: '#fff'
  }
})