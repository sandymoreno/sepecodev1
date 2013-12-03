$(document).ready(function(){
    var $head = $( '#main-menu' );
    $( '.ha-waypoint' ).each( function(i) {
        var $el = $( this ),
            animClassDown = $el.data( 'animateDown' ),
            animClassUp = $el.data( 'animateUp' );

        $el.waypoint( function( direction ) {
            if( direction === 'down' && animClassDown ) {
                $head.removeClass('ha-header ' + animClassUp);
                $head.addClass('ha-header ' + animClassDown);
                $head.slideDown();
            }
            else if( direction === 'up' && animClassUp ){
                $head.removeClass('ha-header ' + animClassDown);
                $head.addClass('ha-header ' + animClassUp);
            }
        }, { offset: '30%' } );
    } );



    $('.scroll, .nav a').click(function(event) {
        var href = $(this).attr('href'),
            offsetTop = $(href).offset().top-50;
        $('html, body').stop().animate({scrollTop: offsetTop}, 1000);
        return false;
    });

        $(".th").colorbox();


//    $('#home').css('height', window.innerHeight);


});

