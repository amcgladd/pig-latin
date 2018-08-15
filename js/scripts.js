//Back-end logic
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var vowels = ["a","e","i","o","u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var ay = "ay";
var way = "way";

var pigLatin = function(userInput) {
  var firstLetter = userInput.charAt(0);
  //var secondLetter = userInput.charAt(1);
  for (var i = 0; i < userInput.length; i += 1) {
    if (vowels.includes(userInput.charAt(i))) {
      var firstVowelPosition = i;
      break;
    }
  }
  var wordEnd = userInput.slice(firstVowelPosition, userInput.length);
  var wordBeg = userInput.slice(0, firstVowelPosition);


  if ((userInput.length === 1) && (firstVowelPosition === 0)) {
    var combinedWord = userInput.concat(ay);
    return combinedWord;
} else if (wordBeg.includes("q")){
    var qWordEnd = userInput.slice((firstVowelPosition+1), userInput.length);
    var qWordBeg = userInput.slice(0, (firstVowelPosition+1));
    var combinedWord = qWordEnd + qWordBeg + ay;
    return combinedWord;
} else if ((userInput.length > 1) && (firstVowelPosition === 0)) {
    var combinedWord = userInput.concat(way);
    return combinedWord;
} else if (consonants.includes(firstLetter)) {
    var combinedWord = wordEnd + wordBeg + ay;
    return combinedWord;
}  else {
      return userInput;
}
}




//Front-end logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var userInput = $("#userInput").val();
    var result = pigLatin(userInput);
    $("#finalOutput").text(result);
    $("#results").show();

  });
});
