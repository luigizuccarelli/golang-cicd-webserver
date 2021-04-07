(function ($) {

    'use strict';
	
    // ------------------------------------------------------- //
    // Countdown
    // ------------------------------------------------------ //
    $('#countdown').countdown('2020/12/31', function(event) {
	    var $this = $(this).html(event.strftime(''
			+ '<div class="counter"><span>%D</span><p>Days</p></div>'
			+ '<div class="counter"><span>%H</span><p>Hours</p></div>'
			+ '<div class="counter"><span>%M</span><p>Minutes</p></div>'
			+ '<div class="counter"><span>%S</span><p>Seconds</p></div>'
		));
	});

})(jQuery);