import store from '../store/index.js';
import ruRU from '../locales/ru-RU.json';
import enUS from '../locales/en-US.json';

const locales = {
  'ru-RU': ruRU,
  'en-US': enUS
};

export default function localizeFilter(key) {
  const locale = (store.getters.userInfo.locale || 'ru-RU');
  // const locale = (store.getters.userInfo.locale || 'en-US');

  return locales[locale][key] || `[Localize error]: key ${key} not found`;
}