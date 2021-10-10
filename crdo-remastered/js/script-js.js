	$(document).ready(function(){
			$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if( scrolled > 37 ) {
        $('.top_header').addClass('scrolled');
        $('.top_block_nav_logo_bg').css("opacity", "0");
        $('.top_header_logo_content').css("justify-content", "flex-start");
        $('.top_header_logo').css("transform", "translateY(0)");
        $('.nav_menu_burger').css("transform", "translateY(0)");
    }   
    if( scrolled <= 37 ) {     
        $('.top_header').removeClass('scrolled');
        $('.top_block_nav_logo_bg').css("opacity", "1");
        $('.top_header_logo_content').css("justify-content", "center");
       	$('.top_header_logo').css("transform", "translateY(-7px)");
        $('.nav_menu_burger').css("transform", "translateY(-7px)");
    }
});
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