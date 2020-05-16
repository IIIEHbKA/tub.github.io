let timerBInput = document.getElementById("timeB"); // Берем строку
let buttonBRun = document.getElementById("buttonB"); // Берем кнопку запуска
let timerBShow = document.getElementById("timerB"); // Берем для показа времени

buttonBRun.addEventListener('click', function() {
    timeBMinut = parseInt(timerBInput.value)// * 60
})

timerB = setInterval(function () {
    secondsB = timeBMinut%60 // Получаем секнды
    minutesB = timeBMinut/60%60 // Получаем минуты
	hourB = timeBMinut/60/60%60 // Получаем часы
	//Если время закончилось, то...
    if (timeBMinut <= 0) {
		// Таймер удаляется
		clearInterval(timerB);
		// Выводит сообщение,что время закончилось
		//alert("Время закончилось");
		let bgr = document.getElementById('timeB')
		bgr.style.background = 'red'
	} else {// Иначе
		// Создаем строку с выводом времени
		let bgr = document.getElementById('timeB')
		bgr.style.background = '#5AF407'
		let strTimer = `${Math.trunc(hourB)}:${Math.trunc(minutesB)}:${secondsB}`;
		// Выводим строку в блок для показа таймера
        timerBShow.innerHTML = strTimer;
    }
    --timeBMinut;// уменьшаем таймер
}, 1000)