		var ham ="";
		var kq;

		function press(a)
		{
			ham=ham+a;
			document.getElementById("nhap").innerText=ham;
		}
		function presskq(b)
		{
			document.getElementById("nhap").innerText=eval(ham);
			ham=document.getElementById("nhap").innerText;
		}
		function pressAC()
		{
			ham='';
			document.getElementById("nhap").innerText=ham;
		}
		function pressbinhphuong()
		{
			document.getElementById("nhap").innerText=eval(Math.pow(ham,2));

		}
		function presscan()
		{
			document.getElementById("nhap").innerText=eval(Math.sqrt(ham));
		}
		function pressphantram()
		{
			var k=(Number(ham)/100).toString();
			document.getElementById("nhap").innerText=k.slice(0,8);

		}