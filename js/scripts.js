//Back-end logic
var pigLatin = function(userInput) {
  return userInput;
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
