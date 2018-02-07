// 将科学计数法转化为字符串 
// scientific notation （科学计数法）exponent （指数）
// 将数字按"E"或"e"分割为 a 和 b，在将 a 按 "."分割为 c 和 d，然后根据 b 去对 c 和 d 进行操作
function exponentNumToString(exponentNum){
	exponentNum = parseFloat(exponentNum) || 0;
	// 数字部分 a，指数部分 b，整数部分 c，小数部分 d
	var a,b,c,d,arr;
	// 判断是否为科学计数法
	if ((exponentNum.toString().indexOf("E") != -1) || (exponentNum.toString().indexOf("e") != -1)) {
		if (exponentNum.toString().indexOf("E") != -1) {
			arr = exponentNum.toString().split("E");
		}else{
			arr = exponentNum.toString().split("e");
		};
		a = arr[0];
		b = arr[1];
		arr = a.split(".");
		c = arr[0];
		d = arr[1] || '';
		return abcdToString(a,b,c,d);
	}else{
		return exponentNum ? exponentNum.toString() : '';
	};
	// 根据指数部分 b，整数部分 c，和小数部分 d
	function abcdToString(a,b,c,d){
		b = parseFloat(b);
		if(b>0){
			for (var i = 0; i < b; i++) {
				if (d) {
					c += d.slice(0,1);
					d = d.slice(1);
				}else{
					c+= "0";
				};
			};
			return d ? (c+"."+d) : (c);
		}else if (b<0) {
			var tempb = Math.abs(b);
			for (var i = 0; i < tempb; i++) {
				if (c) {
					d = c.slice(-1) + d;
					c = c.slice(0,-1);
				}else{
					d = "0" + d;
				};
			};
			return c ? (c+"."+d) : ("0."+d);
		}else{
			return d ? (c+"."+d) : (c);
		};
	}
}