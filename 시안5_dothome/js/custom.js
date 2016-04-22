$(document).ready(function(){

	var showImg, nextImg;
	var timer = setInterval("fadeInOut()",6000);

	$("div#main").hover( 
		function() {
		   clearInterval(timer);
		}, 
		function(){
		   timer = setInterval("fadeInOut()",3000);
		}
	);

});

function fadeInOut(){
   
   showImg = $("#main img:eq(0)");
   nextImg = $("#main img:eq(1)");
   nextImg.addClass("active");
   nextImg.css("opacity","0").animate({opacity:1},1500, function() { 			 
	   $("#main").append( showImg );//객체의 마지막 요소 위치에 클래스or아이디 추가기능	
	   showImg.removeClass("active");  
	});
}




