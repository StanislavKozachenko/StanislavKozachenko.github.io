for(let i = 1; i <= 24; i++) {
	const box = document.createElement('div');
	box.classList.add('box');
	document.querySelector(".container").appendChild(box);
}
const btn = document.querySelector('.brn');
const randomColorBlock = document.querySelectorAll('.box');

function RandomHexColorCode(){
	var chars = '0123456789ABCDEF';
	var colorLength = 6;
	var color = "";

	for(var i = 0; i < colorLength; i++) {
		var randomColor = Math.floor(Math.random() * chars.length);
		color += chars.substring(randomColor, randomColor + 1);
	}
	return "#"+color;
}
function copytext(el) {
    var $tmp = $(".box");
    $("body").append($tmp);
    $tmp.val($(el).text()).select();
    document.execCommand("copy");
    $tmp.remove();
}
function addColor(){
	randomColorBlock.forEach(e => {
		var newColor = RandomHexColorCode();
		e.style.backgroundColor = newColor;
		e.innerHTML = newColor;
	})
}
jQuery(document).ready(function($){
		$('.box').click(function() {
		var $text_copy = $(this);
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($text_copy.text()).select();
		document.execCommand("copy");
		$temp.remove();
	});
});
addColor();
