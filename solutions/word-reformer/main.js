var broken = wordReformer('bro', 'ken');
console.log(broken);
var manipulation = wordReformer('manipu', 'lation');
console.log(manipulation);
var excitement = wordReformer('excite', 'ment');
console.log(excitement);

function wordReformer(wordFragment1, wordFragment2){
  return wordFragment1+wordFragment2;
}
