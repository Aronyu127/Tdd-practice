var App = {
  max: function () {
    var max = -Infinity;
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }

    return max;
  },
  isOdd: function (number) {
    if (typeof number !== 'number') {
      throw Error('The given argument is not a number');
    }
    return number % 2 !== 0;
  },
  stringContainsDigit: function (string) {
		if (typeof string !=='string'){
			throw Error('The given argument is not a string');
		}
		var matches = string.match(/\d+/g);
    if (matches == null) {
      throw Error('The given argument is not a string contains digit');	
    }
		return true;
    // TODO 3: implement the code here

  }
};