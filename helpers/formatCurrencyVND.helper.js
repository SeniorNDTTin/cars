module.exports.formatCurrencyVND = (number) => {
  return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}