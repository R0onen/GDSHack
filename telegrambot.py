import telebot
from telebot import types

TOKEN = '6726576530:AAEVLmzfbx6g5oB_xM28B4ks6ri3Usj_gnE'
bot = telebot.TeleBot(TOKEN)

keyboard = types.ReplyKeyboardMarkup(row_width=1, resize_keyboard=True)
button_attractions = types.KeyboardButton("Показать ближайшие достопримечательности")
button_distance = types.KeyboardButton("Расстояние до определенной достопримечательности")
button_buses = types.KeyboardButton("Какие автобусы идут и сколько времени занимает")
button_house = types.KeyboardButton("Дом с учетом транспорта")
keyboard.add(button_attractions, button_distance, button_buses, button_house)

@bot.message_handler(commands=['start', 'help'])
def send_welcome(message):
    bot.reply_to(message, "Выберите опцию", reply_markup=keyboard)

@bot.message_handler(func=lambda message: True)
def echo_all(message):
    if message.text == "Показать ближайшие достопримечательности":
        bot.reply_to(message, "Достопримечательности рядом с вами...")
    elif message.text == "Расстояние до определенной достопримечательности":
        bot.reply_to(message, "Введите название достопримечательности...")
    elif message.text == "Какие автобусы идут и сколько времени занимает":
        bot.reply_to(message, "Введите номер автобуса или маршрут...")
    elif message.text == "Дом с учетом транспорта":
        bot.reply_to(message, "Анализ транспортной доступности для вашего дома...")

bot.polling()
