$(function () {
	var onOff = true;
	var heartnum = $('section .comment p:eq(0) span').html();
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
	$('section .comment p:eq(0) i').on("touchstart",function () {
		if(onOff){
			$(this).css('background','#5bafff');
			heartnum++;
		}else{
			$(this).css('background','#fff');
			heartnum--;
		}
		onOff = !onOff;			
	})
});

