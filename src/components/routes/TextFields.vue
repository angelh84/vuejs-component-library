<template>
  <div class="wrapper text-fields-content">
    <h1>TEXT FIELDS</h1>
    <span class="headline-divider"></span>
    <p>Use text input in forms to help people enter, select, and search for text. Common text input types include:</p>
    <ul>
      <li>Text: Usernames, descriptions, URLs.</li>
      <li>Number: Phone numbers, credit card numbers.</li>
      <li>Mixed format: Email addresses, street addresses, searches.</li>
    </ul>
    
    <h2>Basic Inputs</h2>
    <p>These text fields utilize material design principles including floating labels and contextual messaging. All field labels should be sentence case and float above the input field.</p>

    <div class="text-fields-left-column">
      <div class="padding">
        <input-field :value.sync="input0" type="text" placeholder="Text field w/ no label"></input-field>
        <input-field :value.sync="input1" type="password" id="" fieldClass="" placeholder="Password field w/ label" label="Password field" name="" tag="" attribute=""></input-field>
        <input-field :value.sync="input2" placeholder="Field with description" label="Field with description" description="some decription"></input-field>
        <input-field :value.sync="input3" tag="error" placeholder="Invalid field" label="Invalid field"></input-field>
        <input-field :value.sync="input4" tag="valid" placeholder="Valid field" label="Valid field"></input-field>
        <input-field :value.sync="input5" tag="help" placeholder="Help field"></input-field>
        <input-field :value.sync="input6" class="fa-dollar" placeholder="Text field w/ icon" label="Text field w/ icon"></input-field>
        <input-field :value.sync="input7" class="fa-rocket icon-right" placeholder="Text field w/ right icon" label="Text field w/ right icon"></input-field>
      </div>
    </div>
    <div class="text-fields-right-column">
      <div class="padding">
        <input-field :value.sync="input8" placeholder="Field w/ prefix" label="Field w/ prefix"><span class="prefix">www.</span></input-field>
        <input-field :value.sync="input9" placeholder="Field w/ right suffix" label="Field w/ right suffix"><span class="suffix">.com</span></input-field>
        <input-field :value.sync="input10" placeholder="Field w/ button" label="Field w/ button"><button class="btn-standard">Apply</button></input-field>
        <input-field :value.sync="input11" placeholder="Field w/ right button" label="Field w/ right button"><button class="btn-standard right">Apply</button></input-field>
        <input-field :value="input12" placeholder="Disabled field" disabled="disabled"></input-field>
        <textarea-field :value="input13" type="textarea" placeholder="Text Area" label="Text Area" textareaClass=""></textarea-field>
      </div>
    </div>
  </div>
</template>

<script>
import InputField from '@/components/forms/InputField'
import TextareaField from '@/components/forms/TextareaField'

export default {
  data () {
    return {
      input0: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      input8: '',
      input9: '',
      input10: '',
      input11: '',
      input12: 'This value can\'t be edited',
      input13: ''
    }
  },
  components: {
    InputField,
    TextareaField
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @media (min-width: 968px) {
    .text-fields-left-column {
      @include column(50%)
      .padding{
        padding-right: 20px;
      }
    }
    .text-fields-right-column {
      @include column(50%)
      .padding{
        padding-left: 20px;
      }
    }
  }
</style>
