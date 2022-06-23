module.exports = function toReadable (number) {
  let result = '';
  let lastNumber = number.toString().length - 1

  const wholeNumber = (numb) => {
    switch (+number.toString()[numb]) {
      case 0: return '';
      case 1: return 'one';        
      case 2: return 'two';
      case 3: return 'three';
      case 4: return 'four';
      case 5: return 'five';
      case 6: return 'six';
      case 7: return 'seven';
      case 8: return 'eight';
      case 9: return 'nine';        
    }  
  }

  const tens = (numb) => {
    switch (+number.toString()[numb]) {
      case 2: return 'twenty';        
      case 3: return 'thirty'; 
      case 4: return 'forty';
      case 5: return 'fifty';
      case 6: return 'sixty';
      case 7: return 'seventy';
      case 8: return 'eighty';
      case 9: return 'ninety';
    }  
  }

  const subTwenty = (numb) => {
  switch (+number.toString()[numb]) {
    case 0: return 'ten';        
    case 1: return 'eleven';
    case 2: return 'twelve';
    case 3: return 'thirteen';
    case 4: return 'fourteen';
    case 5: return 'fifteen';
    case 6: return 'sixteen';
    case 7: return 'seventeen';
    case 8: return 'eighteen';
    case 9: return 'nineteen';           
    }  
  }

  if (number === 0) return 'zero';

  if (number >= 100) {
      result = wholeNumber(lastNumber-2) + ' hundred'
    }
  
  if (+(number.toString().slice(-2)) >= 20) {
    result += ' ' + tens(lastNumber-1); 
    result += ' ' + wholeNumber(lastNumber);
  }

  if (+(number.toString().slice(-2)) < 20 && + (number.toString().slice(-2)) > 9) {
      result += ' ' + subTwenty(lastNumber);  
    }
  
  if (+(number.toString().slice(-2)) < 10) {
    result += ' ' + wholeNumber(lastNumber)
    }
  
  
  return result.trim();
}