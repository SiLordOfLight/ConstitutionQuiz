function getQuestions() {
  return ["Who has the power to impeach the President?"];
}

function getRightAnswer(q) {
  var rightAnswers = ["Congress"];

  return rightAnswers[q];
}

$("document").ready(function(){
  $(".answer_button").click(function (event) {
    event.target.style.backgroundColor = 'DodgerBlue';

    var selectOthers = ".answer_button[id!='"+event.target.id+"']";

    $(selectOthers).css("background","white");
  });

  $("#submitButton").hover(function (event) {
    event.target.src = "blue_star.png";
  }, function (event) {
    event.target.src = "white_star.png";
  });

  $("#submitButton").click(function (event){
    var answerButtons = document.getElementsByClassName('answer_button');

  })
});
