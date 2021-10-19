// https://mixkit.co/free-sound-effects
import startSound from '../audio/mixkit-cool-interface-click-tone-2568.wav'
import pauseSound from '../audio/mixkit-message-pop-alert-2354.mp3'
import endSound from '../audio/mixkit-uplifting-bells-notification-938.wav'

const sounds = {};

sounds.start = new Audio(startSound);
sounds.pause = new Audio(pauseSound);
sounds.end = new Audio(endSound);

const demo = {
  totalSessionLength: 0, // in ms
  currentSessionLength: 0,
  clock: null,
  startButton: null,
  timer: null,
  startTime: null,
  sessionCount: 1,
  inBackgroundOnDone: false,

  start() {
    this.clock = document.getElementById('timer');
    this.startButton = document.getElementById('startButton');
    this.setSessionCounter(this.sessionCount);
    this.setTimerSession(document.querySelector("input[name='timer-length']:checked").value * 60);

    document.querySelectorAll("input[name='timer-length']").forEach((input) => {
      input.addEventListener('click', (event) => {
        this.sessionTimeClicked(event);
      });
    });

    this.startButton.addEventListener('click', () => { this.startClicked(); });
  },

  // sets the Timer Session to timeInSeconds and updates the UI
  setTimerSession(timeInSeconds) {
    this.totalSessionLength = timeInSeconds;
    this.currentSessionLength = this.totalSessionLength;
    this.setClock(timeInSeconds);
  },

  // Update the clock UI to show timeInSeconds
  setClock(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60).toString();
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    this.clock.innerHTML = `${minutes}:${seconds}`;
    
  },

  // set the Session Counter UI to show sessions
  setSessionCounter(sessions){
    const counterElem = document.getElementById('sessionCount');
    counterElem.innerHTML = `Session #${sessions}`;
  },

  // set TimerRing UI to show percentage complete
  setTimerRing(percent) {
    document.querySelector('#timer-circle').style.setProperty('stroke-dasharray', `${percent}, 100`);
  },

  // start button has been clicked by user - we should start the timer
  startClicked() {
    if (this.startTime == null) {
      // start timer
      this.startTimer();
    } else {
      this.pauseTimer();
    }
  },

  // user has clicked a session time button. We should update the session time
  sessionTimeClicked(event) {
    if (this.startTime !== null) {
      this.pauseTimer();
    }

    this.setTimerRing(0);
    const session = event.target.id;

    if (session === 'custom') {
      // trigger edit
    } else {
      this.setTimerSession(parseInt(session) * 60);
    }
  },

  // if the timer is in a background window or tab when it goes off, let's make sure to clear it when we get visibility back again.
  visibilityChanged() {
    if (this.inBackgroundOnDone) {
      this.timerClear();
    }
  },

  // called to start the clock
  startTimer() {
    this.startTime = Date.now();
    this.startButton.innerHTML = 'Pause';
    sounds.start.play();
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  },

  // called when the clock should pause
  pauseTimer() {
    clearInterval(this.timer);
    // new session length is the amount of time left on the clock at pause
    this.currentSessionLength -= this.delta();
    this.startTime = null;
    this.startButton.innerHTML = 'Start';
    sounds.pause.play();
  },

  // called when the timer should be cleared. 
  // If the timer is running in another tab/window when done, 
  // let's wait to finish clearing it until the window has focus again
  timerClear() {
    clearInterval(this.timer);

    if (document.hidden) {
      this.inBackgroundOnDone = true;
      return
    }

    this.inBackgroundOnDone = false;
    this.startTime = null;
    this.currentSessionLength = this.totalSessionLength;
    this.startButton.innerHTML = 'Start';
    this.sessionCount += 1;
    this.setSessionCounter(this.sessionCount);
  },

  // call this every second while the clock is running to update the time and UI
  tick() {
    const delta = this.delta(); // in seconds
    
    if (delta > this.currentSessionLength) {
      // timer done!
      sounds.end.play();
      this.timerClear();
    } else {
      // timer still running!
      const timeLeft = this.currentSessionLength - delta;
      this.setClock(timeLeft);
      this.setTimerRing((this.totalSessionLength - timeLeft) / this.totalSessionLength * 100);
    }
  },

  // returns the difference between the start time and the time now
  delta() {
    return Math.floor((Date.now() - this.startTime) / 1000);
  },
};

// run the demo when the page has loaded
document.addEventListener('DOMContentLoaded', () => {
  demo.start();
});

document.addEventListener("visibilitychange", () => {
  demo.visibilityChanged();
});
