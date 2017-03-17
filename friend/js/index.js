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
	$('section .comment p:nth-child(1) i').on("touchstart",function () {
		var heartNum=parseInt($(this).next("span").html());
		if(onOff){
			heartNum++;
			$(this).css('background','#5bafff');
			$('section .comment p:eq(0) span').html(heartNum);
		}else{
			heartNum--;
			$(this).css('background','#fff');
			$('section .comment p:eq(0) span').html(heartNum);
		}
		onOff = !onOff;			
	})
});

