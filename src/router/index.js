import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/routes/Index'
import Buttons from '@/components/routes/Buttons'
import TextFields from '@/components/routes/TextFields'
import Modal1 from '@/components/routes/Modal1'
import Modal2 from '@/components/routes/Modal2'
import BannerNotifications from '@/components/routes/BannerNotifications'
import Selects from '@/components/routes/Selects'
import Validation from '@/components/partials/Validation'
import Notifications from '@/components/routes/Notifications'
import Modals from '@/components/routes/Modals'
import Tables from '@/components/routes/Tables'
import Tooltips from '@/components/routes/Tooltips'
import TabsAndAccordions from '@/components/routes/TabsAndAccordions'
import DatePickers from '@/components/routes/DatePickers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Index',
      path: '/',
      component: Index
    },
    {
      name: 'Validation',
      path: '/validation',
      component: Validation
    },
    {
      name: 'Buttons',
      path: '/buttons',
      component: Buttons
    },
    {
      name: 'Text Fields',
      path: '/text-fields',
      component: TextFields
    },
    {
      name: 'Banner Notifications',
      path: '/banner-notifications',
      component: BannerNotifications
    },
    {
      name: 'Selects',
      path: '/selects',
      component: Selects
    },
    {
      name: 'Notifications',
      path: '/notifications',
      component: Notifications
    },
    {
      name: 'Modals',
      path: '/modals',
      component: Modals,
      children: [
        {
          name: 'Modal1',
          path: 'modal1',
          component: Modal1
        },
        {
          name: 'Modal2',
          path: 'modal2',
          component: Modal2
        }
      ]
    },
    {
      name: 'Tables',
      path: '/tables',
      component: Tables
    },
    {
      name: 'Tooltips',
      path: '/tooltips',
      component: Tooltips
    },
    {
      name: 'Tabs and Accordions',
      path: '/tabs-and-accordions',
      component: TabsAndAccordions
    },
    {
      name: 'Datepicker',
      path: '/datepickers',
      component: DatePickers
    }
  ]
})
