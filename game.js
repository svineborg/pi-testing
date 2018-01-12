$(document).ready(function() {
  var choices = function(num_of_choices){
    console.log('num_of_choices:' + num_of_choices);
    for (var i = 0; i < 4; i++){
      $('div.btm').append('<div class="added">' + i + '<button class="btn">another</button></div>');
    }
  };
  $(".btn").click(function() {
    $(".btn").text('begin the game');
    choices(3);
  });
});