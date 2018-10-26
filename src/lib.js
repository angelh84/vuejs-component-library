import sxaleBanner from './components/common/BannerNotification'

import sxaleAccordion from './components/common/Accordion'
import sxaleAccordionRow from './components/common/AccordionRow'
import sxaleDataTable from './components/common/DataTable'
import sxaleLogo from './components/common/Logo'
import sxaleModal from './components/common/Modal'
import sxaleNotification from './components/common/Notification'
import sxaleTabs from './components/common/Tabs'
import sxaleTooltip from './components/common/Tooltip'
import sxaleMenuPopup from './components/common/MenuPopup'

import sxaleCheckboxButton from './components/forms/CheckboxButton'
import sxaleDatePicker from './components/forms/DatePicker'
import sxaleDateRangePicker from './components/forms/DateRangePicker'
import sxaleDropdownMultiselect from './components/forms/DropdownMultiselect'
import sxaleTokenSelect from './components/forms/TokenSelect'
import sxaleDropdownSelect from './components/forms/DropdownSelect'
import sxaleInputField from './components/forms/InputField'
import sxaleRadioButton from './components/forms/RadioButton'
import sxaleTextareaField from './components/forms/TextareaField'
import sxaleToggleButton from './components/forms/ToggleButton'

import sxaleModalBase from './components/mixins/modalBase'
import sxaleValidationBase from './mixins/validationBase'

import sxaleColumnSelector from './components/table/ColumnSelector'
import sxaleFilterInput from './components/table/FilterInput'
import sxaleNormalHeader from './components/table/NormalHeader'
import sxalePaginationInput from './components/table/PaginationInput'
import sxaleSearchInput from './components/table/SearchInput'
import sxaleShowInput from './components/table/ShowInput'
import sxaleSortableHeader from './components/table/SortableHeader'

export default {
  common: {
    sxaleBanner,
    sxaleAccordion,
    sxaleAccordionRow,
    sxaleDataTable,
    sxaleLogo,
    sxaleModal,
    sxaleNotification,
    sxaleTabs,
    sxaleTooltip,
    sxaleMenuPopup
  },
  form: {
    sxaleCheckboxButton,
    sxaleDatePicker,
    sxaleDateRangePicker,
    sxaleDropdownMultiselect,
    sxaleDropdownSelect,
    sxaleTokenSelect,
    sxaleInputField,
    sxaleRadioButton,
    sxaleTextareaField,
    sxaleToggleButton
  },
  table: {
    sxaleColumnSelector,
    sxaleFilterInput,
    sxaleNormalHeader,
    sxalePaginationInput,
    sxaleSearchInput,
    sxaleShowInput,
    sxaleSortableHeader
  },
  base: {
    sxaleModalBase,
    sxaleValidationBase
  }
}
