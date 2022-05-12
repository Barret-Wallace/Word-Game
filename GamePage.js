var player1 = localStorage.getItem("Player1");
var player2 = localStorage.getItem("Player2");

player1_score = 0;
player2_score = 0;

var Question_turn = "player1";
var Answer_turn = "player2";

console.log(player1);
console.log(player2);
document.getElementById("player_name1").innerHTML = player1;
document.getElementById("player_name2").innerHTML = player2;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("Player_question").innerHTML = "Question Turn -" + player1;
document.getElementById("Player_answer").innerHTML = "Answer Turn -" + player2;
var word;
function Send(){
    word = document.getElementById("word_input").value;
    word = word.toLowerCase();
    var Char1 = word.charAt(1);
    var Char2 = word.charAt(Math.floor(word.length/2));
    var Char3 = word.charAt(word.length-1);
    var word_replaced1 = word.replace(Char1, "_");
    var word_replaced2 = word_replaced1.replace(Char2, "_");
    var word_replaced3 = word_replaced2.replace(Char3, "_");
    var ques = "<h4 id='question_display'>Can You Figure Out The Word?  <br> "+ word_replaced3 +" </h4>";
    var js_input = "<input id='inp_js' type='text'>";
    var js_button = "<button class='btn bnt-info' onclick='Check()'>Check</button>";
    document.getElementById("output").innerHTML = ques + js_input + js_button;
}
function Check(){
    console.log("Function Check");
   var checker = document.getElementById("inp_js").value;
   checker = checker.toLowerCase();
   if(checker == word){
        if(Answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
   }
    if(Question_turn == "player1"){
        Question_turn = "player2";
        Answer_turn = "player1";
        document.getElementById("Player_question").innerHTML="Question turn -" + player2;
        document.getElementById("Player_answer").innerHTML= "Answer turn -" + player1;
    }
    else{
        Answer_turn = "player2";
        Question_turn = "player1";
        document.getElementById("Player_question").innerHTML="Question turn -" + player1;
        document.getElementById("Player_answer").innerHTML="Answer turn -" + player2;
    }
    document.getElementById("output").innerHTML= "";
}