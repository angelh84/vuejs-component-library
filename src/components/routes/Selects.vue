<template>
  <div class="wrapper select-content">
    <h1>Selects, Radios, Checks &amp; Toggles</h1>
    <span class="headline-divider"></span>

    <h2>Drop Menu Selects (Single &amp; Search)</h2>
    <p>Drop menu selects give the user the ability to select a single item or multiple from a list of predefined options.  When the user enters text into the search field, the items in the drop menu are filtered</p>

    <div class="dropdown-wrapper clearfix">
      <div class="column width-50">
        <div class="padding-right-15">
          <dropdown-select :value.sync="dropdown1" :options="dropdownOptions" placeholder="Standard Select Field" name="selectName" fieldClass="field-class" description="testing description"></dropdown-select>
        </div>
      </div>
      <div class="column width-50">
        <div class="padding-left-15">
          <dropdown-select :value.sync="dropdown2" :options="dropdownOptions" placeholder="Select Field W/ Search & Label" name="selectName2" label="Select Label" searchField="true"></dropdown-select>
        </div>
      </div>
    </div>
    
    <h2>Form Multiselects</h2>
    <div class="dropdown-wrapper clearfix">
      <div class="column width-50">
        <div class="padding-right-15">
          <dropdown-multiselect :value.sync="multiselect1" :options="dropdownOptions" placeholder="Standard Select Field" name="multiselectName" fieldClass="field-class"></dropdown-multiselect>  
        </div>
      </div>
      <div class="column width-50">
        <div class="padding-left-15">
          <dropdown-multiselect :value.sync="multiselect2" :options="dropdownOptions" placeholder="Select Field W/ Search & Label" name="multiselectName" label="Multiselect Label" fieldClass="field-class" searchField="true"></dropdown-multiselect>
        </div>
      </div>
    </div>

    <h2>Pill Style Multi-Select</h2>
    <p>Pill style multi-selects allow the user to view, cancel or add multiple options from a predetermined list OR via direct text input. This is commonly used for fields such as tags or categories where the options are determined by the user. The options are displayed as the user types in the text field.</p>
    <token-select :value.sync="tokenselect" :options="dropdownOptions" :tagging="true" name="selectTokenName" fieldClass="field-class"></token-select>

    <h2>Form Radios, Checkboxes &amp; Toggles</h2>

    <div class="button-form-wrapper">
      <p class="checkbox-group-label">Horizontal Checkbox Headline</p>
      <checkbox-button :value.sync="checkbox1" name="myCheckbox" label="First Checkbox"></checkbox-button>
      <checkbox-button  :value.sync="checkbox2" name="myCheckbox" label="Pre-Checked Box" checked="true"></checkbox-button>
      <checkbox-button  :value.sync="checkbox4" name="myCheckbox" label="Fourth Checkbox"></checkbox-button>
      <checkbox-button  :value.sync="checkbox3" name="myCheckbox" label="Checkbox Right Position" position="right"></checkbox-button>
    </div>

    <div class="button-form-wrapper">
      <p class="checkbox-group-label">Horizontal Radio Buttons Headline</p>
      <radio-button :value.sync="radio1" selected-value="1" id="firstRadio" name="myRadio" label="First Radio"></radio-button>
      <radio-button :value.sync="radio1" selected-value="2" id="secondRadio" name="myRadio" label="Pre-Checked Radio"></radio-button>
      <radio-button :value.sync="radio1" selected-value="3" id="thirdRadio" name="myRadio" label="Radio Right"></radio-button>
      <radio-button :value.sync="radio1" selected-value="4" id="fourthRadio" name="myRadio" label="Fourth Radio"></radio-button>
    </div>

    <div class="button-form-wrapper">
      <p class="toggle-group-label">Toggle Button Headline</p>
      <toggle-button :value.sync="toggle1" id="smallToggle" name="mySmallToggle" label="Toggle"></toggle-button>
      <toggle-button :value.sync="toggle2" id="largeToggle" name="myLargeToggle" label="Large Toggle" class="large"></toggle-button>
      <toggle-button :value.sync="toggle3" id="smallToggleRight" name="mySmallToggleRight" label="Toggle Right" position="right"></toggle-button>
      <toggle-button :value.sync="toggle4" id="largeToggleRight" name="myLargeToggleRight" label="Toggle Right Large" position="right" class="large"></toggle-button>
    </div>
  </div>
</template>

<script>
import ToggleButton from '@/components/forms/ToggleButton'
import RadioButton from '@/components/forms/RadioButton'
import CheckboxButton from '@/components/forms/CheckboxButton'
import DropdownSelect from '@/components/forms/DropdownSelect'
import TokenSelect from '@/components/forms/TokenSelect'
import DropdownMultiselect from '@/components/forms/DropdownMultiselect'

export default {
  components: {
    ToggleButton,
    RadioButton,
    CheckboxButton,
    DropdownSelect,
    DropdownMultiselect,
    TokenSelect
  },
  data () {
    return {
      selected: false,
      checkbox1: false,
      checkbox2: true,
      checkbox3: false,
      checkbox4: false,
      toggle1: false,
      toggle2: false,
      toggle3: false,
      toggle4: false,
      radio1: 2,
      dropdown1: 0,
      dropdown2: 0,
      multiselect1: [],
      multiselect2: [1, 2],
      tokenselect: [],
      dropdownOptions: [
        {
          id: 1,
          text: 'Car'
        },
        {
          id: 2,
          text: 'Car Box'
        },
        {
          id: 3,
          text: 'Box'
        },
        {
          id: 4,
          text: 'Grand'
        },
        {
          id: 5,
          text: 'Car Box Grand'
        },
        {
          id: 6,
          text: 'Match Box'
        },
        {
          id: 7,
          text: 'Grand Match'
        },
        {
          id: 8,
          text: 'Grand Prix'
        },
        {
          id: 9,
          text: 'Prix Car'
        },
        {
          id: 10,
          text: 'Grant Prix Match Car Box'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .dropdown-wrapper {
    margin-top: -25px;
  }

  .button-form-wrapper {
    width: 200px;
    float: left;
    margin-right: 25px;
    margin-bottom: 15px;
  }

  .checkbox-group-label,
  .toggle-group-label {
    margin-top: 15px;
    margin-bottom: 10px;
  }

  .field-wrapper {
    margin-bottom: 10px;
  }
</style>
