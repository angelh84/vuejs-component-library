import _ from 'lodash'

export default {
  inject: {
    $validator: { default: null }
  },
  props: {
    /**
     * The validation mode, can be 'active', 'pasive' or 'onBlur'.
     * active - validates the input everytime input is given
     * onBlur - only validates the input when the focus leaves the element
     * passive - doesn't validate the input, just adds it into the fields
     * list of the current validator instance. Validate method needs to
     * be called for validations to be loaded on the errorBag take effect
     * @type String
     */
    validationMode: {
      type: [String],
      default: 'active',
      required: false,
      validator: function (value) {
        return value === 'active' || value === 'passive' || value === 'onBlur'
      }
    },
    /**
     * The validations for this input, can be any of vee-validate rules
     * http://vee-validate.logaretm.com/validation.html#available-rules
     * @type String
     */
    validation: {
      type: [String],
      default: null
    },
    /**
     * This name will be used for displaying the errors
     * If it is missing, a lower_case version of the label will be used,
     * if the label is missing, the name will be used
     * @type String
     */
    validationAttr: {
      type: String,
      default: null
    }
  },
  methods: {
    // Check if there is any available error for
    // the currentinput if validation is viable
    errorAvailable: function () {
      return this.validationViable() && this.$validator.errors.has(this.name)
    },

    // This method validates the rules and puts
    // them in the validator bag if validation
    // is viable. This works as if you run it
    // with the v-validate directive
    validateIfPresent: function (value) {
      if (this.validationViable()) {
        this.$validator.validate(this.name, value)
      }
    },

    // For there to be validation we need a valid name
    // attribute and a valid validation attribute
    validationViable: function () {
      // Check if name is valid and there is a valid $validator instance
      if (this.$validator !== null &&
        this.name !== undefined &&
        this.name !== null &&
        this.name !== '') {
        // Check if field exists on the fields on the validator
        let fieldExists = this.$validator.fields.find({ name: this.name })

        // If the field exists on the validator instance or there is
        // a valid validation string on the field we can validate it
        return fieldExists ||
          (
            this.validation !== undefined &&
            this.validation !== null &&
            this.validation !== ''
          )
      }
      // If no name is set we can't validate the field
      return false
    },

    // This method can be overrided to add extra rules inherent
    // to the type of input, for example date_format for date inputs
    // USE ONLY STRING TYPE, NOT OBJECT
    extraRules: function () {
      return ''
    }
  },
  mounted: function () {
    if (this.validationViable()) {
      let allValidation = this.validation
      let extraRules = this.extraRules()
      if (extraRules !== '') {
        if (typeof allValidation === 'string') {
          allValidation = allValidation + '|' + extraRules
        }
      }

      // If the field is not found, then match it, otherwise don't overwrite
      if (!this.$validator.fields.find({ name: this.name })) {
        let alias = this.name
        // Check if the label is available to use, as the name can not always be considered optimal
        if (this.label !== undefined &&
            this.label !== null &&
            this.label !== '') {
          alias = _.lowerCase(this.label)
        }
        // Check if a custom validationAttr is set, this takes the top priority
        if (this.validationAttr !== undefined &&
            this.validationAttr !== null &&
            this.validationAttr !== '') {
          alias = this.validationAttr
        }
        this.$validator.attach({
          name: this.name,
          alias: alias,
          rules: allValidation,
          getter: () => {
            return this.value
          }
        })
      }
    }
  },
  destroyed: function () {
    if (this.validationViable()) {
      this.$validator.detach(this.name)
    }
  }
}
