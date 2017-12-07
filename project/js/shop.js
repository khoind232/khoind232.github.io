$(document).ready(function(){
  var stt =0;
  starImg = $("img.cdn:first").attr("stt");
  endImg = $("img.cdn:last").attr("stt");
  $("img.cdn").each(function(){
    if ($(this).is(':visible')) 
      stt = $(this).attr('stt');
  });
  $("#next").click(function(){
    if (stt==endImg) {
      stt = -1;
    }
    next = ++stt;
    $("img.cdn").hide();
    $("img.cdn").eq(next).show();
  });
    $("#prev").click(function(){
      if (stt==0) {
        stt = endImg;
        prev = stt++;
      }
    prev = --stt;
    $("img.cdn").hide();
    $("img.cdn").eq(prev).show();
  });
    setInterval(function(){
      $("#next").click();
    },2000);
});