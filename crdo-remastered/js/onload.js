$(document).ready(function(){
		function Event(){
			        event.preventDefault();
		}
        $('.top_header').load("templates/header.html", function(){
			$(document).ready(function(){
			    $(".menu_fun").click(function() {
			        Event();
			    });
			    $('.alert_burger_on').click(function(){
					Event();
			    });
			});
		    $('.alert_burger_on').click(function(){
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
        	function validateEmail(email) {
			    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			    return re.test(String(email).toLowerCase());
			}
        	$('.user_data').click(function funct(){
		        $(".user_data").removeClass('user_data_clicked');
		        $('.feedback_content_element_add_text').css("opacity", "0");
		        $('.feedback_content_element_add_text', $(this).parent()).css("opacity", "1");
		        $('.feedback_content_element_add_text', $(this).parent()).css("transition", ".2s");
		        $(this).addClass('user_data_clicked');
		});
        	    $(".feedback_right_bottom_button").click(function(){
        			if ($('.user_fio').val().length == 0 || $('.user_email').val().length == 0 || $('.user_text').val().length == 0) {
        				if($('.user_fio').val().length == 0){
        					$('.user_fio').css("box-shadow","inset 0px 0px 1px 1.1px #ea9542");
        					$('.user_fio').css("border","1px solid #ea9542");
        					$('.feedback_content_element_add_text', $('.user_fio').parent()).css("color", "#ea9542");
        				}
        				if($('.user_email').val().length == 0){
        					$('.user_email').css("box-shadow","inset 0px 0px 1px 1.1px #ea9542");
        					$('.user_email').css("border","1px solid #ea9542");
        					$('.feedback_content_element_add_text', $('.user_email').parent()).css("color", "#ea9542");
        				}
        				if($('.user_text').val().length == 0){
        					$('.user_text').css("box-shadow","inset 0px 0px 1px 1.1px #ea9542");
        					$('.user_text').css("border","1px solid #ea9542");
        					$('.feedback_content_element_add_text', $('.user_text').parent()).css("color", "#ea9542");
        				}
        				$(this).css("background-color", "#ea9542");
        				$(this).css("box-shadow", "0px 0px 3px #ea9542");
        				Event();
        			}
        			$(".feedback").click(function(){
						if ($('.user_fio').val().length != 0 && $('.user_email').val().length != 0 && $('.user_text').val().length != 0){
							$(".feedback_right_bottom_button").css("background-color", "#1C3F77");
        					$(".feedback_right_bottom_button").css("box-shadow", "0px 0px 3px #406aad");
						}
						if($('.user_fio').val().length != 0){
        					$('.user_fio').css("box-shadow","inset 0px 0px 1px 1.1px #1C3F77");
        					$('.user_fio').css("border","1px solid #1C3F77");
        					$('.feedback_content_element_add_text', $('.user_fio').parent()).css("color", "#1C3F77");
        				}
        				if($('.user_email').val().length != 0){
        					if (validateEmail($('.user_email').val())) {
    							$('.user_email').css("box-shadow","inset 0px 0px 1px 1.1px #1C3F77");
        						$('.user_email').css("border","1px solid #1C3F77");
        						$('.feedback_content_element_add_text', $('.user_email').parent()).css("color", "#1C3F77");
        					} else
        					{
        						$('.user_email').css("box-shadow","inset 0px 0px 1px 1.1px #ea9542");
        						$('.user_email').css("border","1px solid #ea9542");
        						$('.feedback_content_element_add_text', $('.user_email').parent()).css("color", "#ea9542");
        						$(".feedback_right_bottom_button").css("background-color", "#ea9542");
		        				$(".feedback_right_bottom_button").css("box-shadow", "0px 0px 3px #ea9542");
		        				Event();
        					}

        				}
        				if($('.user_text').val().length != 0){
        					$('.user_text').css("box-shadow","inset 0px 0px 1px 1.1px #1C3F77");
        					$('.user_text').css("border","1px solid #1C3F77");
        					$('.feedback_content_element_add_text', $('.user_text').parent()).css("color", "#1C3F77");
        				}
					});
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
                    autoplayTimeout: 3000,
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