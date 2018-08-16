//Back-end logic
var vowels = ["a","e","i","o","u","y"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x","z"];
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

if ((firstLetter === "y") || (wordBeg.includes("q"))) {
    var yqWordEnd = userInput.slice((firstVowelPosition+1), userInput.length);
    var yqWordBeg = userInput.slice(0, (firstVowelPosition+1));
    var combinedWord = yqWordEnd + yqWordBeg + ay;
    return combinedWord;
} else if ((userInput.length === 1) && (firstVowelPosition === 0)) {
    var combinedWord = userInput.concat(ay);
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
