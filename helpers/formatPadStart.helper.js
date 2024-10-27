module.exports.formatPadStart = (number, width) => {
  return number.toString().padStart(width, '0');
}