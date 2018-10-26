<template>
  <div class="wrapper button-content">
    <h1>Date Picker</h1>
    <span class="headline-divider"></span>
    
    <h2>Date Picker</h2>
    <ul>
      <li>
        <date-picker :value.sync="date1"></date-picker>
      </li>
      <li>
        <date-picker :value.sync="date2" label="Date Picker w/ label"></date-picker>
      </li>
      <li>
        <date-picker :value.sync="date2" label="Date Picker w/ label & description" description="some decription"></date-picker>
      </li>
    </ul>

    <hr>
    <h2>Date Range Picker</h2>
    <ul>
      <li>
        <date-range-picker :start.sync="start" :end.sync="end"><template slot-scope="{ start, end }">({{ start.toDateString() }} - {{ end.toDateString() }})</template></date-range-picker>
      </li>
      <li>
        <date-range-picker :start.sync="start2" :end.sync="end2" label="Date Range Picker w/ label"><template slot-scope="{ start, end }">{{ formatDate(start) }} - {{ formatDate(end) }}</template></date-range-picker>
      </li>
    </ul>

  </div>
</template>

<script>
import moment from 'moment'
import DatePicker from '@/components/forms/DatePicker'
import DateRangePicker from '@/components/forms/DateRangePicker'
import tableData from '@/data/tableData.json'

export default {
  components: {
    DatePicker,
    DateRangePicker
  },
  data () {
    return {
      date1: moment().startOf('week').toDate(),
      date2: moment().toDate(),
      date3: moment().startOf('month').toDate(),
      start: moment().startOf('week').toDate(),
      end: moment().toDate(),
      start2: moment().startOf('month').toDate(),
      end2: moment().endOf('month').toDate(),
      tableData: tableData
    }
  },
  methods: {
    // The following methods is for the format of the date range picker output
    formatDate: function (date) {
      return moment(date).format('YYYY-MM-DD')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  ul li {
    list-style-type: none;
  }
</style>
