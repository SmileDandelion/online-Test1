'use strict';

function intNumber(num) {

    var newNumString='';

    while (num.toString().length > 3) {
        var divisor = num.toString().substr(num.toString().length-3,num.toString().length-1);
        newNumString = ','+divisor + newNumString;
        num = (num / 1000).toString();
    }
    newNumString = num.toString() + newNumString;

    return newNumString;
}

function floatNumber(num,index) {

    var newNumString = num.toString().substr(index);
    var number = num.toString().substr(0, index);

    while (number.length > 3) {
        var divisor = number.toString().substr(number.toString().length-3,number.toString().length-1);
        newNumString = ','+divisor + newNumString;
        number = (parseInt(number) / 1000).toString();
    }
    newNumString = number.toString() + newNumString;

    return newNumString;
}

function thousands_separators(num) {
    var newNumString;
    var index = num.toString().indexOf('.');
    if (index != -1) {
        newNumString = floatNumber(num,index);
    }
    else {
        newNumString = intNumber(num);
    }

    return newNumString;
}

module.exports = thousands_separators;
