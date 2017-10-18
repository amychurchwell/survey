$('document').ready(function(){
  $('#survey').submit(function(event){
  var cat1 = $("input:radio[name=cats]:checked").val();
  console.log(cat1);
  var food1 = $("#food").val();
  console.log(food1);
  var favoriteColor1 = $("#color").val();
  console.log(favoriteColor1);
  $('#sentence').show();
  $('#colorSpan').css("background", favoriteColor1);
  $('#colorSpan').text(favoriteColor1);
  $('#catSpan').text(cat1);
  $('#foodSpan').text(food1);

  event.preventDefault();
  });
});
