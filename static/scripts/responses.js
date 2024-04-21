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
function getAttractions(input) {
    var lowerInput = input.toLowerCase();

    if (lowerInput == "байтерек") {
        return "Астана, бульвар Нуржол, 14";
    } else if (lowerInput == "хан шатыр") {
        return "Астана, проспект Туран, 37";
    } else if (lowerInput == "дворец мира и согласия") {
        return "Астана, проспект Тауелсіздік, 57";
    }
}