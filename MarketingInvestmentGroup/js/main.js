$(".scroll").click(function() {
    $('body, html').animate({ scrollTop: 0 }, 1000);
});

$(window).scroll( function(){
    $('.steps').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if ( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1','top':'0px'},300);
        }
    }); 
});

$(window).scroll( function(){
    $('#fourth').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        if( bottom_of_window + 250 > bottom_of_object ){
            $('#fourth .phone img').fadeIn( "slow");
        } else if ( bottom_of_window + 250 < bottom_of_object ) {
            $('#fourth .phone img').fadeOut( "slow");
        }
    }); 
});


$(window).scroll( function(){
    $('#intro .phone img').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        var bottom_of_section = $('#update').offset().top;
        
        if ( bottom_of_window > bottom_of_object ){
            $(this).css('position','fixed');
            $(this).css('bottom','0').delay(100);
        } else if ( bottom_of_window < bottom_of_section ){
            $(this).css('position','absolute');
            $(this).css('bottom','auto');
        }
    }); 
});

$(window).scroll( function(){
    $('#first .phone > img').each( function(i){
        var top_of_object = $(this).offset().top;
        var top_of_window = $(window).scrollTop();

        var top_of_section = $('#first').offset().top - $(window).height()*0.25;
        
        if ( top_of_window > top_of_object){
            $(this).css('position','fixed');
            $(this).css('top','0');
            
        } else if ( top_of_window < top_of_section ){
            $(this).css('position','absolute');
            $(this).css('top','-25vh');
        }
    }); 
});