//체크박스 전체선택 박스
function allCheckFunc(btn,elem){
  btn.toggleClass("all");
  if (btn.hasClass("all")) {
    btn.text("전체해제");
    elem.prop("checked",true);
  }else {
    btn.text("전체선택");
    elem.prop("checked",false);
  }
};
