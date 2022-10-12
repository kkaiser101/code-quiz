var begin = document.getElementById("begin");
var questionDisplay = document.getElementById("questions");
var question1Display = document.getElementById("question1");
var question2Display = document.getElementById("question2");
var score = 0;
var timer = 61;
var questiontime = 3;
var questionOptions1 = document.getElementById("q1-options");
var questionOptions2 = document.getElementById("q2-options");
var submit1 = document.getElementById("submit1");
var submit2 = document.getElementById("submit2");

//the questions will not be displayed by default
question1Display.style.display = "none";
question2Display.style.display = "none";


//gameclock function starts the timer and shows the first question
function gameclock(){

    question1Display.style.display = "flex";

    gameclock = setInterval(function(){
        timer--;
        document.getElementById("gameclock").innerHTML = timer;

        if(timer === 0){
            clearInterval(gameclock);
        }
    }, 1000);
}



function saveOption1() {
    // 
    var userChoice = questionOptions1.value;
    submit1.style.display = "none";
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    //localStorage.setItem("studentGrade", JSON.stringify(userChoice));
    console.log(userChoice);
    //if choice is anything but "A" then the user got it wrong, correct otherwise
    if(userChoice !== "A"){
        document.getElementById("correctornot1").innerHTML = "incorrect";
        sessionStorage.setItem("correctornot1","incorrect");
    } else {
        document.getElementById("correctornot1").innerHTML = "correct";
        sessionStorage.setItem("correctornot1","correct");
    }

    setInterval(function(){

        questiontime--;
        if(questiontime === 0){
            //displays the next page and turns off display of previous page
            question1Display.style.display = "none";
            question2Display.style.display = "flex";

        }

    }, 1000)
}

function saveOption2() {
    
    var userChoice = questionOptions2.value;
    submit2.style.display = "none";
    console.log(userChoice);
    //if choice is anything but "B" then the user got it wrong, correct otherwise
    if(userChoice !== "B"){
        document.getElementById("correctornot2").innerHTML = "incorrect";
    } else {
        document.getElementById("correctornot2").innerHTML = "correct";
    }
}


let answer1 = sessionStorage.getItem("correctornot1");
document.getElementById("answer1").innerHTML = answer1;


//quiz timer starts when you click begin
begin.addEventListener("click", function(event) {
event.preventDefault();
gameclock();
});


submit1.addEventListener("click", function(event) {
event.preventDefault();
saveOption1();
});

submit2.addEventListener("click", function(event) {
event.preventDefault();
saveOption2();
});


