$(".page li").click(function(){
	$(this).addClass("active").siblings().removeClass();
});
function a(){
	var a=1443191640328;
	var b=new Date();
	if(b-a>1000){
		$("time").html("a day ago");
	}
	else{
		$("time").html("a minute ago");
	}
}
a();
setInterval(a, 1000);
