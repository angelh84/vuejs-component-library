<template>
  <div>
    <h2>Validation Forms</h2>
    <router-link to="/">Go Back Home</router-link>
    <ul>
      <li>
        <span>
          <radio-button
            :value.sync="validationMode"
            selected-value="active"
            label="Active (The input will be validated once the user types anything)"
          ></radio-button>
        </span>
        <span>
          <radio-button
            :value.sync="validationMode"
            selected-value="onBlur"
            label="On Blur (The input will be validated only once the input losses focus)"
          ></radio-button>
        </span>
        <span>
          <radio-button
            :value.sync="validationMode"
            selected-value="passive"
            label="Passive (The input wont be validated actively in any way. Must be used in conjunction with a 'validate' method, like the button below)"
          ></radio-button>
        </span>
      </li>
    </ul>
    <validation-form ref="form1">
      <div class="wrapper" slot-scope="{ formErrors, formFields }">
      
        <h2>Form 1</h2>
        <ul class="row">
          <li class="col-2">
            <input-field
              :value.sync="newPublication.name"
              type="text"
              name="name"
              description="Your first name"
              placeholder="Your name"
              validation="required|alpha"
              label="Name"
              :validation-mode="validationMode"
              validation-attr="Weird Name"
            ></input-field>
          </li>
          <li class="col-2">
            <input-field
              :value.sync="newPublication.username"
              type="text"
              name="username"
              description="Your alias"
              placeholder="Your username"
              label="Username"
              validation="required|alpha_num|min:5|max:20"
              :validation-mode="validationMode"
            ></input-field>
          </li>
          <li class="col-2">
            <input-field
              :value.sync="newPublication.email"
              type="text"
              name="email"
              description="Your email"
              placeholder="Your email"
              label="Email"
              validation="required|email"
              :validation-mode="validationMode"
            ></input-field>
          </li>
          <li class="col-6">
            <textarea-field
              :value.sync="newPublication.content"
              type="textarea"
              name="content"
              :description="(400 - newPublication.content.length) + ' characters left'"
              placeholder="Something that has happened to you"
              label="Content"
              validation="max:400"
              :validation-mode="validationMode"
            ></textarea-field>
          </li>
          <li class="col-3">
            <date-range-picker
              :start.sync="newPublication.start"
              :end.sync="newPublication.end"
            ><template slot-scope="{ start, end }">({{ start.toDateString() }} - {{ end.toDateString() }})</template>
            </date-range-picker>
          </li>
          <li class="col-3">
            <dropdown-select
              :value.sync="newPublication.category"
              :options="categories"
              name="category"
              placeholder="Select a category"
              description="The category of your publication"
              label="Category"
              fieldClass="field-class"
              validation="required|in:health,fitness,nutrition,natural,supplements"
            ></dropdown-select>
          </li>
          <li class="col-3">
            <dropdown-multiselect
              :value.sync="newPublication.tags"
              :options="tags"
              name="tags"
              placeholder="Select tags"
              description="Select at least 3 tags that apply to your post"
              label="Tags"
              fieldClass="field-class"
              validation="required|array_min:3"
              selected-label="tags selected"
            ></dropdown-multiselect>
          </li>
          <li class="col-2">
            <checkbox-button
              :value.sync="newPublication.isPrivate"
              name="is_private"
              label="Is Private"
            ></checkbox-button>
          </li>
          <li class="col-2">
            <checkbox-button
              :value.sync="newPublication.isPublished"
              name="is_published"
              label="Is Published"
            ></checkbox-button>
          </li>
          <li v-if="!newPublication.isPublished" class="col-2">
            <date-picker
              :value.sync="newPublication.publishDate"
              name="publish_date"
              description="The date you wish this article to be published"
              label="Publish Date"
              :validation="'after:' + todayDateString"
            ></date-picker>
          </li>
          <li class="col-2">
            <h4>What is the frequency of this article being shown?</h4>
            <!-- Notice how only the first radio button has the validation rules & name, the rest just have the same name -->
            <div>
              <span>
                <radio-button
                  :value.sync="newPublication.publishType"
                  selected-value="daily"
                  name="publish_type"
                  label="Daily"
                  validation="required|in:daily,weekly,monthly"
                ></radio-button>
              </span>
              <span>
                <radio-button
                  :value.sync="newPublication.publishType"
                  selected-value="weekly"
                  name="publish_type"
                  label="Weekly"
                ></radio-button>
              </span>
              <span>
                <radio-button
                  :value.sync="newPublication.publishType"
                  selected-value="monthly"
                  name="publish_type"
                  label="Monthly"
                ></radio-button>
              </span>
              <span>
                <radio-button
                  :value.sync="newPublication.publishType"
                  selected-value="invalid"
                  name="publish_type"
                  label="Invalid"
                ></radio-button>
              </span>
            </div>
            <!-- We can also use directly the errors bag here, since this has
              the same scope as every component that implements validationBase.js -->
            <span v-if="formErrors.has('publish_type')" class="field-description italic" style="color: red;">{{ formErrors.first('publish_type') }}</span>
            <span v-else>&nbsp;</span>
          </li>
          <li class="col-2">
            <toggle-button
              :value.sync="newPublication.activateStyling"
              name="activate_styling"
              label="Styling"
            ></toggle-button>
          </li>
          <li class="col-2">
            <toggle-button
              :value.sync="newPublication.activateBoldness"
              name="actiavate_boldness"
              label="Boldness"
            ></toggle-button>
          </li>
        </ul>
        <ul>
          <li><button @click="validate" class="btn-primary" type="button">Validate All</button></li>
          <li><button @click="clearErrors" class="btn-standard" type="button">Clear Errors</button></li>
          <li><button @click="addErrors" class="btn-outline" type="button">Add Server Side Errors</button></li>
        </ul>
      </div>
    </validation-form>
  </div>
</template>

<script>
import moment from 'moment'

import InputField from '@/components/forms/InputField'
import TextareaField from '@/components/forms/TextareaField'
import DatePicker from '@/components/forms/DatePicker'
import DateRangePicker from '@/components/forms/DateRangePicker'
import DropdownSelect from '@/components/forms/DropdownSelect'
import DropdownMultiselect from '@/components/forms/DropdownMultiselect'
import CheckboxButton from '@/components/forms/CheckboxButton'
import RadioButton from '@/components/forms/RadioButton'
import ToggleButton from '@/components/forms/ToggleButton'

import ValidationForm from '@/components/forms/ValidationForm'

export default {
  $_veeValidate: {
    validator: 'new'
  },
  data: function () {
    return {
      validationMode: 'active',
      newPublication: this.getClearItem(),
      categories: {
        health: 'Health',
        fitness: 'Fitness',
        nutrition: 'Nutrition',
        natural: 'Natural Products',
        supplements: 'Dietary Supplements',
        invalid: 'Invalid Value'
      },
      tags: [
        'cuissine',
        'diet',
        'nutrition',
        'fitnessEveryday',
        'stayingHealthy',
        'natural',
        'dietProducts',
        'healthForEveryone',
        'fatBurning'
      ],
      todayDateString: moment().format('YYYY/MM/DD')
    }
  },
  components: {
    InputField,
    TextareaField,
    DatePicker,
    DateRangePicker,
    DropdownSelect,
    DropdownMultiselect,
    CheckboxButton,
    RadioButton,
    ToggleButton,
    ValidationForm
  },
  methods: {
    getClearItem: function () {
      return {
        name: '',
        username: '',
        email: '',
        content: '',
        publishDate: moment().toDate(),
        start: moment().startOf('month').toDate(),
        end: moment().endOf('month').toDate(),
        category: null,
        tags: [],
        isPrivate: false,
        isPublished: true,
        publishType: null,
        activateStyling: false,
        activateBoldness: true
      }
    },
    validate: function () {
      this.$refs.form1.validate()
    },
    clearErrors: function () {
      this.$refs.form1.clearErrors()
    },
    addErrors: function () {
      let errors = [
        {
          field: 'name',
          msg: 'This name is not appropiate',
          rule: 'filter'
        },
        {
          field: 'email',
          msg: 'This email has already been taken',
          rule: 'unique'
        }
      ]
      this.$refs.form1.addErrors(errors)
    }
  }
}
</script>

<style lang="scss" scoped>
.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12 {
  float: left;
  display: block;
  margin: 0;
  padding: 0 10px;
  box-sizing: border-box;
}

.col-1 {
  width: 8.3333%;
}

.col-2 {
  width: 16.6666%;
}

.col-3 {
  width: 25%;
}

.col-4 {
  width: 33.3333%;
}

.col-5 {
  width: 41.6666%;
}

.col-6 {
  width: 50%;
}

.col-7 {
  width: 58.3333%;
}

.col-8 {
  width: 66.6666%;
}

.col-9 {
  width: 75%;
}

.col-10 {
  width: 83.3333%;
}

.col-11 {
  width: 91.6666%;
}

.col-12 {
  width: 100%;
}

.row {
  display: block;
}

.row::after {
  clear: both;
  content: " ";
  display: table;
}

</style>