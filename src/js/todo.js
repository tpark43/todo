// https://api.unsplash.com/photos/random

const load = {
  clock: function () {
    setInterval(function () {
      const time = new Date();
      const clock = document.querySelector('#clock');
      clock.innerText = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    }, 1000);
  },
};

function init() {
  load.clock();
}

init();
