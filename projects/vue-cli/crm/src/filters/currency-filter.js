export default function currencyFilter(value, currency = 'BYN') {
  debugger
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency
  }).format(value);
}