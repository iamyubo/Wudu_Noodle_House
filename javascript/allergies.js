
function trivia1() {
    let triviaAnswer = document.getElementById("trivia1-answer");

    let nutsSelected = document.getElementById("nuts").checked;
    let eggsSelected = document.getElementById("eggs").checked;
    let shellfishSelected = document.getElementById("shellfish").checked;

    if (nutsSelected) {
        triviaAnswer.innerHTML = "We have nuts in a lot of our dishes, please tell the server!";
    }
    else if (eggsSelected) {
        triviaAnswer.innerHTML = "A lot of our dishes contain eggs, please tell the server!";
    }
    else if (shellfishSelected) {
        triviaAnswer.innerHTML = "We don't have shellfish in our dishes!";
    }
    else {
        triviaAnswer.innerHTML = "Please select an allergy!";
    }
}
