'use strict'
$(function(){
  const intervalNum = 150;
  //script 입력 영역
  $("nav ul li a, .back-to-top a, a.button, #footer ul li a").click(function(){
    //console.log(this.hash); //.hash 밸류값가져오는거
    //console.log($(this.hash).offset().top); //높이값가져오기
    let thisHash = $(this.hash);
    //1번 애니메이션이 작동 될때 여러번 클릭을 방지, 즉시 작동이안된다.
    // let isAni = $("html,body").is(":animated");
    // if (!isAni) {
    //   $("html,body").animate({scrollTop : thisHash.offset().top},1500);
    // }
    //2번 즉시 scroll 대상 변경
    $("html,body").stop();
    $("html,body").animate({scrollTop : thisHash.offset().top},1500);
    return false;
  });

/*실습2: back-to-top 요소 (scroll 상단 이동버튼)가 window scroll top 값이
0이 아닐때 on 클래스를 추가하여 노출시키시오, window scroll top값이 0일때는 on class삭제*/
  let wHeight = $(window).height();
  $(window).scroll(function(){
    let scTop = $(this).scrollTop();
    if (scTop == 0) {
      $(".back-to-top").removeClass("on");
    }else {
      $(".back-to-top").addClass("on");
    }

    $("section").each(function(){
      let thisElem = $(this);
      let thisOffset = $(this).offset();
      if (thisOffset.top <= scTop + intervalNum && scTop <= thisOffset.top + wHeight) {
        thisElem.addClass("active");
      }
    })

  });

  /*실습3: section offset method를 사용하여 window가 스크롤될때 해당 section의
  offset top 과 window scrollTop이 같고, section의 높이와 동일한 영역 안일때
  해당 section 의 active 클래스를 추가하시오.*/


});
