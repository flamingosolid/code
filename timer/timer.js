let t = 10;
let i;
function timer() {
  console.log(t);
  t--;

  if (t < 0) {
    clearInterval(i);
    return;
  }
}
i = setInterval(timer, 1000);
