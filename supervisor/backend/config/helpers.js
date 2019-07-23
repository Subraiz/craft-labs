module.exports.ifEquals = function(arg1, arg2, options) {
  if (arg1.toLowerCase() == arg2.toLowerCase()) {
    return options.fn(this);
  }
};

module.exports.getHostName = function(str, options) {
  return str
    .replace(/\s+/g, "")
    .replace(/[^A-Za-z0-9\s]/g, "")
    .replace(/\s{2,}/g, " ")
    .toLowerCase();
};
