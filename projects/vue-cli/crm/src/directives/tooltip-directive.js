import M from 'materialize-css';

export default {
  bind(el, {value}) {
    M.Tooltip.init(el, {html: value});
  },
  unbind(el) {
    const instance = M.Tooltip.getInstance(el);

    if (instance && instance.destroy) {
      instance.destroy();
    }
  }
}