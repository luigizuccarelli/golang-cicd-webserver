(function ($) {

    'use strict';
	
    $('#sbp').circleProgress({
        value: 117.0/220.0,
        size: 120,
        startAngle: -Math.PI / 2,
        thickness: 10,
        lineCap: 'round',
        emptyFill: '#f0eff4',
        fill: {
            gradient: ['#3CBC3C','#3CBC3C']
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.percent').html('<i></i>' + Math.round(117 * progress) + '<i></i>');
    });
	
    $('#hr').circleProgress({
        value: 111.0/220.0,
        size: 120,
        startAngle: -Math.PI / 2,
        thickness: 10,
        lineCap: 'round',
        emptyFill: '#f0eff4',
        fill: {
            gradient: ['#ffc107','#ffc107']
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.percent').html('<i></i>' + Math.round(111 * progress) + '<i></i>');
    });

    $('#spo2').circleProgress({
        value: 96.0/100.0,
        size: 120,
        startAngle: -Math.PI / 2,
        thickness: 10,
        lineCap: 'round',
        emptyFill: '#f0eff4',
        fill: {
            gradient: ['#3CBC3C','#3CBC3C']
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.percent').html('<i></i>' + Math.round(96 * progress) + '<i>%</i>');
    });

    $('#t').circleProgress({
        value: 39.0/41.0,
        size: 120,
        startAngle: -Math.PI / 2,
        thickness: 10,
        lineCap: 'round',
        emptyFill: '#f0eff4',
        fill: {
            gradient: ['#dc3545','#dc3545']
        }
    }).on('circle-animation-progress', function (event, progress) {
        
        $(this).find('.percent').html('<i></i>' + (39.5 * progress).toFixed(1) + '<i>&deg;</i>');
    });

    $('#rr').circleProgress({
        value: 16.0/25.0,
        size: 120,
        startAngle: -Math.PI / 2,
        thickness: 10,
        lineCap: 'round',
        emptyFill: '#f0eff4',
        fill: {
            gradient: ['#3CBC3C','#3CBC3C']
        }
    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('.percent').html('<i></i>' + Math.round(16 * progress) + '<i></i>');
    });

	
})(jQuery);
