//Back-end logic
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var vowels = ["a","e","i","o","u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var ay = "ay";

var pigLatin = function(userInput) {
  if ((userInput.length === 1) && (vowels.includes(userInput))) {
  var combinedWord = userInput.concat(ay);
    return combinedWord;
} else {
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
