 $(function() {
	
 
$('.partners').owlCarousel({
	loop: true,
	smartSpeed: 700,
	dots: false,
	nav: true,
	navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	responsiveClass: true,
	 responsive: {
	 	0:{
	 		items: 1
	 	},
	 	768:{
	 		items: 1
	 	},
	 	992:{
	 		items: 1
	 	},
	 	1200:{
	 		items: 1
	 	}
	 }
});

 
$('.partners2').owlCarousel({
	loop: true,
	smartSpeed: 700,
	dots: true,
	
	navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	responsiveClass: true,
	 responsive: {
	 	0:{
	 		items: 1
	 	},
	 	768:{
	 		items: 1
	 	},
	 	992:{
	 		items: 1
	 	},
	 	1200:{
	 		items: 1
	 	}
	 }
});

$('.parts3').owlCarousel({
	loop: true,
	smartSpeed: 700,
	dots: false,
	nav: true,
	navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	responsiveClass: true,
	 responsive: {
	 	0:{
	 		items: 2
	 	},
	 	768:{
	 		items: 5
	 	},
	 	992:{
	 		items: 5
	 	},
	 	1200:{
	 		items: 6
	 	}
	 }
	
});


delDis();
function delDis(){
	console.log($('.parts3 .owl-nav'));
$('.parts3 .owl-nav').css({display:'block'});
}


resMenu();

function resMenu(){

  $(window).resize(function(){
	if($(window).width() <480 || $(window).width() <320){
 console.log($('nav.hed-nav li'));
 	$('.hamburger.hamburger--collapse').css({"display":'block'});
 		$('.mm-listview li').css({"display":'block'});
var $menu = $("#my-menu").mmenu({
   //   options
});
var $icon = $("#my-icon");
var API = $menu.data( "mmenu" );

$icon.on( "click", function() {
   API.open();
});

API.bind( "open:finish", function() {
   setTimeout(function() {
      $icon.addClass( "is-active" );
   }, 100);
});
API.bind( "close:finish", function() {
   setTimeout(function() {
      $icon.removeClass( "is-active" );
   }, 100);
});

}



});
   }  


 });