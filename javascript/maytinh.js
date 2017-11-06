		var ham ="";
		var kq;

		function press(a)
		{
			ham=ham+a;
			document.getElementById("nhap").innerText=ham;
			if (ham.length > 11) {
				alert("Quá giới hạn")
			}// in số lên thẻ b trống
		}
		function presskq(b)
		{
			document.getElementById("nhap").innerText=eval(ham);
			ham=document.getElementById("nhap").innerText;
		}//in kết quả ra
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

		$( "#giao" ).click(function() {
  		$( ".number" ).toggle( "slow" );
		});


		$(document).ready(function(){
    	$(".number").toggle(
        // function(){$("buton").css({"background-color": "red"});},
        // function(){$("button").css({"background-color": "blue"});},
        function(){$("button").css({"background-color": "green"});
    });
});