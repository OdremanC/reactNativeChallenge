import React from 'react'
import {
  TouchableOpacity,
  Button,
  Text,
  Alert,
  StyleSheet
} from 'react-native'
import Commons from '../commons/commonsUI'

/**
 * Metodo para generar botones
 * @param  { Object } props
 * @return { React-Component}
 */
export default class DetailButton extends Commons {
  render() {
    try {
      const {  title, onClick, disabled,  messaje } = this.props
      return (
        <TouchableOpacity  style={styles.submit} onPress={ () => onClick(messaje)} disabled={ disabled }>
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
      )
    } catch (e) {
      // Lanzamos el mensaje de error
      console.error(e.stack)
      return null
    }
  }
}

const styles = StyleSheet.create({
  submit:{
    backgroundColor: '#0174DF',
    width: 110,
    height: 40,
    marginRight: 10,
    justifyContent: 'center',
    alignItems:'center',
    alignContent: 'center',
    
  },
  text:{
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight:'bold',
    fontSize: 12,
    textAlign:'center'
  }

})