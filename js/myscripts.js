$(document).ready(function() {

var header = $('header');
header.hide();

function func() {
	header.fadeIn(4000);
}
setTimeout(func, 3000);

/*$('img[src*=prapor]').hide(5000).show(5000);

var img = $('img[src*=prapor]');

img.click(function(){
	$('img[src*=prapor]').width('30%');
});

img.dblclick(function(){
	$('img[src*=prapor]').width('60%');
});
*/
});
