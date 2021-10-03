function removeClassNav(){
		$('.nav_menu_link').removeClass("nav_menu_link_open");
		$('.top_menu_drop').removeClass('top_menu_drop_active');
		$('.nav_bottom_arrow').removeClass('nav_bottom_arrow_active');
		$('.menu_functions').removeClass('menu_functions_active');
        $('.add_corner').removeClass('add_corner_open');
}
$(document).on('click', '.nav_menu_link', function(){
	$(document).on('click', '.nav_menu_link_open', function(){
		removeClassNav();
	});
	removeClassNav();
	$(this).addClass("nav_menu_link_open");
	$('.top_menu_drop', this).addClass('top_menu_drop_active');
	$('.nav_bottom_arrow', this).addClass('nav_bottom_arrow_active');
	$('.menu_functions', this).addClass('menu_functions_active');
    $('.add_corner', this).addClass('add_corner_open');
});
/*$(document).mouseup(function(e) {
    var container = $(".nav_menu_link");
    if (container.has(e.target).length === 0) // To disable on click.
        removeClassNav();
});*/
function scrollSlow(id){
    var offset = 0;
    $('html, body').animate({
        scrollTop: $(id).offset ().top - offset - 150
    }, 500);
    return false;
}
/*$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if( scrolled > 97 ) {
        $('.top_header').addClass('scrolled');
        $('.top_block_nav_logo_bg').css("opacity", "0");
    }   
    if( scrolled <= 97 ) {     
        $('.top_header').removeClass('scrolled');
        $('.top_block_nav_logo_bg').css("opacity", "1");
    }
});*/
    $('.top_header').load("templates/header.html");
    $('.feedback').load("templates/feedback.html");
    $('.footerClass').load("templates/footer.html");
    $('.middle_block_slider').load("templates/courses-slider.html");
$(document).ready(function(){
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
    $('.user_data').click(function(){
        $(".user_data").removeClass('user_data_clicked');
        $('.feedback_content_element_add_text').css("opacity", "0");
        $('.feedback_content_element_add_text', $(this).parent()).css("opacity", "1");
        $('.feedback_content_element_add_text', $(this).parent()).css("transition", ".2s");
        $(this).addClass('user_data_clicked');
});
jQuery(function($){
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
const $block = $('.news_content_blocks_element').first().clone();
$('.news_content_btn').click(function() {
    $(".news_content_blocks").append($block.clone());
    $(".news_content_blocks").append($block.clone());
    $(".news_content_blocks").append($block.clone());
});
});
const $block2 = $('.courses_examples_block_element').first().clone();
const $block3 = $('.hr_courses').first().clone();
$('.show_more_btn').click(function() {
    $(".courses_examples_block").append($block3.clone());
    $(".courses_examples_block").append($block2.clone());
});
