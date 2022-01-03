let countDate = Date.now() + 10000;
let t;
function countDown() {
  // let countDate = new Date("january 3, 2022 20:00:00 ").getTime();
  let now = new Date().getTime();
  let gap = countDate - now;
  console.log(gap);
  if (gap < 0) {
    clearInterval(t);
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.max(Math.floor(gap / day), 0);
  const textHour = Math.max(Math.floor((gap % day) / hour), 0);
  const textMinute = Math.max(Math.floor((gap % hour) / minute), 0);
  const textSecond = Math.max(Math.floor((gap % minute) / second), 0);

  document.querySelector(".day").innerHTML = textDay;
  document.querySelector(".hour").innerHTML = textHour;
  document.querySelector(".minute").innerHTML = textMinute;
  document.querySelector(".second").innerHTML = textSecond;
}

t = setInterval(countDown, 1000);

//exemple
/*
const to = new Date('December 30, 2021') 

function countdown() {
    const now = Date.now()
    const countDate = to.getTime()
    const timeRemaining = new Date(countDate - now)
    
    const days = timeRemaining.getDate()
    const hours = timeRemaining.getHours()
    const minutes = timeRemaining.getMinutes()
    const seconds = timeRemaining.getSeconds()

    console.log(days, hours, minutes, seconds);
}*/
