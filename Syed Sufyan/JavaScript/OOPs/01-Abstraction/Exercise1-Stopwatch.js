function sw() {
  let running = false;
  let duration = 0;
  let startTime, endTime;

  this.start = function () {
    if (running) throw new Error("Already running");

    running = true;
    startTime = Date.now();
  };

  this.stop = function () {
    if (!running) throw new Error("Not started yet!!");

    running = false;
    endTime = Date.now();
    const seconds = (endTime - startTime) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    running = false;
    duration = 0;
    startTime = 0;
    endTime = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
