$(function(){
var biantu=[
{img:"9.jpg",src:"https://www.baidu.com/",val:"这是第一张图"},
{img:"10.jpg",src:"https://www.baidu.com/",val:"这是第二张图"},
{img:"11.jpg",src:"https://www.baidu.com/",val:"这是第三张图"},
{img:"12.jpg",src:"https://www.baidu.com/",val:"这是第四张图"},
{img:"13.jpg",src:"https://www.baidu.com/",val:"这是第五张图"},
{img:"14.jpg",src:"https://www.baidu.com/",val:"这是第六张图"},
{img:"15.jpg",src:"https://www.baidu.com/",val:"这是第七张图"},
{img:"16.jpg",src:"https://www.baidu.com/",val:"这是第八张图"}
]
$(".button").on("click",function(){
	$(".box img").attr("src",function(i,oldsrc){
		return biantu[i].img;
	})
	$(".box a").attr("href",function(i,oldsrc){
		return biantu[i].src;
	})
	$(".box .info").html(function(i,oldsrc){
		return biantu[i].val;
	})
	
})
	

$(".box li").on("click",function(e){
	e.preventDefault();
	$(".cart").addClass("show");
	$(".cart img").attr("src",$(this).find("img").attr("src"));
    $(".cart").attr("data-id",$(this).index());
});
$(".cart .close").on("click",function(e){
	e.stopPropagation();//阻止冒泡事件
	$(".cart").removeClass("show");
});

var imgs=$(".box img");

$(".cart").on("mousedown",function(e){
	e.preventDefault();//去除鼠标点击的默认事件
})
$(".cart").on("click",function(e){
	var index=parseInt($(this).attr("data-id"));
   if (e.clientX>$(this).outerWidth(true)/2) {
   	index+=1;
   }else{
   	index-=1;
   };
   if (index==imgs.length) {
   	$(".cart .last").addClass("tishi");
   	setTimeout(function(){
   		$(".cart .last").removeClass("tishi");
   	},2000)
   	return;
   };
   if (index==-1) {
   	$(".cart .first").addClass("tishi");
   	setTimeout(function(){
   		$(".cart .first").removeClass("tishi");
   	},2000)
   	return;
   };
	$(".cart").attr("data-id",index);
	$(".cart img").attr("src",imgs.eq(index).attr("src"));
})


})