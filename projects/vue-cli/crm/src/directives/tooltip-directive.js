import M from 'materialize-css';

export default {
  bind(el, {modifiers, value}) {
    const options = {};

    if (value) {
      if ((typeof value === 'string') || modifiers['literal']) {
        options.html = value;
      } else if ((typeof value === 'object') && !Object.keys(modifiers).length) {
        Object.entries(value).forEach(([key, value]) => options[key] = value);
      }
    }
    M.Tooltip.init(el, options);
  },
  unbind(el) {
    const instance = M.Tooltip.getInstance(el);

    if (instance && instance.destroy) {
      instance.destroy();
    }
  }
}