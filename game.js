$(document).ready(function(){
   $('.start-btn').click(function(){
      var title=$('.title').val();
      $('.top').text(title);
      console.log(title);
      $('.start').hide();
      $('.mid').append("<div class='new-node'>Story:<input class='node' value='input description here'></input></div>");
      $('.mid').append("<div class='new-choice'>how many choices?<input class='choice-num'></input><button class='new-layer'>this many</button></div>");
   });
   $(document).on("click","button.new-layer",function(){
      var choices = $('input.choice-num').val();
      console.log("new layer added with " + choices + " choices.");
      $('.mid').toggle();
      if(!isNaN(choices) && parseInt(Number(choices)) == choices && !isNaN(parseInt(choices, 10))){
         console.log(choices);
         for(i = 0; i < choices; i++){
            $('div.btm').append("<div class='new-choice"+choices+" new-layer added'> Choice "+i+":<input class='choice-"+i+"'></input></div>");
            console.log(i);
         }
         $('div.top').append("<div>"+$('.node').val()+"</div>");
         console.log($('.node').val());
      } else {
         alert('numbers only, friend-o!');
      }
   });
});