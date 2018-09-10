

function getQuestions() {
  return ["Who has the power to impeach the President?",
          "Who can levy taxes?",
          "What is the term length for a senator?",
          "Where are the term limits for the President defined?",
          "Who presides over the Senate in the Vice President's absence?",
          "How long do Justices serve for?",
          "Who fills vacancies in the Senate?",
          "How can a Presidential Veto be overturned?"];
}

function getAnswers() {
  return [{"ans1":"The Senate", "ans2":"The House of Representatives", "ans3":"Both Houses"},
          {"ans1":"The President", "ans2":"Congress", "ans3":"States"},
          {"ans1":"Life", "ans2":"6 Years", "ans3":"2 Years"},
          {"ans1":"Article II : Section 1", "ans2":"Article I : Section 8", "ans3":"Amendment XX"},
          {"ans1":"The President Pro Tempore", "ans2":"The President", "ans3":"The Secretary of State"},
          {"ans1":"Life", "ans2":"6 Years", "ans3":"2 Years"},
          {"ans1":"The President", "ans2":"The State Govenor", "ans3":"The House of Representatives"},
          {"ans1":"With a 2/3 vote in both houses", "ans2":"With a 2/3 vote in the house of origination", "ans3":"With a unanimous vote in the Senate"}];
}

function getRightAnswerFor(q) {
  var rightAnswers = ["ans1","ans2","ans2","ans3","ans1","ans1","ans2","ans2"];

  return rightAnswers[q];
}

function setPage(){
  var loc = parseInt(sessionStorage.getItem('loc'));

  var question = getQuestions()[loc];
  var answers = getAnswers()[loc];

  $("#question").text(question);

  $('#ans1').text(answers.ans1);
  $('#ans2').text(answers.ans2);
  $('#ans3').text(answers.ans3);

  $('#ans1').css({'backgroundColor':'white'});
  $('#ans2').css({'backgroundColor':'white'});
  $('#ans3').css({'backgroundColor':'white'});
}

function startLoad(){
  sessionStorage.setItem('loc','0');
  sessionStorage.setItem('score','0');

  setPage();
}

$("document").ready(function(){
  startLoad();

  $(".answer_button").hover(function (event){
    if (event.target.style.backgroundColor != "rgb(30, 144, 255)"){
      event.target.style.backgroundColor = "#1e90fe";
      console.log("Over");
    }
  }, function (event){
    console.log("Leave");
    console.log(event.target.style.backgroundColor);

    if (event.target.style.backgroundColor == "rgb(30, 144, 255)"){
      console.log("Nada");
    } else {
      event.target.style.backgroundColor = "white";
    }
  });

  $(".answer_button").click(function (event) {
    console.log("Click");
    event.target.style.backgroundColor = 'rgb(30, 144, 255)';

    var selectOthers = ".answer_button[id!='"+event.target.id+"']";

    $(selectOthers).css("background","white");
  });

  $("#submitButton").hover(function (event) {
    event.target.src = "blue_star.png";
  }, function (event) {
    event.target.src = "white_star.png";
  });

  $("#submitButton").click(function (event){
    var loc = parseInt(sessionStorage.getItem('loc'));

    var rightAnswerButton = document.getElementById(getRightAnswerFor(loc));

    console.log(rightAnswerButton);

    if (rightAnswerButton.style.backgroundColor == 'DodgerBlue'){
      var score = parseInt(sessionStorage.getItem('score'));
      score += 1;
      sessionStorage.setItem('score',''+score);
    } else {
      console.log("WRONG!");
    }

    loc += 1;
    if(loc < 8){
      sessionStorage.setItem('loc',''+loc);
      setPage();
    } else {
      $('#ans1').hide();
      $('#ans2').hide();
      $('#ans3').hide();
      $('#submitButton').hide();

      var score = parseInt(sessionStorage.getItem('score'));

      $('#question').text("You scored "+score+"/8 points!");
    }
  })
});
