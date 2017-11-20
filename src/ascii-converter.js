const valueHolder = {
  binary: '',
  decimal: '',
  hex: '',
  htmlCode: '',
  escapeCode: ''
}

function convertAll(char) {
  if (char !== '') {
    var decimalValue = char.charCodeAt(0);
    var binaryValue = decimalValue.toString(2).toUpperCase();
    while( binaryValue.length < 8 ) {
      binaryValue = "0" + binaryValue;
    }
    valueHolder.binary = binaryValue;

    valueHolder.decimal = decimalValue;
    valueHolder.hex = decimalValue.toString(16).toUpperCase();
    valueHolder.htmlCode = '&#' + decimalValue + ';';
    valueHolder.escapeCode = getEscape(decimalValue, valueHolder.hex);
  } else {
    valueHolder.binary = '';
    valueHolder.decimal = '';
    valueHolder.hex = '';
    valueHolder.htmlCode = '';
    valueHolder.escapeCode = '';
  }
  return valueHolder;
}

function getEscape(decimal, hex) {
  var code = '\\x' + hex;
  if( decimal==0 ) code='\\0';
  if( decimal==7 ) code='\\a';
  if( decimal==8 ) code='\\b';
  if( decimal==9 ) code='\\t';
  if( decimal==10 ) code='\\n';
  if( decimal==11 ) code='\\v';
  if( decimal==12 ) code='\\f';
  if( decimal==13 ) code='\\r';
  if( decimal==34 ) code='\\\"';
  if( decimal==39 ) code='\\\'';
  if( decimal==63 ) code='\\\?';
  if( decimal==92 ) code='\\\\';
  return code;
}
