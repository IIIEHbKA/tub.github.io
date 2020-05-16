let timerInput = document.getElementById("time"); // Берем строку
let buttonRun = document.getElementById("button"); // Берем кнопку запуска
let timerShow = document.getElementById("timer"); // Берем для показа времени

buttonRun.addEventListener('click', function() {
    timeMinut = parseInt(timerInput.value)// * 60
})

timer = setInterval(function () {
    seconds = timeMinut%60 // Получаем секнды
    minutes = timeMinut/60%60 // Получаем минуты
	hour = timeMinut/60/60%60 // Получаем часы
	//Если время закончилось, то...
    if (timeMinut <= 0) {
		// Таймер удаляется
		clearInterval(timer);
		// Выводит сообщение,что время закончилось
		//alert("Время закончилось");
		//Цвет фона инпут после окончаия таймера
		let bgr = document.getElementById('time')
		bgr.style.background = 'red'
	} else {// Иначе
		//Цвет фона инпута после ввода данных
		let bgr = document.getElementById('time')
		bgr.style.background = '#5AF407'
		// Создаем строку с выводом времени
		let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
		// Выводим строку в блок для показа таймера
        timerShow.innerHTML = strTimer;
    }
    --timeMinut;// уменьшаем таймер
}, 1000)

