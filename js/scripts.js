$(function(){
	$('.collapse').on('show.bs.collapse', function(){
		$(this).prev().find('.fa').removeClass().addClass('fa fa-minus-circle')
	});
	$('.collapse').on('hide.bs.collapse', function(){
		$(this).prev().find('.fa').removeClass().addClass('fa fa-plus-circle')
	});
    
	$('#myForm').validator({
		feedback: {
		  success: 'fa fa-check-circle',
		  error: 'fa fa-times-circle'
		}
	});
    
	new WOW().init();
    
     $(".js-register-btn").click(function() {
                
        var scrollToAbout = $("#js-register-form").offset().top;
        
        $("html, body").animate({
           scrollTop:  scrollToAbout
        }, 1000);
    });
        $("#js-discover-btn").click(function() {
                
        var scrollToAbout = $(".speakers").offset().top;
        
        $("html, body").animate({
           scrollTop:  scrollToAbout
        }, 800);
    });
});