import M from 'materialize-css';

export default {
  install(Vue, options) {
    //todo remove this after
    (options) && console.log(options);

    Vue.prototype.$message = function (html) {
      M.toast({html});
    };

    Vue.prototype.$error = function (html) {
      M.toast({html: `<span style="color: red">[Ошибка]</span>: ${html}`});
    }
  }
}