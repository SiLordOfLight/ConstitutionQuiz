$("document").ready(function(){
  $(".answer_button").click(function (event) {
    event.target.style.backgroundColor = 'DodgerBlue';

    var selectOthers = ".answer_button[id!='"+event.target.id+"']";

    $(selectOthers).css("background","white");
  });
});
