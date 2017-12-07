var url = new URL(window.location.href);


var searchParams = new URLSearchParams(url.search);


$("#ten").html("Họ tên: "+searchParams.get("ten")+" "+searchParams.get("ho"));
$("#taikhoan").html("Tên đăng nhập :"+searchParams.get("taikhoan"));
$("#pass").html("Mật khẩu là :"+searchParams.get("pass"));
$("#mail").html("Email đăng ký :"+searchParams.get("mail"));