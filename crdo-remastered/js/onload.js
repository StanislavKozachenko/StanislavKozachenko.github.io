$(document).ready(function(){
        $('.top_header').load("templates/header.html", function(){
			function Event(){
			        event.preventDefault();
			}
			$(document).ready(function(){
			    $(".menu_fun").click(function() {
			        Event();
			    })
});
        });
        $('.feedback').load("templates/feedback.html", function(){
        	$('.user_data').click(function(){
		        $(".user_data").removeClass('user_data_clicked');
		        $('.feedback_content_element_add_text').css("opacity", "0");
		        $('.feedback_content_element_add_text', $(this).parent()).css("opacity", "1");
		        $('.feedback_content_element_add_text', $(this).parent()).css("transition", ".2s");
		        $(this).addClass('user_data_clicked');
		});
        });
        $('.footerClass').load("templates/footer.html");
        $('.middle_block_slider').load("templates/courses-slider.html", function(){
                $("#coursesSlider .owl-carousel").owlCarousel({
                    loop:true,
                    items: 1,
                    autoplay:true,
                    smartSpeed:1000, 
                    autoplayTimeout:2000,
                    margin: 15,
                    dots:true,
                    navText: false,
                    responsive: {
                        1000: {
                            autoplayTimeout:4000,
                        }
                    }
                });
        });
});