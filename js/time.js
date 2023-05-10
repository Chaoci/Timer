// ending date and current date
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


const newYears= '29 OCT 2023';

function countdown(){
    const newYearsDate = new Date(newYears); //時間先設定好預計要的日期，並注意格式
    const currentDate = new Date();//目前的時間

    const totalseconds = (newYearsDate - currentDate) /1000;
    const days = Math.floor(totalseconds /86400 );
	const hours = Math.floor(totalseconds /3600) % 24;
    const mins = Math.floor(totalseconds/60) %60;
    const seconds = Math.floor(totalseconds)%60;


    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;
}
countdown();


setInterval(countdown,1000); //


