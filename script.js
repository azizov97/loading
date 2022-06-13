const indicator = document.getElementById("loading-indicator");
let w = 0;
let interval;
function startLoading() {
  interval = setInterval(() => {
    indicator.style.width = `${w}%`;
    indicator.innerHTML = w;
    console.log(w);
    if (w == 100) clearInterval(interval);
    w++;
  }, 50);
}
