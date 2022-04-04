function paused(){
	 			$('.fadeEffectOne').css("animation-play-state", "paused");
                $(".one_fade").css("animation-play-state", "paused");
                $(".two_fade").css("animation-play-state", "paused");
                $(".one_fade_img").css("animation-play-state", "paused");
                $(".two_fade_img").css("animation-play-state", "paused");

                $('.fadeEffectTwo').css("animation-play-state", "paused");
                $(".three_fade").css("animation-play-state", "paused");
                $(".four_fade").css("animation-play-state", "paused");
                $(".three_fade").css("animation-play-state", "paused");
                $(".four_fade_img").css("animation-play-state", "paused");
                $(".three_fade_img").css("animation-play-state", "paused");

                $('.fadeEffectThree').css("animation-play-state", "paused");
                $(".five_fade").css("animation-play-state", "paused");
                $(".six_fade").css("animation-play-state", "paused");
                $(".five_fade_img").css("animation-play-state", "paused");
                $(".six_fade_img").css("animation-play-state", "paused");
}
function running(){
				$('.fadeEffectOne').css("animation-play-state", "running");
                $(".one_fade").css("animation-play-state", "running");
                $(".two_fade").css("animation-play-state", "running");
                $(".one_fade_img").css("animation-play-state", "running");
                $(".two_fade_img").css("animation-play-state", "running");

                $('.fadeEffectTwo').css("animation-play-state", "running");
                $(".three_fade").css("animation-play-state", "running");
                $(".four_fade").css("animation-play-state", "running");
                $(".three_fade").css("animation-play-state", "running");
                $(".four_fade_img").css("animation-play-state", "running");
                $(".three_fade_img").css("animation-play-state", "running");

                $('.fadeEffectThree').css("animation-play-state", "running");
                $(".five_fade").css("animation-play-state", "running");
                $(".six_fade").css("animation-play-state", "running");
                $(".five_fade_img").css("animation-play-state", "running");
                $(".six_fade_img").css("animation-play-state", "running");
}
$(document).ready(function(){
	paused();
	let k = 0, f = 0, z = 0;
	 var container = $('.fadeMainBlock'),
		 blockInfo = $('.fadeEffectOne'),
		  blockInfo2 = $('.fadeEffectTwo'),
		   blockInfo3 = $('.fadeEffectThree'),
        win = $(window),
        windowHeight = win.height();
    	windowWidth = win.width();
    	$( window ).resize(function() {
			windowHeight = win.height();
    		windowWidth = win.width();
    	});
    	if(windowHeight >= container.offset().top && windowHeight <= container.offset().bottom) {
    		running();
    	}
    	else {
    		paused();
    	}
    	if(windowWidth <= 1023){
	    	win.scroll(function () {
		        var scrollPos = $(this).scrollTop(),
		            containerPos = container.offset().top,
		            containerHeight = container.height(),
		            blockInfoScroll = blockInfo.offset().top;
		            console.log(blockInfoScroll);
		            console.log(scrollPos);
		        if ((scrollPos >= containerPos - windowHeight/1.5) && (scrollPos <= containerHeight + 100) && (scrollPos >= blockInfoScroll - 550))
		            running();
		        else
		        	paused();
		    });
    	}
    	else {
    		win.scroll(function () {
		        var scrollPos = $(this).scrollTop(),
		            containerPos = container.offset().top,
		            containerHeight = container.height(),
		            blockInfoScroll = blockInfo.offset().top,
		             blockInfoScroll2 = blockInfo2.offset().top,
		              blockInfoScroll3 = blockInfo3.offset().top,
		               fadeHeight = blockInfo.height(),
		            fadeHeight2 = blockInfo2.height(),
		            fadeHeight3 = blockInfo3.height();
		        if ((scrollPos >= containerPos - windowHeight/1.5) && (scrollPos <= containerHeight + 600)){        
		       		if((scrollPos >= blockInfoScroll - windowHeight/1.5) && (scrollPos <= fadeHeight + 390)){
		       			k = 1;
		       			running();
			       	}
			       	else{
			       		k = 0;
			       		paused();
			       		if((scrollPos >= blockInfoScroll2 - windowHeight/1.5) && (scrollPos <= fadeHeight2 + fadeHeight + 357)){
				       		f = 1;
				       		running();
				       	}
				       	else{
				       		z = 0;
				       		paused();
				       			if((scrollPos >= blockInfoScroll3 - windowHeight/1.5) && (scrollPos <= fadeHeight3 + fadeHeight2 + fadeHeight + 540)){
						       		z = 1;
						       		running();
						       	}
						       	else {
						       		z = 0;
						       		paused();
						       	}
				       	}
				       
			       	}
			       	if(k == 1){
				       	if((scrollPos >= blockInfo2 + 33.5 - windowHeight/1.5) && (scrollPos <= fadeHeight2 + fadeHeight + 357)){
					       		f = 1;
					       		running();
					       	}
					       	else{
					       		z = 0;
					       		paused();
					       			if((scrollPos >= blockInfo3 - windowHeight/1.5) && (scrollPos <= fadeHeight3 + fadeHeight2 + fadeHeight + 630)){
							       		z = 1;
							       		running();
							       	}
							       	else {
							       		z = 0;
							       		paused();
							       	}
					       	}
				       }
				       if(k == 1 && f == 1){
				       	if((scrollPos >= blockInfo3 - windowHeight/1.5) && (scrollPos <= fadeHeight3 + fadeHeight2 + fadeHeight + 630)){
						       		z = 1;
						       		running();
						       	}
						       	else {
						       		z = 0;
						       		paused();
						       	}
						 }
			       		
		       }
		        else
		        {
		        	paused();
		        }
		    });
    	}
});