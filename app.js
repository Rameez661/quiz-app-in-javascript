var quiz = [
  {
    sno: "1",
    question: "What is Your age",
    option: {
      a: "10",
      b: "20",
    },
    answer: "a",
  },
  {
    sno: "2",
    question: "What is Your City",
    option: {
      a: "karachi",
      b: "isl",
    },
    answer: "b",
  },
  {
    sno: "3",
    question: "What is Your Country",
    option: {
      a: "Pakistan",
      b: "China",
    },
    answer: "b",
  },
  {
    sno: "4",
    question: "What is Your City",
    option: {
      a: "karachi",
      b: "isl",
    },
    answer: "b",
  },
  {
    sno: "5",
    question: "What is Your City",
    option: {
      a: "karachi",
      b: "isl",
    },
    answer: "b",
  },
];

var score = 0;
document.write("<br>Your Answers are : ");

for (var i = 0; i < quiz.length; i++) {
  var solve =
    "\n Q" +
    quiz[i]["sno"] +
    ")" +
    "\n Please write correct answer\n \n " +
    quiz[i]["question"] +
    "\n a: " +
    quiz[i]["option"]["a"] +
    "\n b: " +
    quiz[i]["option"]["b"] +
    "\n " +
    "YOUR ANSWER IS ' a OR b ' ";
  var answerr = prompt(solve);
  if (answerr == quiz[i]["answer"]) {
    score += 1;
  }
  document.write("<br>Q" + [i + 1] + ") Option:-  " + answerr + "");
}
document.write(
  "<br><br>-----------------------------------------------------------------"
);

document.write("<br>YOUR TOTAL SCORE IS : " + score + "<br>");

var per = (score / 5) * 100;
document.write("<br>YOUR PERCENTAGE IS : " + per);

document.write(
  "<br>-----------------------------------------------------------------<br<br>"
);

alert("YOUR FINAL SCORE IS : " + score + "\n" + "YOUR PERCENTAGE IS : " + per);

// console.log(quiz);
// for (var j = 0; j < quiz.length; j++) {
//   var solvee =
//     "\n Q" +
//     quiz[j]["sno"] +
//     ")" +
//     "\n" +
//     quiz[j]["question"] +
//     "\n a: " +
//     quiz[j]["option"]["a"] +
//     "\n b: " +
//     quiz[j]["option"]["b"] +
//     "\n " +
//     "Correct answer is : " +
//     quiz[j]["answer"] +
//     "\n ";
//   alert(solvee);
// }
for (var k = 0; k < quiz.length; k++) {
  var solvee =
    "<br> Q" +
    quiz[k]["sno"] +
    ")" +
    "<br>" +
    quiz[k]["question"] +
    "<br> a: " +
    quiz[k]["option"]["a"] +
    "<br> b: " +
    quiz[k]["option"]["b"] +
    "<br> " +
    "Correct answer is : " +
    quiz[k]["answer"] +
    "<br> ";
  document.write("<br><br>" + solvee);
  document.write(
    "<br> -----------------------------------------------------------------"
  );
}
