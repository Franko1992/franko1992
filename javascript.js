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

//scrollTop button
$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });

        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        $('#back-to-top').tooltip('show');

});
