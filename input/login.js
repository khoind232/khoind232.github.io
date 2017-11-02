var url = new URL(window.location.href);


var searchParams = new URLSearchParams(url.search);

$("#ten").html("Họ và Tên : "+searchParams.get("name"));
$("#taikhoan").html("Email : "+searchParams.get("taikhoan"));
$("#password").html("Mật khẩu : "+searchParams.get("password"));
$("#ngày").html("Năm tháng ngày sinh : "+searchParams.get("sinh"));
$("#song").html("Quê quán : "+searchParams.get("song"));
$("#remenber").html("Giới tinh : "+searchParams.get("remenber"));