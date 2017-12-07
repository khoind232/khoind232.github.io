	$('#form-register').on('submit', function(){
		var hihi=true;
		if ($('#ten') && $('#ho').val().trim()=='') {
			$('#ten').next('span').text('Lỗi') && $('#ho').next('span').text('Lỗi');
			hihi=false;
		}else {
			$('#ten').next('span').text('') && $('#ho').next('span').text('');
		}
		if ($('#taikhoan').val().trim()=='') {
			$('#taikhoan').next('span').text('Lỗi');
			hihi=false;
		}else {
			$('#taikhoan').next('span').text('');
		}
			if ($('#pass').val().trim()=='') {
			$('#pass').next('span').text('Lỗi');
			hihi=false;
		}else {
			$('#pass').next('span').text('');
		}
			if ($('#matkhau').val().trim()!= $('#pass').val().trim()) {
			$('#matkhau').next('span').text('Mật khẩu không khớp');
			hihi=false;
		}else {
			$('#matkhau').next('span').text('');
		}
			if ($('#sdt').val().trim()=='') {
			$('#sdt').next('span').text('Lỗi');
			hihi=false;
		}else {
			$('#sdt').next('span').text('');
		}
		if ($('#mail').val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)==null) {
			$('#mail').next('span').text('Lỗi');
			hihi=false;
		}else {
			$('#mail').next('span').text('');
		}
			if ($('#ngay').val().trim()=='') {
			$('#ngay').next('span').text('Lỗi');
			hihi=false;
		}else {
			$('#ngay').next('span').text('');
		}
		// if ($('#thang').val().trim()=='') {
		// 	$('#thang').next('span').text('Lỗi');
		// 	hihi=false;
		// }else {
		// 	$('thang').next('span').text('');
		// }


		return hihi;
	});