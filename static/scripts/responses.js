function getBotResponse(input) {
    var lowerInput = input.toLowerCase();


    // Simple responses
    if (input == "привет") {
        return "Привет! Я здесь, чтобы помочь тебе определить, куда ты хочешь отправиться и предоставить всю необходимую информацию о выбранных достопримечательностях в Астане. Куда бы ты хотел пойти или что тебя интересует?";
    } else if (input == "пока") {
        return "До скорой встречи!";
    } else {
        return "Попробуйте спросить что-нибудь еще!";
    }
    if (lowerInput == "байтерек") {
        return "Астана, бульвар Нуржол, 14";
    } else if (lowerInput == "хан шатыр") {
        return "Астана, проспект Туран, 37";
    } else if (lowerInput == "дворец мира и согласия") {
        return "Астана, проспект Тауелсіздік, 57";
    }
}
