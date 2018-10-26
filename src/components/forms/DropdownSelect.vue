<template>
  <div class="field-wrapper dropdown" :class="parentClasses" v-doc-click="hide">
    <label
      v-if="!compact"
      class="form-label" 
      :class="{show: selectedIndex > -1 && label !== '&nbsp;'}" 
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
      v-tabbed-in="show"
      @blur="!searchField && hide($event)">
        {{ selectedText }}
    </button>

    <transition @enter="dropdownShown" name="ease-out">
      <div class="options-wrapper" v-show="isVisible">
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
          @blur="hide($event)"
        ></input-field>
        <ul>
          <li 
            v-for="(option, index) in filteredList" 
            @click="optionSelect(option.id)" 
            :class="{clicked: value === option.id, selected: selectorIndex === index}" 
            :key="index">
              {{ option.text }}
          </li> 
        </ul>
      </div>
    </transition>
    <template v-if="!compact">
      <span v-if="!errorAvailable()" class="field-description italic" :class="{hide: isVisible}">{{ description !== null ? description : '&nbsp;' }}</span>
      <span v-else class="field-description italic">{{ errors.first(name) }}</span>
    </template>
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
    name: '',
    searchField: false,
    /**
     * The value that the input must have
     * CAN USE SYNC
     * @type {String, Number}
     */
    value: {
      type: [String, Number],
      default: -1
    },
    fieldClass: '',
    attribute: '',
    description: {
      default: null
    },
    tag: '',
    disabled: '',

    /**
     * The options array/object, it can be an Array of Number, String
     * or it can be an array of Objects containing text and id as attributes.
     * Alternatively it can be an object that defines all the options as
     * attributes and values, the attribute name will be used for the id and
     * the attribute value will be used for the text
     * @type {Array, Object}
     */
    options: {
      required: true,
      type: [Array, Object],
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
      return this.processedOptions.filter(searchField => {
        return searchField.text.toLowerCase().includes(this.search.toLowerCase())
      })
    },

    // Calculate the index of the current element,
    // should be used to get the current selected item
    selectedIndex () {
      return _.findIndex(this.processedOptions, {id: this.value})
    },

    // Calculates the text that will be shown in the input
    selectedText () {
      return this.selectedIndex === -1 ? this.placeholder : this.processedOptions[this.selectedIndex].text
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
      // Hide options
      this.isVisible = false

      // Reset search
      this.search = ''

      // Emit selected value to parent as an update to the 'value' prop
      this.$emit('update:value', index)

      // Validate the current value if any validation is present
      this.validateIfPresent(index)
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
      let buttonActive = event.relatedTarget === this.$refs.button
      if (!buttonActive) {
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
    getSelectedItem () {
      if (this.selectedIndex > -1) {
        return this.processedOptions[this.selectedIndex]
      } else {
        return null
      }
    }
  }
}
</script>
<style lang="scss">

</style>