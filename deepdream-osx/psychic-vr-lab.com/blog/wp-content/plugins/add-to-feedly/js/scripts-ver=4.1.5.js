$(document).ready(function($) {
	$(window).resize(function()
    {
        resizeMe();
    });
	
	resizeMe();
});

function resizeMe(){
		var preferredWidth = 320;  
		var fontsize =42;
		var margintop=-110;
		var displayWidth = $('#addtofeedly').width();
		var percentage = displayWidth / preferredWidth;
		var newFontSize = Math.floor(fontsize * percentage) - 1;
		var newMargin = Math.floor(margintop * percentage) - 1;
		$("#addtofeedly .customtext").css("font-size", newFontSize).css('margin-top',newMargin);
	}