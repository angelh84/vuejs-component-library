import Vue from 'vue'
import VeeValidate from 'vee-validate'

// Custom Rules
import arrayMin from '@/validation/array_min.js'

// Add custom rules
VeeValidate.Validator.extend('array_min', arrayMin)

// Initialize VeeValidate
Vue.use(VeeValidate, { inject: false })

export default VeeValidate
