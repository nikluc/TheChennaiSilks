
/*initialisers*/

/*initialiser for datepicker*/


/*Initialiser for accounting year carousel*/
$(document).ready(function() {
    $('.single-item').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });		    
});

/*get Device height*/
(function ($){
	$.fn.device_h = function() {
		this.hide();
		var device_height = window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;
		this.css("height", device_height);
	};
	$( window ).resize(function() {
		$(".main-menu-cont").device_h();
	});
})( jQuery );
$(".main-menu-cont").device_h();

/*Main Menu slide*/
$(document).ready(function() {
	$('#simple-menu').sidr(
		{speed:500}
	);
});

/*History Back*/
function goBack() {
	history.back();
	return false;
}
$("#go-back").click(goBack);

/*Contact name swipe*/

$(document).on("pagecreate", "#contactlist", function() {
     setTimeout(function () {
	var duration = 300;
	var closeduration=200;
	//alert("mainjs"+contact);
	//======================
	//$(contact).css({ 'opacity' : 0.80 });
	
		$(contact).on("swipeleft", function() {
		//$(contact).animate({ right: '0'}, closeduration);
		$(this).animate({ right: '50%'}, duration);
		       // $(this).animate({ right: '0'}, closeduration);
   });
	
	 $(contact).on("swiperight", function() {        
		
		$(this).animate({ right: '0'}, duration);
    });
	
	}, 250)

});

/*contact list Dynamic height*/
$( window ).load(function() {
	setTimeout(function () {

	$(".comm-opt").css({'height':(($(".cont-wrap").height()+13)+'px')});
	
	$( window ).resize(function() {
		$(".comm-opt").css({'height':(($(".cont-wrap").height()+13)+'px')});
	});
}, 250)
});	

/*Top Menu Swipe Function*/

function swipe_menu() {
    
	var duration2 = 300;
	
	$(".slide-menu").on("swipeleft", function() {
		$("#slide-menu-list").animate({ right: '15%'}, duration2);
    });	
	
	$(".slide-menu").on("swiperight", function() {
		$("#slide-menu-list").animate({ right: '0'}, duration2);
    });
	
}


/*Swipe Icon Menu jQuery*/
function device_width()
{
	var d_width = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	$("#slide-menu-list").css({'width':(d_width-$("#simple-menu").width()+'px')});
	swipe_menu();	
}	
$( window ).resize(function() {
	device_width();
});
$(document).ready(function(e) {
   device_width();	
});

/*Inner content scroll*/
function device_height(){
	var d_height = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;
	$("#contactlist").css({'height':(d_height-$("#header-wrap").height()+'px')});
	$("#chatgroup").css({'height':(d_height-$("#header-wrap").height()+'px')});
	$(".chat-area").css({'height':(d_height - ($("#header-wrap").height() + $("#chat-input-area").height())-11+'px')});
	$("#groupmessage").css({'height':(d_height-$("#header-wrap").height()+'px')});
	$("#inbox_cont").css({'height':(d_height-$("#header-wrap").height()+'px')});
	$("#sent_details").css({'height':(d_height-$("#header-wrap").height()+'px')});
	$("#lr-sec").css({'height':(d_height-$("#header-wrap").height()+'px')});
	$(".lr-view-cont").css({'height':(d_height-($("#header-wrap").height()+$("#lr-view-filter-cont").height())+'px')});
}
$( window ).resize(function() {
		device_height();
	});
$(document).ready(function(e) {
    device_height();	
});
