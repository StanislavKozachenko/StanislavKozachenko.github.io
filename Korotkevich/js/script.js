//
  $(document).ready(function(){
  	$('.slider').bxSlider(
    	{
    		speed: 600,
    		infiniteLoop: true,
    		adaptiveHeight: false,
    		auto: true,
    		pause: 4000
    	}
    	);
  });
   $(document).ready(function(){
    $('.slider_2').bxSlider(
    	{
    		speed: 600,
    		infiniteLoop: true,
    		adaptiveHeight: false,
    		auto: true,
    		pause: 4000
    	}
    	);

  });
     $(document).ready(function(){
    $('.slider_3').bxSlider(
    	{
    		speed: 600,
    		infiniteLoop: true,
    		adaptiveHeight: false,
    		auto: true,
    		pause: 4000
    	}
    	);

  });
//

let m = {
	v1: document.getElementById('4_q'),
	v2: document.getElementById('5_q'),
	v3: document.getElementById('11_q'),
	v4: document.getElementById('13_q'),
	v5: document.getElementById('19_q'),
	v6: document.getElementById('23_q'),
	v7: document.getElementById('27_q'),
	v8: document.getElementById('30_q'),
	v9: document.getElementById('35_q'),
	v10: document.getElementById('37_q'),
	v11: document.getElementById('39_q')
};
function checkid(element){	
	if(element == m.v1 || element == m.v2 || element == m.v3 || element == m.v4 || element == m.v5 || element == m.v6 || element == m.v7 || element == m.v8 || element == m.v9 || element == m.v10 || element == m.v11){
		element.style.background = 'rgb(40%, 72%, 21%, 0.6)';		
	} else {
		element.style.background = 'rgb(76%, 7%, 7%, 0.6)';
	}
}

//

let imageOf = document.getElementById('ph');

ph.onmouseenter = function() {
	imageOf.style.boxShadow = '#661a00 0px 0px 20px';
	imageOf.style.transition = '.2s';
}
ph.onmouseout = function(){
	imageOf.style.boxShadow = '#918151 0px 0px 20px';
	imageOf.style.transition = '.2s';
}
//

