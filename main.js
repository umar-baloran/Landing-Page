const countdown = document.querySelector('.countdown');

//setting launch date
const launchDate = new Date('Oct 1, 2019 23:00:00').getTime();
console.log(launchDate);

//update every second
const intvl = setInterval(() => {
// gets today date and time (ms)
const now = new Date().getTime();

//duration from now to launch date
const distance = launchDate - now;

//time calculations
const days = Math.floor(distance/(1000*60*60*24));
const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const mins = Math.floor((distance%(1000*60*60))/(1000*60));
const seconds = Math.floor((distance%(1000*60))/1000);

//displaying result
countdown.innerHTML = `
	<div>${days}<span>Days</span></div>
	<div>${hours}<span>Hours</span></div>
	<div>${mins}<span>Minutes</span></div>
	<div>${seconds}<span>Seconds</span></div>
`;
//if launch date pass
if (distance < 0){
	//stop countdown
	clearInterval(intvl);
	//style and output
	countdown.style.color = '#17a2b8';
	countdown.innerHTML = 'Launched!'
}
}, 1000)