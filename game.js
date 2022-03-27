


var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var level = 0
var started = false;
$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
playSound(userChosenColour)

animatePress(userChosenColour)
checkAnswer(userClickedPattern.length -1);
});
$(document).keypress(function(){
  if (!started) {

nextSequence();
$("#level-title").text("Level " + level);
started = true;
}
});
function checkAnswer(currentLevel){
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
  console.log("success");

if (userClickedPattern.length === gamePattern.length){
setTimeout( function() {
  nextSequence();
},   1000);
}
} else {
  $("h1").text("Game over. press any key to start");
  $("body").addClass("game-over");
  setTimeout( function(){
    $("body").removeClass("game-over");
  }, 200);

  var audio = new Audio("sounds/" + "wrong" + ".mp3");
  audio.play();
  startOver();
  console.log("wrong");
}
}
function nextSequence(){
  userClickedPattern =[];
  level++;

  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour)




}
function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatePress(currentColour){
$("#" + currentColour).addClass("pressed");


setTimeout(function () {
  $("#" + currentColour).removeClass("pressed");
}, 100);
}
function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}
