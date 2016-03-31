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
    $("#output").text(numeralCodes[0][userInput]);
    // this will work for entering a one-digit number, 0-9.

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
