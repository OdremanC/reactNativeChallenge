const convertValue = (value = 0) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  return formatter.format(value)
}

/**
 * @desc Convierte un valor flotante del precio de una tabla a numero real.
 * @example
 * (5555 => 55,55)
 */
const intToCurrency = integer => {
  return integer.toString().replace(/\D/g, "")
      .replace(/([0-9])([0-9]{2})$/, '$1.$2')
      .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ",");
}

exports.intToCurrency = intToCurrency
