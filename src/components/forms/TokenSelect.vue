<template>
  <div class="field-wrapper dropdown token-field" :class="parentClasses" v-doc-click="hide">
    <label
      v-if="!compact"
      class="form-label" 
      :class="{show: selectedIndexes.length > 0 && label !== '&nbsp;'}" 
      >{{ label !== null ? label : '&nbsp;' }}</label>
    <div
      ref="button"
      class="form-field dropdown-button"
      :class="{'token-active': value.length > 0}"
      @click="toggleOptions($event)">
        <div
          v-for="(token, index) in selectedItems"
          :key="index"
          class="token">
          {{ token.text }}
           <button class="token-remove" tabindex="-1" @click.stop="removeToken(token)">x</button>
        </div>
        <input-field
          ref="searchField"
          class="token-search"
          type="text"
          :value.sync="search"
          @keydown.down="nextOption"
          @keydown.up="previousOption"
          @keydown.enter="optionSelect(filteredList[selectorIndex])"
          @keyup.esc="hide"
          @keydown.tab="hide"
          v-tabbed-in="show"
          @input="show"
        ></input-field>

    </div>

    <transition @enter="dropdownShown" name="ease-out">
      <div class="options-wrapper multiselect" v-show="isVisible">
        <ul>
          <li 
            v-for="(option, index) in filteredList" 
            @click="optionSelect(option)" 
            :class="{clicked: value.indexOf(option.id) !== -1, selected: selectorIndex === index}" 
            :key="index">
              {{ option.text }}
          </li> 
        </ul>
      </div>
    </transition>
    <span v-if="!errorAvailable()" class="field-description italic">{{ description !== null ? description : '&nbsp;' }}</span>
    <span v-else class="field-description italic">{{ errors.first(name) }}</span>
  </div>
</template>

<script>
import InputField from '@/components/forms/InputField'
import DocClick from '@/directives/docClick'
import TabbedIn from '@/directives/tabbedIn'
import validationBase from '@/mixins/validationBase.js'
import _ from 'lodash'

export default {
  data: function () {
    return {
      isVisible: false,
      search: '',
      selectorIndex: 0,
      generatedTokens: []
    }
  },
  mixins: [
    validationBase
  ],
  components: {
    InputField,
    DocClick
  },
  directives: {
    DocClick: DocClick,
    TabbedIn: TabbedIn
  },
  props: {
    id: '',
    placeholder: '',
    label: {
      default: null
    },
    selectedLabel: {
      default: 'Options Selected'
    },
    name: '',
    /**
     * The values that the input must have
     * CAN USE SYNC
     * @type Array
     */
    value: {
      type: Array,
      default: function () {
        return []
      }
    },
    fieldClass: '',
    attribute: '',
    description: {
      default: null
    },
    tag: '',
    disabled: '',
    /**
     * The options array, it can be an Array of Number, String
     * or it can be an array of Objects containing text and id as attributes
     * @type {Array}
     */
    options: {
      required: true,
      type: Array,
      default: function () {
        return []
      }
    },
    compact: {
      required: false,
      type: Boolean,
      default: false
    },
    validation: {
      type: [String],
      default: null
    },
    tagging: {
      type: Boolean,
      default: false
    },
    createTag: {
      type: Function,
      default: function (value) {
        return value
      }
    },
    tokenSeparators: {
      type: Array,
      default: function () {
        return [',']
      }
    }
  },
  computed: {
    // Process the options Array to standarize it
    processedOptions () {
      let res = []
      if (!(this.options instanceof Array)) {
        res = _.map(this.options, (option, index) => {
          return {
            id: index,
            text: option,
            generated: false
          }
        })
      } else {
        res = _.map(this.options, (option) => {
          if (option instanceof Object) {
            return {
              id: option.id,
              text: option.text,
              generated: false
            }
          } else {
            return {
              id: option,
              text: String(option),
              generated: false
            }
          }
        })
      }
      return _.concat(this.generatedTokens, res)
    },

    // Calculate the list of all items currently shown, this gets updated once:
    // search changes
    // processedOptions changes
    filteredList () {
      // Reset the selector index
      this.selectorIndex = 0

      // Filter all options with the current search
      let filteredList = this.processedOptions.filter(options => {
        return options.text.toLowerCase().includes(this.search.toLowerCase())
      })

      // Check if the search field has any text and if tagging is enabled and if the search is not an existing token
      if (this.tagging && this.search !== '' && _.findIndex(this.processedOptions, (o) => o.text.toLowerCase() === this.search.toLowerCase()) === -1) {
        let lastLetter = this.search.slice(-1)
        // If any of the token separators has been written
        if (_.some(this.tokenSeparators, (o) => o === lastLetter)) {
          // Then inmediately add it to the current selected tokens
          let newElement = {
            id: this.search.slice(0, -1),
            text: this.search.slice(0, -1),
            generated: true
          }
          this.addToken(newElement)
        } else {
          // Otherwise add the option to the list of shown results
          let newElement = {
            id: this.search,
            text: this.search,
            generated: true
          }
          filteredList.push(newElement)
        }
      }
      return filteredList
    },

    // Calculate the index of the current element,
    // should be used to get the current selected item
    selectedIndexes () {
      return _.map(this.value, (value) => {
        return _.findIndex(this.processedOptions, {id: value})
      })
    },

    parentClasses: function () {
      return {
        disabled: this.disabled === 'disabled',
        valid: this.tag === 'valid',
        error: this.tag === 'error' || this.errorAvailable(),
        help: this.tag === 'help',
        compact: this.compact
      }
    },

    selectedItems: function () {
      return _.filter(this.processedOptions, (o) => {
        return _.indexOf(this.value, o.id) > -1
      })
    }
  },
  methods: {
    // Show the options dropdown
    toggleOptions: function (event) {
      this.isVisible = !this.isVisible
    },

    // When an option is clicked
    optionSelect: function (option) {
      // Check if the option has been selected or unselected
      let foundIndex = _.indexOf(this.value, option.id)
      if (foundIndex > -1) {
        this.removeToken(option)
      } else {
        this.addToken(option)
      }
    },

    // This is a callback that executes when the dropdown is shown
    dropdownShown: function () {
      if (this.isVisible) {
        this.$refs.searchField.focus()
      }
    },

    // Hide the options
    hide: function (event) {
      this.isVisible = false
    },

    // Show the options
    show: function (event) {
      if (event.type === 'keyup' || event.type === 'input') {
        this.isVisible = true
      }
    },

    // Select the previous option
    previousOption: function () {
      if (this.selectorIndex > 0) {
        this.selectorIndex--
      }

      // Set the dropdown as visible, as the user may
      // want to quickly change the selected option
      this.isVisible = true
    },

    // Select the next option
    nextOption: function () {
      if (this.selectorIndex < this.filteredList.length - 1) {
        this.selectorIndex++
      }

      // Set the dropdown as visible, as the user may
      // want to quickly change the selected option
      this.isVisible = true
    },

    // Get the selected item, can be used from the parent
    getSelectedItems: function () {
      if (this.selectedIndexes.length > 0) {
        return _.filter(this.processedOptions, (o) => { _.indexOf(this.value, o.id) })
      } else {
        return null
      }
    },

    addToken: function (token) {
      let newValue = this.value
      // If the selected option is generated, then push it to the generated tokens array
      // run the createTag function to create the desired user output
      if (token.generated === true) {
        this.generatedTokens.push(token)
        newValue.push(this.createTag(token.text))
      } else {
        newValue.push(token.id)
      }
      this.search = ''

      // Emit selected value to parent as an update to the 'value' prop
      this.$emit('update:value', newValue)

      // Validate the current value if any validation is present
      this.validateIfPresent(newValue)
    },

    removeToken: function (token) {
      let newValue = this.value
      let foundIndex = _.indexOf(this.value, token.id)
      newValue.splice(foundIndex, 1)
      if (token.generated === true) {
        let genIndex = _.findIndex(this.generatedTokens, (o) => o.id === token.id)
        this.generatedTokens.splice(genIndex, 1)
      }

      // Emit selected value to parent as an update to the 'value' prop
      this.$emit('update:value', newValue)

      // Validate the current value if any validation is present
      this.validateIfPresent(newValue)
    }
  }
}
</script>

<style lang="scss">
  .token-field {
    .form-field.token-active {
      height: auto;
    }
    
    .token-search {
      display: inline-block;

      .form-label,
      .field-description {
        display: none;
      }

      .form-field {
        background-color: transparent;
        border: 0;

        &:focus {
          border: 0;
        }
      }
    }
  }

  .token {
    display: inline-block;
    border-radius: 15px;
    height: 32px;
    background-color: $neutral-40;
    padding-right: 7px;
    padding-left: 10px;
    margin-bottom: 5px;
    margin-left: 5px;
    color: #48494c;
    transition: all 0.25s;

    &:hover {
      color: #fff;
      cursor: default;
      background-color: $primary-purple;
    }
  }

  .token-remove {
    display: inline-block;
    padding: 0 5px;
    color: #bfc2ca;

    &:hover {
      color: #ffffff;
    }
  }
</style>