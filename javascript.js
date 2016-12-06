$(document).ready(function() {
  $('#foto').mouseover(function() {
    $('.pomieszczenia').show();
  });
});

$(document).ready(function() {
 $('#foto').mouseout(function() {
   $('.pomieszczenia').hide();
  });
 });
