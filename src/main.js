// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import { Menu, menuItem, Row, Col, Button, Input, Table, tableColumn, Card, Breadcrumb, breadcrumbItem } from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css';

import App from './App';
import router from './router';
import store from './vuex/store'

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(Menu);
Vue.use(Row);
Vue.use(Col);
Vue.use(Button);
Vue.use(Input);
Vue.use(menuItem);
Vue.use(Table);
Vue.use(tableColumn);
Vue.use(Card);
Vue.use(Breadcrumb);
Vue.use(breadcrumbItem);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
});
