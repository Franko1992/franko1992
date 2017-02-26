$(document).ready(function() {
	$(".fancybox-button").fancybox({
		prevEffect		: 'none',
		nextEffect		: 'none',
		closeBtn		: false,
		helpers		: {
			title	: { type : 'inside' },
			buttons	: {}
		}
	});
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

				$(function () {
				  $('[data-toggle="tooltip"]').tooltip()
				})



				$(document).ready(function(){

				  $('body').scrollspy({target: ".navbar", offset: 50});
				  $("#navbar a").on('click', function(event) {
				    if (this.hash !== "") {
				      event.preventDefault();
				      var hash = this.hash;
				      $('html, body').animate({
				        scrollTop: $(hash).offset().top
				      }, 1000, function(){
				        window.location.hash = hash;
				      });
				    }
				  });
				});


});
