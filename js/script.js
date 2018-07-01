$(document).ready(function(){
$("#lines").click(function(){
$(".menu").toggle();
});

$(".tea-btn").click(function(){
$(".tea-container").toggle();
});

$("#fa-chevron-down").click(function(){
	$('transformed').css({'trnnsform':'rotate:(180deg)'});
 });

$(".product-btn").click(function(){
$(".oolong-container").toggle();
});


});
