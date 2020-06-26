function pHAnalyzer(pH){
  if (0 <= pH && pH <= 4){
    return "This solution is acidic";
  }
  else if (5 <= pH && pH <= 9){
    return "This solution is neutral";
  }
  else if (10 <= pH && pH <= 14){
    return "This solution is basic";
  }
  else{
    return "Invalid pH value";
  }
}

var seawater = pHAnalyzer(7.5);
console.log ("Seawater: " + seawater);
var appleJuice = pHAnalyzer(3.4);
console.log("Apple Juice: " + appleJuice);
var sodiumHydroxide = pHAnalyzer(14);
console.log("Sodium Hydroxide: " + sodiumHydroxide);
