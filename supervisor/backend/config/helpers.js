module.exports.websiteType = function(arg1, arg2, options) {
  if (arg1.toLowerCase() == arg2.toLowerCase()) {
    return options.fn(this);
  }
};
