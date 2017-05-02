$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    //get input
    var input = $('input[name="name"]').val();

    //remove spaces on a copied version of the string
    var testCase = input.replace(/ /g, '').replace(/[.,\/#!$%@?'|"+\^&\*;:{}=\-_`~()]/g,"").toUpperCase();

    //convert to array and then reverse it and bring it back to string
    var reversed = testCase.split('').reverse().join('');

    //compare array with reversed array
    //if equal, show true, if false show false
    if (reversed === testCase) {
      $('#results > *:not(.false)').show();
      $('.false').hide();
      $('.original span').text(input);
      $('.test-case span').text(testCase);
      $('.reversed-test-case span').text(reversed);
    } else {
      $('#results > *').hide();
      $('.false').show();
    }
  });
});
