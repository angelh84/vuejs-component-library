export default {
  getMessage (field, args) {
    return `The ${field} field may not be smaller than ${args[0]} characters`
  },
  validate (value, args) {
    return value.length >= args[0]
  }
}
