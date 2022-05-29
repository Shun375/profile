$(function(){
	$('.spmenu').on('click', function() {
		$(this).toggleClass('active');
		$("#spnav").toggleClass('active');
	})
})
$(function(){
	$('#spnav a').on('click', function() {
		$('#spnav').toggleClass('active');
		$(".spmenu").toggleClass('active');
	})
});

$(window).on('load', function() {
	$('a[href^="#"]').click(function () {
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		var speed = 1000;
		$("html, body").animate({
			scrollTop: position
		}, speed, "swing");
		return false;
	});
});

$(window).scroll(function () {
	slideAnime();
});
function slideAnime(){
	$('.leftAnime').each(function(){ 
		var elemPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass("slideAnimeLeftRight");
			$(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");
		}
	});
};

window.onload = function(){
	window.document.oncontextmenu
	= function(e){
		var o;
			if (!e) {
				o = event.srcElement;
			}else{
				o = e.target;
			}
		if(o.tagName&&o.tagName=='IMG') return false;
	}
}

$(function(){
	$('.spmenu').on('click', function() {
		$(this).toggleClass('active');
		$("#spnav").toggleClass('active');
	})
})
$(function(){
	$('#spnav a').on('click', function() {
		$('#spnav').toggleClass('active');
		$(".spmenu").toggleClass('active');
	})
});

$(window).on('load', function() {
	$('a[href^="#"]').click(function () {
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		var speed = 700;
		$("html, body").animate({
			scrollTop: position
		}, speed, "swing");
		return false;
	});
});

$(window).scroll(function () {
	slideAnime();
});
function slideAnime(){
	$('.leftAnime').each(function(){ 
		var elemPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass("slideAnimeLeftRight");
			$(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");
		}
	});
};

window.onload = function(){
	window.document.oncontextmenu
	= function(e){
		var o;
			if (!e) {
				o = event.srcElement;
			}else{
				o = e.target;
			}
		if(o.tagName&&o.tagName=='IMG') return false;
	}
}