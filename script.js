function getDaysBeforeBd() {
  const birthdayString = document.getElementById("birthday").value; // получает значение даты,введеное пользователем. Значение из этого поля получаем в виде строки. Cвойство value используется для получения значения в виде чисел от пользователя
  const birthday = new Date(birthdayString); // преобразую в объект date, чтобы можно было производить операции с датой, введеную пользователем
  const today = new Date(); // создаю текущую дату и время
  let days = Math.floor((birthday - today) / (1000 * 60 * 60 * 24)); // переводим миллисекунды в дни и округляем

  if (days < 0) {
    days = days + 365;
  } // если день рождения уже прошел в текущем году, то он не будет нам выводить отрицательный результат

  document.getElementById(
    "result"
  ).textContent = `До дня вашего рождения осталось: ${days} дней`;
}
