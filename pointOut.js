//1、引用pointOut.js	 <script src="js/pointOut.js"></script>
//2、pointOut(showText, dTop) 
//3、第1个参数showText是要提示的文字，宽度可以自适应
//4、第2个参数dTop是距离顶部的百分比，可以不填默认是50%
//5、在屏幕中间显示的提示框，持续1.7秒

function pointOutText(showText, dTop){
	if (typeof(dTop) == "undefined"){
			dTop = 50;
	}
	var pointOutText = showText;
	var distanceTop = dTop;
	$('body>div').first().append('<div id="pointDIV" style="display: none;"></div>');
    $('#pointDIV').attr('style', 'position: fixed;top: ' + dTop + '%;left: 50%;-webkit-transform: translate(-50%, -50%);transform:translate(-50%, -50%);background: rgba(113, 111, 111, 0.82);color: white;border-radius: 5px;padding: 5px;text-align: center;').stop().text(pointOutText).show().delay(1700).hide(0);
}