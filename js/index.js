$(document).ready(function(){

  $(".gnb").hover(function(){
    $(this).find(".main .sub_all").stop().slideDown(); 
    $(".sub_bgbox").stop().slideDown();
  },function(){
    $(this).find(".main .sub_all").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
  });


  $(".main").hover(function () {
    $(this).find(".sub_all").css({ "background": "#dbe4ea"});
  },function(){
    $(this).find(".sub_all").css({ "background": "#fff"});
  });


  
  $(".logo").hover(function(){
    $(this).css("Transform","rotate(360deg)");
  },
  function(){
    $(this).css("Transform","rotate(0deg)");
  });


//---창업안내--------------------------------

$(".tab li").click(function() {

  let result = $(this).attr("data-alt");
  $(".tabContents div").removeClass("active");
  $("#" + result).addClass("active");
  $(this).addClass("active");
  $(".tab li").not(this).removeClass("active");
});

});

//------sns--------------


$(".sns li").hover(function(){
  qnum = $(this).index()+1;  
  $(this).find("a img").attr({"src":"images/메인on"+qnum+".png"});
  
},function(){
  
  $(this).find("a img").attr({"src":"images/메인"+qnum+".png"});
});







  /* 탭메뉴 클릭_____________________________*/

  $(".tabitem li").click(function(){

    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result = $(this).attr("data-alt");
    $(".panel li").removeClass("active");
    $("#" + result).addClass("active"); 
  
  });




  /*탭메뉴별 이미지갤러리_____________________________*/

  //tab1-gallery
  let goldidxA=0; 
	let gidxA=0;

  function galleryImgA(gidxA){ 

    if(goldidxA!=gidxA){ 




      $(".gallery1 .largeImg li").eq(goldidxA).stop().fadeOut(300);  
      $(".gallery1 .largeImg li").eq(gidxA).stop().fadeIn(300);
    }
    goldidxA=gidxA; 

  }

  $(".gallery1 .imgtab li").click(function(){

    gidxA=$(this).index();
    galleryImgA(gidxA);
  
  });


  //tab2-gallery
  let goldidxB=0; 
	let gidxB=0;

  function galleryImgB(gidxB){ 

    if(goldidxB!=gidxB){ 





      $(".gallery2 .largeImg li").eq(goldidxB).stop().fadeOut(300);  
      $(".gallery2 .largeImg li").eq(gidxB).stop().fadeIn(300);
    }
    goldidxB=gidxB; 

  }

  $(".gallery2 .imgtab li").click(function(){

    gidxB=$(this).index();
    galleryImgB(gidxB);
  
  });






