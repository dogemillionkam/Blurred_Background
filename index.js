const loadText = document.querySelector(".loading-text");
console.log(loadText);
const bg = document.querySelector(".bg");
console.log(loadText);
let load = 0;

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const blurring = () => {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 0, 1);
  bg.style.filter = `blur(${scale(load, 0, 100, 10, 0)}px)`;
};

let int = setInterval(blurring, 30);
