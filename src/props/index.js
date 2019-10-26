String.prototype.toEnglish = function() {
  const find = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  var replace = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var replaceString = this;
  var regex;
  for (var i = 0; i < find.length; i++) {
    regex = new RegExp(find[i], 'g');
    replaceString = replaceString.replace(regex, replace[i]);
  }
  return replaceString;
};

Number.prototype.moneyFormat = function(n, x) {
  try {
    const re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
  } catch (e) {
    exeption(e);
    return '';
  }
};

String.prototype.toPersian = function() {
  const id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return this.replace(/[0-9]/g, function(w) {
    return id[+w];
  });
};
