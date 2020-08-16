// https://api.unsplash.com/photos/random

const helper = {
  getZero: function (value) {
    return value < 10 ? '0' + value : value;
  },
};

const load = {
  clock: function () {
    setInterval(function () {
      const time = new Date();
      const clock = document.querySelector('#clock');
      clock.innerText = `${getZero(time.getHours())}:${getZero(
        time.getMinutes()
      )}:${getZero(time.getSeconds())}`;
    }, 1000);
  },
};

function init() {
  load.clock();
}

init();
