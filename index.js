'use strict'

function brackets(values) {
    var result = [];
        
    for (var i = 0; i < values.length; i++) {
        if (isValid(values[i])) {
            result.push('YES');
        } else {
            result.push('NO');
        }
    }

    return result;
} 

function isValid (strValue) {
    var chr, expValue;

    var temp = [];

    var openingValues = ['[', '{', '('];
    var closingValues = [']', '}', ')'];

    for (var i = 0; i < strValue.length; i++) {
        chr = strValue[i];

        if (openingValues.indexOf(chr) > -1) {
            temp.push(chr);
        } else if (closingValues.indexOf(chr) > -1) {
            expValue = openingValues[closingValues.indexOf(chr)];
            if (temp.length == 0 || (temp.pop() != expValue)) {
                return false;
            }
        } else {
            continue;
        }
    }

    return (temp.length == 0);
}

module.exports = { 
    brackets: brackets 
}