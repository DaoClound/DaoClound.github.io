$(function () {
	var onOff = true;
	var flag=true;
	$("section .look-review i").on("touchstart",function(){	
		if(onOff){
			$(this).addClass('iconfont icon-jiankuohaoxishang');
			$('section .hide-review').css('display','block');
		}else{
			$(this).removeClass('icon-jiankuohaoxishang');
			$('section .hide-review').css('display','none');
		}
		onOff = !onOff;		
	});	
	console.log($("section .comment").length);
	$("section .comment").find("p:eq(0) i").on("touchstart",function () {
		var heartNum=parseInt($(this).next("span").html());
		if(flag){
			heartNum++;
			$(this).css('background','#5bafff');
			$(this).next("span").html(heartNum);
		}else{
			heartNum--;
			$(this).css('background','#fff');
			$(this).next("span").html(heartNum);
		}
		flag = !flag;			
	})
});

