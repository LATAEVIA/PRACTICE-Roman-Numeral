// business logic
var userInput;
var numeralCodes = [
  //ones
  ["","I","II","III","IV","V","VI","VII","VIII","IX"],
  //tens
  ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
  //hundreds
  ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
  //thousands
  ["","M","MM","MMM"]
];

// UI logic
$(document).ready(function(){
  $("#roman-numeral").submit(function(event) {
    event.preventDefault();

    userInput = $("#text-input").val();
    console.log(typeof userInput);
    // this will work for entering a one-digit number, 0-9:
    // $("#output").text(numeralCodes[0][userInput]);

    // and this one will work for a two-digit number, but break if it's one or three digits:
    // $("#output").text(numeralCodes[1][userInput[0]] + numeralCodes[0][userInput[1]]);
    // three-digit solver:
    // $("#output").text(numeralCodes[2][userInput[0]] + numeralCodes[1][userInput[1]] + numeralCodes[0][userInput[2]]);

    if (userInput > 3999) {
      $("#output").text("Roman numerals don't go that high!")
    } else if (userInput.length === 1) {
      $("#output").text(numeralCodes[0][userInput]);
    } else if (userInput.length === 2) {
      $("#output").text(numeralCodes[1][userInput[0]] + numeralCodes[0][userInput[1]]);
    } else if (userInput.length === 3) {
      $("#output").text(numeralCodes[2][userInput[0]] + numeralCodes[1][userInput[1]] + numeralCodes[0][userInput[2]]);
    } else if (userInput.length === 4) {
      $("#output").text(numeralCodes[3][userInput[0]] + numeralCodes[2][userInput[1]] + numeralCodes[1][userInput[2]]+ numeralCodes[0][userInput[3]]);
    }


  });
});




  // $("#form").submit(function(event){
  //   event.preventDefault();
  //   var n = parseInt($("#text-input").val());
  //   convert(n) = $("#text-output").val();
  // });
  //
  // var numeralCodes = [["","I","II","III","IV","V","VI","VII","VIII","IX"],         //         Ones
  //                     ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],   // Tens
  //                     ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]];        // Hundreds
  //
  // function convert(num) {
  //   var numeral = "";
  //   var digits = num.toString().split('').reverse();
  //   for (var i=0; i < digits.length; i++){
  //     numeral = numeralCodes[i][parseInt(digits[i])] + numeral;
  //   }
  //   return numeral;
  // }

  /* *** How the hell does this work? *** */
  // It's actually pretty genius
