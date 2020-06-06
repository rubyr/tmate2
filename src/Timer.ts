class Timer {
  start: number = new Date().getTime();
  get ms() {
    return new Date().getTime() - this.start;
  }
}

export default Timer;
