<template>
  <div class="field-wrapper dropdown" :class="parentClasses" v-doc-click="hide">
    <label
      v-if="!compact"
      class="form-label" 
      :class="{show: selectedIndexes.length > 0 && label !== '&nbsp;'}" 
      >{{ label !== null ? label : '&nbsp;' }}</label>

    <button
      ref="button"
      :tabindex="searchField && isVisible ? -1 : 0" 
      type="button" 
      class="form-field dropdown-button"
      @keydown.down.prevent="nextOption"
      @keydown.up.prevent="previousOption"
      @keydown.enter.prevent="optionSelect(filteredList[selectorIndex].id)"
      @keyup.esc="hide"
      @click="toggleOptions($event)"
      @keydown.tab="hide"
      v-tabbed-in="show">
        {{ selectedText }}
    </button>

    <transition @enter="dropdownShown" name="ease-out">
      <div class="options-wrapper multiselect" v-show="isVisible">
        <input-field v-if="searchField"
          ref="searchField"
          type="text"
          placeholder="Search"
          class="fa-search"
          :value.sync="search"
          @keydown.down="nextOption"
          @keydown.up="previousOption"
          @keydown.enter="optionSelect(filteredList[selectorIndex].id)"
          @keyup.esc="hide"
          @keydown.tab="hide"
        ></input-field>
        <ul>
          <li 
            v-for="(option, index) in filteredList" 
            @click="optionSelect(option.id)" 
            :class="{clicked: value.indexOf(option.id) !== -1, selected: selectorIndex === index}" 
            :key="index">
              <span class="checkbox"></span>
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
      selectorIndex: 0
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
    searchField: false,
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
            text: option
          }
        })
      } else {
        res = _.map(this.options, (option) => {
          if (option instanceof Object) {
            return option
          } else {
            return {
              id: option,
              text: String(option)
            }
          }
        })
      }
      return res
    },

    // Calculate the list of all items currently shown
    filteredList () {
      // Reset the selector index
      this.selectorIndex = 0

      // Filter all options with the current search
      return this.processedOptions.filter(options => {
        return options.text.toLowerCase().includes(this.search.toLowerCase())
      })
    },

    // Calculate the index of the current element,
    // should be used to get the current selected item
    selectedIndexes () {
      return _.map(this.value, (value) => {
        return _.findIndex(this.processedOptions, {id: value})
      })
    },

    // Calculates the text that will be shown in the input
    selectedText () {
      if (this.selectedIndexes.length === 0) {
        return this.placeholder
      } else {
        if (this.selectedIndexes.length === 1) {
          return this.processedOptions[this.selectedIndexes[0]].text
        } else if (this.selectedIndexes.length === this.processedOptions.length) {
          return 'All ' + this.selectedLabel
        } else {
          return '(' + this.selectedIndexes.length + ') ' + this.selectedLabel
        }
      }
    },
    parentClasses: function () {
      return {
        disabled: this.disabled === 'disabled',
        valid: this.tag === 'valid',
        error: this.tag === 'error' || this.errorAvailable(),
        help: this.tag === 'help',
        compact: this.compact
      }
    }
  },
  methods: {
    // Show the options dropdown
    toggleOptions: function (event) {
      this.isVisible = !this.isVisible
    },

    // When an option is clicked
    optionSelect: function (index) {
      // Check if the option has been selected or unselected
      let newValue = this.value
      let foundIndex = _.indexOf(this.value, index)
      if (foundIndex > -1) {
        newValue.splice(foundIndex, 1)
      } else {
        newValue.push(index)
      }

      // Emit selected value to parent as an update to the 'value' prop
      this.$emit('update:value', newValue)

      // Validate the current value if any validation is present
      this.validateIfPresent(newValue)
    },

    // This is a callback that executes when the dropdown is shown
    dropdownShown: function () {
      if (this.isVisible && this.searchField) {
        this.$refs.searchField.focus()
      }
    },

    // Hide the options
    hide: function (event) {
      // If the target of the event comes from the button,
      // then stop the hide function, and let the button handle the logic
      // so the dropdown is not hidden and then shown again
      let buttonActive = event.relatedTarget === this.$refs.button
      if (!buttonActive) {
        this.isVisible = false
      }
    },

    // Show the options
    show: function (event) {
      // If the target of the event comes from the button,
      // then stop the show function, and let the button handle the logic
      // so the dropdown is not shown and hidden again
      if (event.type === 'keyup' || event.relatedTarget !== this.$refs.button) {
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
    getSelectedItems () {
      if (this.selectedIndexes.length > 0) {
        return _.filter(this.processedOptions, (o) => { _.indexOf(this.values, o.id) })
      } else {
        return null
      }
    }
  }
}
</script>
<style lang="scss">

</style>