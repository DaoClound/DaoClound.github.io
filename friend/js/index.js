$(function () {
	var onOff = true;
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
	$("section .comment").find("p:eq(0) i").each(function(i,ele){
		$(this)[0].flag=true;	
		alert($(this)[0].flag);
	});
	$("section .comment").find("p:eq(0) i").on("touchstart",function () {
		var heartNum=parseInt($(this).next("span").html());	
		if($(this)[0].flag){
			heartNum++;
			$(this).css('background','#5bafff');
			$(this).next("span").html(heartNum);
		}else{
			heartNum--;
			$(this).css('background','#fff');
			$(this).next("span").html(heartNum);
		}
		$(this)[0].flag = !$(this)[0].flag;			
	})
});

