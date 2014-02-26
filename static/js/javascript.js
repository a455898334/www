$(function () {
    $('.affixThis').addClass("affix-top").each(function (){
        var offsetFn = function () {
	    return $('.jumbotron').outerHeight();;
        }
        $(this).affix({offset: {top: offsetFn}});
    });
});


