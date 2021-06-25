function splitNum(val){
return String(val).replace(/[^0-9.]/g,'').replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
$("#myRange").on('input', (e) => {
$("#input-1").val(splitNum($(e.target).val()));
});
$('#input-1').keyup((e) => {
let val = String($(e.target).val()).replace(/[^0-9.]/g,'');
$("#myRange").val(val);
$('#input-1').val(splitNum(val));
});
function discharge(){
$('#input-2').val(String($('#input-2').val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));
}
discharge();
$('#input-2').keyup(function(){
discharge();
});
