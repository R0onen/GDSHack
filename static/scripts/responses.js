function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}
function getAttractions(input){
    if(input == "байтерек"){
        return "бульвар Нуржол, 14";
    }
    if(input == "хан шатыр"){
        return "проспект Туран, 37";
    }
    if(input == "дворец мира и согласия"){
        return "проспект Тауелсиздик, 57"
    }
}