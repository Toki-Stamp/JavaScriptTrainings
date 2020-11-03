import M from 'materialize-css';
import localizeFilter from '../filters/localize-filter.js';

export default {
  install(Vue, options) {
    //todo remove this after
    (options) && console.log(options);

    Vue.prototype.$message = function (html) {
      M.toast({html});
    };

    Vue.prototype.$error = function (html) {
      M.toast({html: `<span style="color: red">${localizeFilter('error')}</span>: ${html}`});
    }
  }
}