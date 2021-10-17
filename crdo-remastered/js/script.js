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
$('.show_more_btn').click(function() {
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
                scrollSlow("#wrpper");
            })
});
$(document).ready(function(){
    let block_height = $('.dev_block_main').offset().top;
    let block_height_bottom = $('.price_list').offset().top;
    let block_height_2 = $('.fadeEffectTwo').offset().top;
    let block_height_3 = $('.fadeEffectThree').offset().top;
    height = document.documentElement.clientHeight;
    if($(document).width() <= 1000){
        $('.fadeEffectOne').css("animation-play-state", "paused");
        window.addEventListener('scroll', progressBar);
                let checkAnim = 0, checkAnim2 = 0;
        function progressBar(e){
                let block_height_1 = $('.fadeEffectOne').offset().top;
            let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if(windowScroll >= block_height && windowScroll <= block_height_bottom){
            console.log(block_height_1);
            console.log(windowScroll);
            if(block_height_1 > windowScroll + 600){
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
            }else 
           {
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
        } else {
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
    }
    } else {
    window.addEventListener('scroll', progressBar);
                let checkAnim = 0, checkAnim2 = 0;
        function progressBar(e){
            const animated = document.querySelector('.two_fade_img');
            const animated_2 = document.querySelector('.four_fade_img');
            let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let percent = -(windowScroll - block_height)/(block_height_bottom - block_height) * 100;
            console.log(percent);
        if(windowScroll >= block_height-600&& windowScroll <= block_height_bottom-300){
                console.log("Done");
            if(percent <= 35 && (checkAnim != 1 && checkAnim2 != 1)){
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
            } else {
           if(percent <= 100){
                $('.fadeEffectOne').css("animation-play-state", "running");
                $(".one_fade").css("animation-play-state", "running");
                $(".two_fade").css("animation-play-state", "running");
                $(".one_fade_img").css("animation-play-state", "running");
                $(".two_fade_img").css("animation-play-state", "running");
                animated.addEventListener('animationend', () => {
                    checkAnim = 1;
                });
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
           if(percent <= 85){
                if(checkAnim == 1){
                    $('.fadeEffectTwo').css("animation-play-state", "running");
                    $('.fadeEffectTwo').css("animation-delay", "0s");
                    $(".three_fade").css("animation-play-state", "running");
                    $('.three_fade').css("animation-delay", "1.9s");
                    $(".four_fade").css("animation-play-state", "running");
                    $('.four_fade').css("animation-delay", "3.7s");
                    $(".three_fade_img").css("animation-play-state", "running");
                    $('.three_fade_img').css("animation-delay", "2.6s");
                    $(".four_fade_img").css("animation-play-state", "running");
                    $('.four_fade_img').css("animation-delay", "5s");
                }
                animated_2.addEventListener('animationend', () => {
                    checkAnim2 = 1;
                });               
           }
           if(percent <= 50){
            if(checkAnim == 1 && checkAnim2 == 1){
                   $('.fadeEffectThree').css("animation-play-state", "running");
                   $('.fadeEffectThree').css("animation-delay", "0s");
                    $(".five_fade").css("animation-play-state", "running");
                    $(".five_fade").css("animation-delay", "2.2s");
                    $(".six_fade").css("animation-play-state", "running");
                    $(".six_fade").css("animation-delay", "6s");
                    $(".five_fade_img").css("animation-play-state", "running");
                    $(".five_fade_img").css("animation-delay", "4s");
             }
           }
       }
        }
    else {
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
}
    }
});