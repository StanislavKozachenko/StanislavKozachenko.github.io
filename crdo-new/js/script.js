function preloader(){
    $(()=> {
        setInterval(() => {
             let p = $('.preloader');
            p.css('opacity', 0);
            
            setInterval(
            () => p.remove(),
            parseInt(p.css('--duration')) * 1000,
          );

        }, 0);  
        
    });
}
function removeClassNav(){
		$('.nav_menu_link').removeClass("nav_menu_link_open");
		$('.top_menu_drop').removeClass('top_menu_drop_active');
		$('.nav_bottom_arrow').removeClass('nav_bottom_arrow_active');
		$('.menu_functions').removeClass('menu_functions_active');
        $('.add_corner').removeClass('add_corner_open');
        $('.add_corner_anim').removeClass('add_corner_anim_active');
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
    $('.add_corner_anim', this).addClass('add_corner_anim_active');
});
$(document).mouseup(function(e) {
    var container = $(".nav_menu_link");
    if (container.has(e.target).length === 0) // To disable on click.
        removeClassNav();
    $(window).scroll(function(e) {
        removeClassNav();
    });
});
function scrollSlow(id){
    var offset = 0;
    $('html, body').animate({
        scrollTop: $(id).offset ().top - offset - 150
    }, 1500);
    return false;
}
$(document).ready(function(){
    const $block = $('.news_content_blocks_element').first().clone();
    $('.news_content_btn_2').click(function() {
        $(".news_content_blocks").append($block.clone());
        $(".news_content_blocks").append($block.clone());
        $(".news_content_blocks").append($block.clone());
    });
});
const $block2 = $('.courses_examples_block_element').first().clone();
const $block3 = $('.hr_courses').first().clone();
const $block4 = $('.hr_courses_main').first().clone();
$('.show_more_btn').click(function() {
    $(".courses_examples_block").append($block4.clone());
    $(".courses_examples_block").append($block3.clone());
    $(".courses_examples_block").append($block2.clone());
    $(".courses_examples_block").append($block3.clone());
    $(".courses_examples_block").append($block2.clone());
});
$(document).ready(function(){
            $(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if( scrolled > 1000 ) {
            $('.anchor').addClass("anchor_active");
        }
        else {
            $('.anchor').removeClass("anchor_active");
        }
    });
            $('.anchor').click(function(){
                scrollSlow(".wrapper");
            })
});
preloader();