// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import {
  Menu,
  MenuItem,
  Row,
  Col,
  Button,
  Input,
  Table,
  TableColumn,
  Card,
  Breadcrumb,
  BreadcrumbItem,
  Popover,
  Tag,
  Select,
  Option,
  Form,
  FormItem,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxGroup,
  CheckboxButton,
  Collapse,
  CollapseItem,
  Message } from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import router from './router'
import store from './vuex/store'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Card)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Popover)
Vue.use(Tag)
Vue.use(Select)
Vue.use(Option)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(CheckboxButton)
Vue.use(Collapse)
Vue.use(CollapseItem)

Vue.prototype.$message = Message

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
