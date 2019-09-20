$(function() {
	var $key=0;/*控制下一张的播放图片*/

	$(".right").click(function(event) {
		autoplay();
	});

	/*左侧开始*/
		$(".left").click(function(event) {
		$(".banner ul li").eq($key).fadeOut(1800);/*先让第一张淡出，然后在加加淡入下一张*/
		$key--;
		/*if($key>4){因为我们一共就是5张图，我们的索引值是从0开始的，所以$key>4*/
			/*$key=0;因为我们要回到第一张所以$key=0
		}*/
		/*alert($(".banner ul li").length);*/
		$key=$key%($(".banner ul li").length);/*这个我们就是通过索引值除以长度5取余得来的*/

		$(".banner ul li").eq($key).fadeIn(1800);/*淡入下一张*/
		$(".banner ol li").eq($key).addClass('current').siblings().removeClass('current');
	});

	/*定时器就是人工的右侧*/
	var timer=setInterval(autoplay, 1800);
	function autoplay(){
		$(".banner ul li").eq($key).fadeOut(1800);/*先让第一张淡出，然后在加加淡入下一张*/
		$key++;
		/*if($key>4){因为我们一共就是5张图，我们的索引值是从0开始的，所以$key>4*/
			/*$key=0;因为我们要回到第一张所以$key=0
		}*/
		/*alert($(".banner ul li").length);*/
		$key=$key%($(".banner ul li").length);/*这个我们就是通过索引值除以长度5取余得来的*/

		$(".banner ul li").eq($key).fadeIn(1800);/*淡入下一张*/
		$(".banner ol li").eq($key).addClass('current').siblings().removeClass('current');
	}

	/*清除定时器*/
	$(".banner").hover(function() {
		$(".left,.right").show();
		clearInterval(timer);
		timer=null;/*清空内存的变量节省资源*/

	}, function() {
		$(".left,.right").hide();
		clearInterval(timer);
		timer=setInterval(autoplay, 1800);

	});

	$(".banner ol li").click(function(event) {
		$(".banner ul li").eq($key).fadeOut(1800);/*这就是让某个淡出*/
		$key=$(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$(".banner ul li").eq($key).fadeIn(1800);/*下一张淡入*/
	});

	 $("nav ul li").hover(function() {
	 	$('nav ul li').removeClass('li1');
	 	$(this).css('background','#0db05f');
	 	$("this a").css('color','#fff');
	  }, function() {
	  	 $(this).css('background','none');
	 });
	 	$('nav ul li ul li a').hover(function() {
	 		$(this).css('color','#fff');
	 	}, function() {
	 		$(this).css('color','#142434');
	 	});
	 	$('nav ul li ul li').hover(function() {
	 		$(this).css('background','#0db05f');
	 	}, function() {
	 		$(this).css('background','#dfdfdf');
	 	});
});