//Editing class...
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
function scrollSlow(id){
    var offset = 0;
    $('html, body').animate({
        scrollTop: $(id).offset ().top - offset - 150
    }, 500);
    return false;
}
preloader();
$(".menuBtn").click(function(e){
 if($(e.target).hasClass('btnContent') || $(e.target).hasClass('burgerMenu') || $(e.target).hasClass('burgerMenuSpan') || $(e.target).hasClass('menuBtnName')) {
  	 $(".menuBlock").toggleClass('menuOff');
  	 $(".burgerMenu").toggleClass('burgerMenuActive');
  }
});
$(".middleBlockContentElement").click(function(){
 if($(".openArrow", this).attr('src') == 'img/arrowClose.svg') {
 	$(".openArrow", this).attr('src', "img/arrowOpen.svg");
 	$(".middleBlockContentElementText", this).removeClass('textDisable');
 	$(".middleBLockContentElementSources", this).addClass('textDisable');
 }
 else {
 	$(".middleBlockContentElementText", this).addClass('textDisable');
 	$(".middleBLockContentElementSources", this).removeClass('textDisable');
 	$('.openArrow', this).attr('src', "img/arrowClose.svg");
 }
});
/**/
/**/
$(".menuList").click(function(){
	if($(this).hasClass('active'))
		$(this).removeClass('active');
	else {		
		$(".menuList.active").removeClass('active');
		$(this).addClass('active');
	}
});
$(".owl-next").click(function(){
	$(".owl-next").toggleClass('arrowChange');
});
if($(window).width() >= 1200){
	  $(".searchBtn").click(function(){
	  $(".searchBtn").removeClass("searchBtnOff");
	  $(".hiddenSearchZone").css("visibility", "visible");
	  $(".hiddenSearchZone").css("opacity", "1");
      $(".buttonOff").css("display", "block");
      $(".buttonOff").css("padding", "0 13px");
      $(".iconOff").css("display", "none");
      $('.toggleIconButtonFind').css("display", "block");
      $('.searchBtn').css("padding", "0");
});

}
else {
    
	  	$('.searchBtn').click(function(e){
            if($(".toggleIconFind").attr('src') == 'img/findIcon.svg'){
    	  		$(".searchZone").addClass('searchZoneSmall');
                $(".searchZone").css("display", "block");
                $(".customInput").removeClass('customInputNone');
                $(".Loopa").css("display", "block");
                $(".toggleIconFind").attr('src', 'img/closeSvg.svg');
            } else {
                console.log("SUKA@");
                $(".toggleIconFind").attr('src','img/findIcon.svg');
                $(".searchZone").css("display", "none");
                $(".searchZone").removeClass('searchZoneSmall');
                $(".customInput").addClass('customInputNone');
                $(".Loopa").css("display", "none");
            }
	  	});
	  	$('.searchZone').addClass('searchZoneAdaptive');
      
}
//Popup
$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});
//Carousel...
$(document).ready(function(){
  $("#newsCarousel .owl-carousel").owlCarousel({
	loop:true,
    items: 1,
    autoplay:true,
    smartSpeed:1000, 
    autoplayTimeout:8000,
    margin: 15,
    dots:false,
                nav:true,
            navContainer: "#newsCarousel .section-title .owl-nav",
            navText : ['<svg class="svgActive" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="2" fill="#EFF2F6"/><path d="M18.1742 24.9497L18.8371 24.331L14.664 20.4362L25.6618 20.4362L25.6618 19.5638L14.664 19.5638L18.8371 15.669L18.1742 15.0502L12.8709 20L18.1742 24.9497Z" fill="#305EA2"/></svg><svg class="svgDisable svgNonActive" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="2" fill="#EFF2F6"/><path d="M18.7626 24.9497L19.3813 24.331L15.4864 20.4362L25.751 20.4362L25.751 19.5638L15.4864 19.5638L19.3813 15.669L18.7626 15.0503L13.8128 20L18.7626 24.9497Z" fill="#CACFD7"/></svg>','<svg class="svgActive" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="2" fill="#EFF2F6"/><path d="M20.8258 15.0503L20.1629 15.669L24.336 19.5638L13.3382 19.5638L13.3382 20.4362L24.336 20.4362L20.1629 24.331L20.8258 24.9498L26.1291 20L20.8258 15.0503Z" fill="#305EA2"/></svg><svg class="svgDisable svgRightActive" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="2" fill="#EFF2F6"/><path d="M21.2374 15.0503L20.6187 15.669L24.5136 19.5638L14.249 19.5638L14.249 20.4362L24.5136 20.4362L20.6187 24.331L21.2374 24.9497L26.1872 20L21.2374 15.0503Z" fill="#CACFD7"/></svg>'],
 
    responsive: {
    	740: {
    		items: 2,
    		margin: 10,
    	},
    	1200: {
    		items: 3,
    		margin: 15,
           dots: true,

    	},
    }
  });
  $("#partnersCarousel .owl-carousel").owlCarousel({
	items: 1,
	nav:true,  
    loop:true,
    autoplay:true,
    smartSpeed:1000, 
    autoplayTimeout:8000, 
    dots: false,
    margin: 40,
    navText : ['<svg class="svgActive" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="2" fill="#EFF2F6"/><path d="M18.1742 24.9497L18.8371 24.331L14.664 20.4362L25.6618 20.4362L25.6618 19.5638L14.664 19.5638L18.8371 15.669L18.1742 15.0502L12.8709 20L18.1742 24.9497Z" fill="#305EA2"/></svg><svg class="svgDisable svgNonActive" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="2" fill="#EFF2F6"/><path d="M18.7626 24.9497L19.3813 24.331L15.4864 20.4362L25.751 20.4362L25.751 19.5638L15.4864 19.5638L19.3813 15.669L18.7626 15.0503L13.8128 20L18.7626 24.9497Z" fill="#CACFD7"/></svg>','<svg class="svgActive" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="2" fill="#EFF2F6"/><path d="M20.8258 15.0503L20.1629 15.669L24.336 19.5638L13.3382 19.5638L13.3382 20.4362L24.336 20.4362L20.1629 24.331L20.8258 24.9498L26.1291 20L20.8258 15.0503Z" fill="#305EA2"/></svg><svg class="svgDisable svgRightActive" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="2" fill="#EFF2F6"/><path d="M21.2374 15.0503L20.6187 15.669L24.5136 19.5638L14.249 19.5638L14.249 20.4362L24.5136 20.4362L20.6187 24.331L21.2374 24.9497L26.1872 20L21.2374 15.0503Z" fill="#CACFD7"/></svg>'],
    navContainer: "#partnersCarousel .section-title .owl-nav",
    responsive : {
    	375: {
    		items: 2,
    		margin: 10,
    	},
    	740: {
            dots: true,
    		items: 3,
    		margin: 30,
            dotsEach: 5,
    	},
    	840: {
            dots: true,
            items: 4,
            margin: 40,
            dotsEach: 5,
        },
    	1000: {
            dots: true,
            items: 5,
            margin: 30,
            dotsEach: 5,
        },
    },
  });
   $("#docsCarousel .owl-carousel").owlCarousel({
    items: 1,    
    loop:true,
    autoplay:true,
    smartSpeed:1000, 
    autoplayTimeout:8000, 
    dots: false,
    margin: 40, 
                nav:true,
            navContainer: "#docsCarousel .section-title .owl-nav",
            navText : ['<svg class="svgActive" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="2" fill="#EFF2F6"/><path d="M18.1742 24.9497L18.8371 24.331L14.664 20.4362L25.6618 20.4362L25.6618 19.5638L14.664 19.5638L18.8371 15.669L18.1742 15.0502L12.8709 20L18.1742 24.9497Z" fill="#305EA2"/></svg><svg class="svgDisable svgNonActive" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="2" fill="#EFF2F6"/><path d="M18.7626 24.9497L19.3813 24.331L15.4864 20.4362L25.751 20.4362L25.751 19.5638L15.4864 19.5638L19.3813 15.669L18.7626 15.0503L13.8128 20L18.7626 24.9497Z" fill="#CACFD7"/></svg>','<svg class="svgActive" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="2" fill="#EFF2F6"/><path d="M20.8258 15.0503L20.1629 15.669L24.336 19.5638L13.3382 19.5638L13.3382 20.4362L24.336 20.4362L20.1629 24.331L20.8258 24.9498L26.1291 20L20.8258 15.0503Z" fill="#305EA2"/></svg><svg class="svgDisable svgRightActive" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="2" fill="#EFF2F6"/><path d="M21.2374 15.0503L20.6187 15.669L24.5136 19.5638L14.249 19.5638L14.249 20.4362L24.5136 20.4362L20.6187 24.331L21.2374 24.9497L26.1872 20L21.2374 15.0503Z" fill="#CACFD7"/></svg>'],
 
    responsive : {
        375: {
            items: 2,
            margin: 10,
        },
        740: {
            dots: true,
            items: 3,
            margin: 30,
            dotsEach: 5,
                },
        840: {
            dots: true,
            items: 4,
            margin: 40,
            dotsEach: 5,
                },
        1000: {
            dots: true,
            items: 5,
            margin: 30,
            dotsEach: 5,
       },
    },
  });
  $("#partnersCarousel-2 .owl-carousel").owlCarousel({
    items: 1,
    nav:true,  
    loop:true,
    autoplay:true,
    smartSpeed:1000, 
    autoplayTimeout:8000, 
    dots: false,
    margin: 40,
    navText : ['<svg class="svgActive" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="2" fill="#EFF2F6"/><path d="M18.1742 24.9497L18.8371 24.331L14.664 20.4362L25.6618 20.4362L25.6618 19.5638L14.664 19.5638L18.8371 15.669L18.1742 15.0502L12.8709 20L18.1742 24.9497Z" fill="#305EA2"/></svg><svg class="svgDisable svgNonActive" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="2" fill="#EFF2F6"/><path d="M18.7626 24.9497L19.3813 24.331L15.4864 20.4362L25.751 20.4362L25.751 19.5638L15.4864 19.5638L19.3813 15.669L18.7626 15.0503L13.8128 20L18.7626 24.9497Z" fill="#CACFD7"/></svg>','<svg class="svgActive" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="2" fill="#EFF2F6"/><path d="M20.8258 15.0503L20.1629 15.669L24.336 19.5638L13.3382 19.5638L13.3382 20.4362L24.336 20.4362L20.1629 24.331L20.8258 24.9498L26.1291 20L20.8258 15.0503Z" fill="#305EA2"/></svg><svg class="svgDisable svgRightActive" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="2" fill="#EFF2F6"/><path d="M21.2374 15.0503L20.6187 15.669L24.5136 19.5638L14.249 19.5638L14.249 20.4362L24.5136 20.4362L20.6187 24.331L21.2374 24.9497L26.1872 20L21.2374 15.0503Z" fill="#CACFD7"/></svg>'],
    navContainer: "#partnersCarousel-2 .section-title .owl-nav",
    responsive : {
        375: {
            items: 2,
            margin: 10,
        },
        740: {
            dots: true,
            items: 3,
            margin: 30,
            dotsEach: 5,
        },
        840: {
            dots: true,
            items: 4,
            margin: 40,
            dotsEach: 5,
        },
        1000: {
            dots: true,
            items: 5,
            margin: 30,
            dotsEach: 5,
        },
    },
  });
});
$(document).ready(function(){
	$(".owl-prev").hover(function(){
		$(".svgActive", this).toggleClass('svgDisable');
		$(".svgNonActive", this).toggleClass('svgDisable');
	});
	$(".owl-next").hover(function(){
		$(".svgActive", this).toggleClass('svgDisable');
		$(".svgRightActive", this).toggleClass('svgDisable');
	});
});
$(document).ready(function () {
    $.magnificPopup.open({
        items: {
            src: '#geoIp',
            type: 'inline'
        }
    });
    $('.openCityModal').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
        callbacks: {
        //   beforeOpen: function() {
        //     $('.alhabet_scroll').mCustomScrollbar('destroy');
        //   },
          open: function() {
            // $('.alhabet_scroll').mCustomScrollbar({
            //   theme: "dark",
            // });
            $('#autocomplete-ajax').autocomplete({
              serviceUrl: '/ajax/city.json',
              onSelect: function (suggestion) {
                citySelect(suggestion.data, suggestion.value)
              }
            });
          }
        }
      });
});

$(document).on('click', '.city_item', function () {
    var id = $(this).data("id");
    const name = $(this).text();
    citySelect(id, name)
});

$(document).on('click', '.aplly_city', function () {
    var id = $(this).data("id");
    const name = $(this).data("name");
    citySelect(id, name)
});
$(document).ready(function() {
    $(".showMore").click(function () {
        $(this).addClass('btnDisable');
        $('.showMoreContent').css("display", "flex");
    });
});
$(document).ready(function() {
/**/
    $(".showOn1").click(function(){
        $(".contactMainBlockBottomSide").addClass('map-disable');
        $(".contactMainBlockBottomSide").removeClass('map-active');
        $(".map-1").removeClass("map-disable");
        $(".map-1").addClass("map-active");
        scrollSlow("#map1");
    });
    $(".showOn2").click(function(){
        $(".contactMainBlockBottomSide").addClass('map-disable');
        $(".contactMainBlockBottomSide").removeClass('map-active');
        $(".map-2").removeClass("map-disable");
        $(".map-2").addClass("map-active");
        scrollSlow("#map2");
    });
    $(".showOn3").click(function(){
        $(".contactMainBlockBottomSide").addClass('map-disable');
        $(".contactMainBlockBottomSide").removeClass('map-active');
        $(".map-3").removeClass("map-disable");
        $(".map-3").addClass("map-active");
        scrollSlow("#map3");
    });
});
function citySelect(id, name) {
    console.log("Заглушка");
    closePopup();
    // var param = 'id='+id+"&name="+name;
    // $.ajax({
    //     url:     '/ajax/city_change.php',
    //     type:     "GET",
    //     dataType: "html",
    //     data: param,
    //     success: function(response) {
    //         var result = $.parseJSON(response);
    //         if(result == 1){
    //         location.reload();
    //         }
    //         if(result == 2){

    //         }
    //     },
    //     error: function(jqXHR, textStatus, errorThrown){
    //         console.log('Error: '+ errorThrown);
    //     }
    // });
}
function closePopup() {
    $.magnificPopup.close();
}
$(function() {
            $("[data-fancybox]").fancybox();
});
