<template>
  <div class="field-wrapper">
    <label 
      class="form-label show"
      >{{ label !== null ? label : '&nbsp;' }}</label>
    <button type="button" class="form-field date-range-picker" ref="date_range">
      <i class="fa-calendar position-left"></i>
      <span>
        <!--
          The following slot displays the value of the Date Range Picker,
          start and end are Date JS Objects
        -->
        <slot :start="start" :end="end">
          {{ formatted(start) }} &nbsp; - &nbsp; {{ formatted(end) }}
        </slot>
      </span>
      <b class="caret"></b>
    </button>
    <span class="field-description italic" v-if="description">{{ description !== null ? description : '&nbsp;' }}</span>
    <!-- Start of Template -->
    <div v-show="false" ref="template">
      <div class="daterangepicker dropdown-menu"> 
        <div class="calendar left">
          <div class="daterangepicker_input">
            <input class="input-mini form-control" type="text" name="daterangepicker_start" value="" />
            <i class="fa fa-calendar glyphicon glyphicon-calendar"></i>
            <div class="calendar-time">
              <div></div>
              <i class="fa fa-clock-o glyphicon glyphicon-time"></i>
            </div>
          </div>
          <div class="calendar-table"></div>
      </div>
      <div class="calendar right">
          <div class="daterangepicker_input">
            <input class="input-mini form-control" type="text" name="daterangepicker_end" value="" />
            <i class="fa fa-calendar glyphicon glyphicon-calendar"></i>
            <div class="calendar-time">
              <div></div>
              <i class="fa fa-clock-o glyphicon glyphicon-time"></i>
            </div>
          </div>
          <div class="calendar-table"></div>
      </div>
      <div class="ranges">
          <div class="range_inputs">
              <button class="applyBtn" disabled="disabled" type="button"></button> 
              <button class="cancelBtn" type="button"></button>
          </div>
        </div>
      </div>
    </div>
    <!-- End of Template -->
  </div>
</template>

<script>
import $ from 'jquery'
import moment from 'moment'
import 'daterangepicker'
import 'daterangepicker/daterangepicker.css'

export default {
  data: function () {
    return {
      daterangepicker: null
    }
  },
  props: {
    /**
     * Defines the default start of the date range picker
     * CAN BE USED WITH SYNC
     * @type {Date}
     */
    start: {
      required: true,
      type: Date
    },

    /**
     * Defines the default end of the date range picker
     * CAN BE USED WITH SYNC
     * @type {Date}
     */
    end: {
      required: true,
      type: Date
    },

    /**
     * Defines the ranges that will be available by default,
     * each range is in the format
     * 'label': [start, end]
     * Where "start" and "end" are Dates or MomentJS Objects and "label" is a String
     * @type {Object}
     */
    ranges: {
      required: false,
      type: Object,
      default: function () {
        return {
          'Today': [moment(), moment()],
          'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
          'Last 7 Days': [moment().subtract('days', 6), moment()],
          'Last 30 Days': [moment().subtract('days', 29), moment()],
          'This Month': [moment().startOf('month'), moment()],
          'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
        }
      }
    },

    /**
     * Defines the amount of days, months, weeks, years, etc.
     * Anything that can be added to a Date.
     * @type {Object}
     */
    dateLimit: {
      required: false,
      type: Object,
      default: function () {
        return {
          days: 90
        }
      }
    },

    /**
     * The minimum date that the Date Range Picker will allow the user to choose
     * @type {Date}
     */
    minDate: {
      required: false,
      type: [Date, Boolean],
      default: function () {
        return false
      }
    },

    /**
     * The maximum date that the Date Range Picker will allow the user to choose
     * @type {Object}
     */
    maxDate: {
      required: false,
      type: [Date, Boolean],
      default: function () {
        return false
      }
    },

    /**
     * The label of the date range picker
     * @type {Object}
     */
    label: {
      default: null
    },

    description: {
      default: null
    }
  },
  methods:
  {
    init: function () {
      this.daterangepicker = $(this.$refs.date_range).daterangepicker(
        {
          startDate: this.start,
          endDate: this.end,
          dateLimit: this.dayLimit,
          ranges: this.ranges,
          opens: 'center',
          drops: 'down',
          applyClass: 'apply',
          cancelClass: 'cancel',
          linkedCalendars: true,
          template: $(this.$refs.template).html()
          // parentEl: this.$el
        },
        (start, end) => {
          // Send the status of the inputs through a .sync
          // (without a .sync no change to the source is made)
          this.$emit('update:start', start.toDate())
          this.$emit('update:end', end.toDate())
        }
      )
      this.container = this.daterangepicker.data('daterangepicker').container
    },
    formatted: function (date) {
      return moment(date).format('MMMM D, YYYY')
    }
  },
  mounted: function () {
    this.init()
  },
  beforeDestroy: function () {
    $(this.container).remove()
  }
}
</script>

<style lang="scss" scoped>
</style>