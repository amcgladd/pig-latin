//Back-end logic
var vowels = ["a","e","i","o","u","y"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x","z"];
var ay = "ay";
var way = "way";

function splitString(userText) {
  return userText.split(" ");
}

function pigLatin(word) {
  var firstLetter = word.charAt(0);
  for (var i = 0; i < word.length; i += 1) {
    if (vowels.includes(word.charAt(i))) {
      var firstVowelPosition = i;
      break;
    }
  }

  var wordEnd = word.slice(firstVowelPosition, word.length);
  var wordBeg = word.slice(0, firstVowelPosition);

if ((firstLetter === "y") || (wordBeg.includes("q"))) {
    var yqWordEnd = word.slice((firstVowelPosition+1), word.length);
    var yqWordBeg = word.slice(0, (firstVowelPosition+1));
    var combinedWord = yqWordEnd + yqWordBeg + ay;
    return combinedWord;
} else if ((word.length === 1) && (firstVowelPosition === 0)) {
    var combinedWord = word.concat(ay);
    return combinedWord;
} else if ((word.length > 1) && (firstVowelPosition === 0)) {
    var combinedWord = word.concat(way);
    return combinedWord;
} else if (consonants.includes(firstLetter)) {
    var combinedWord = wordEnd + wordBeg + ay;
    return combinedWord;
}  else {
      return word;
}
}

//Front-end logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var userInput = $("#userInput").val();
    var result = "";
    splitString(userInput).forEach(function(word){
      result += " " + pigLatin(word);
    })

    $("#finalOutput").text(result);
    $("#results").show();

  });
});
