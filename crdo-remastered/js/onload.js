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
				$('.mobile_table_name').click(function(){
      			$('.relation__drop > .mobile_table_block_drop', $(this).parent()).toggleClass('mobile_table_block_drop_open');
		        $('.mobile_alert', $(this).parent()).toggleClass('mobile_alert_open');
		    });
		    $('.alert_burger').click(function(){
		        $('.burger_drop_menu', $(this).parent()).toggleClass("burger_drop_menu_off");
		        $('.burger_drop_menu', $(this).parent()).toggleClass("burger_drop_menu_static");
		        $('.alert_arrow', $(this).parent()).toggleClass("alert_arrow_active");
		    });
		    $('.nav_menu_burger').click(function(){
		        $('.alerts_burger').toggleClass("dsplayNn");
		        $('.nav_burger_menu_main').toggleClass("nav_burger_menu_main_active");
		        $('.nav_burger_menu_main').toggleClass('nav_burger_menu_main_open');
		        setTimeout(function(){$('.nav_menu_burger').delay().toggleClass("nav_menu_burger_active");},1)
		        $(".top_out_btn").addClass('disable');
		        $(".burger_btn").click(function(){
		           $('.nav_menu_burger').removeClass('disable');
		        });
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
        	$(document).mouseup(function (e){ // событие клика по веб-документу
		    var div = $(".user_data"); // тут указываем ID элемента
		    if (!div.is(e.target) // если клик был не по нашему блоку
		        && div.has(e.target).length === 0) { // и не по его дочерним элементам
		            $('.feedback_content_element_add_text', $(".user_data").parent()).css("opacity", "0");
		            $('.feedback_content_element_add_text', $(".user_data").parent()).css("transition", ".2s");
		            $(".user_data").removeClass('user_data_clicked');
		    }
		  });
        	 $(document).mouseup(function (e){ // событие клика по веб-документу
			    var div = $(".user_data"); // тут указываем ID элемента
			    if (!div.is(e.target) // если клик был не по нашему блоку
			        && div.has(e.target).length === 0) { // и не по его дочерним элементам
			            $('.feedback_content_element_add_text', $(".user_data").parent()).css("opacity", "0");
			            $('.feedback_content_element_add_text', $(".user_data").parent()).css("transition", ".2s");
			            $(".user_data").removeClass('user_data_clicked');
			    }
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
