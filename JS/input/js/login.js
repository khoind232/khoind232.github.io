var url = new URL(window.location.href);


var searchParams = new URLSearchParams(url.search);


$("#ten").html("Họ tên: "+searchParams.get("ten")+" "+searchParams.get("ho"));
$("#pass").html("Mật khẩu của bạn là  : "+searchParams.get("pass"));
$("#mail").html("Email : "+searchParams.get("mail"));
$("#ngày").html("Năm tháng ngày sinh : "+searchParams.get("sinh"));
$("#song").html("Quê quán : "+searchParams.get("song"));
$("#remenber").html("Giới tinh : "+searchParams.get("remenber"));