import localizeFilter from '../filters/localize-filter.js';

export default {
  install(Vue, options) {
    //todo remove this after
    (options) && console.log(options);

    Vue.prototype.$title = function (title) {
      const appTitle = process.env.VUE_APP_TITLE;

      return `${localizeFilter(title)} | ${appTitle}`;
    };
  }
}