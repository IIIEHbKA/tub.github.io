let timerCInput = document.getElementById("timeC"); // Берем строку
let buttonCRun = document.getElementById("buttonC"); // Берем кнопку запуска
let timerCShow = document.getElementById("timerC"); // Берем для показа времени

buttonCRun.addEventListener('click', function() {
    timeCMinut = parseInt(timerCInput.value)// * 60
})

timerC = setInterval(function () {
    secondsC = timeCMinut%60 // Получаем секнды
    minutesC = timeCMinut/60%60 // Получаем минуты
	hourC = timeCMinut/60/60%60 // Получаем часы
	//Если время закончилось, то...
    if (timeCMinut <= 0) {
		// Таймер удаляется
		clearInterval(timerC);
		// Выводит сообщение,что время закончилось
		//alert("Время закончилось");
		let bgr = document.getElementById('timeC')
		bgr.style.background = 'red'
	} else {// Иначе
		// Создаем строку с выводом времени
		let bgr = document.getElementById('timeC')
		bgr.style.background = '#5AF407'
		let strTimer = `${Math.trunc(hourC)}:${Math.trunc(minutesC)}:${secondsC}`;
		// Выводим строку в блок для показа таймера
        timerCShow.innerHTML = strTimer;
    }
    --timeCMinut;// уменьшаем таймер
}, 1000)