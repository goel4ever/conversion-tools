// Cannot be empty. At least two characters
var nameCheck = /^[a-zA-Z\-\s\.\'\`\,]+$/;

// Tests regex and Luhn Mod-10 Method
var ccNum = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(2(?:22[1-9]|2[3-9][0-9]|[3-6][0-9]{2}|7[0-1][0-9]|720)\d{12})|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

// Expiration month
var expMonth = /^[0-9]{1,2}$/g;

// Expiration year. Replaced original /^[0-9]{2,4}$/g
var expYear = new RegExp('^[0-9]{2,4}$');

// Email
var email = /^[\w\'\+\-_]+(\.[\w\'\+\-_]+)*@[a-zA-Z0-9][a-zA-Z0-9\-]*(\.[a-zA-Z0-9\-]+)*\.[a-zA-Z]{2,6}$/;

// Phone Number
var phone = /^[\+]?[\d|\(|\)|\s|\-|\.]{7,16}$/;

function validate(type, validationString) {
  if (!validationString) return false;

  var regExFunction;

  switch (type) {
    case 'name':
      regExFunction = nameCheck;
      break;
    case 'creditCard':
      regExFunction = ccNum;
      break;
    case 'email':
      regExFunction = email;
      break;
    case 'phone':
      regExFunction = phone;
      break;
    default:
      regExFunction = name;
  }
  return !!regExFunction.exec(validationString);
}
