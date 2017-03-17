$(function () {
	var onOff = true;	
	$("section .look-review i").on("touchstart",function(){
		$(this).addClass(function () {
			if(onOff){
				$(this).addClass('iconfont icon-jiankuohaoxishang');
				$('section .hide-review').css('display','block');
			}else{
				$(this).removeClass('icon-jiankuohaoxishang');
				$('section .hide-review').css('display','none');
			}
			onOff = !onOff;
		});
	});	
	console.log($("section .comment p").eq(0).find("i").length);
	$("section .comment p").eq(0).find("i").on("touchstart",function () {
		var heartNum=parseInt($(this).next("span").html());
		if(onOff){
			console.log($(this).next("span").length);
			heartNum++;
			$(this).css('background','#5bafff');
			$(this).next("span").html(heartNum);
		}else{
			heartNum--;
			$(this).css('background','#fff');
			$(this).next("span").html(heartNum);
		}
		onOff = !onOff;			
	})
});

