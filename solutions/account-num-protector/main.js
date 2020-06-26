function accountNumberProtector(cardNumberString) {
  const prefix = '**'
  let result = '';
  for (let i = 0; i < cardNumberString.length; i++) {
    if (i > 11) {
      result += cardNumberString[i];
    }
  }
  return prefix + result;
}

console.log("accountNumberProtector('5543223485638832')--> ", accountNumberProtector("5543223485638832"));
console.log("accountNumberProtector('8934235477210943')--> ", accountNumberProtector("8934235477210943"));
console.log("accountNumberProtector('7513635499320192')--> ", accountNumberProtector("7513635499320192"));
