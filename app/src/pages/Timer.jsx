import React, { useState, useEffect } from "react";

export default function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerInterval;
    if (isRunning && totalSeconds > 0) {
      timerInterval = setInterval(() => {
        setTotalSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (totalSeconds === 0 && isRunning) {
      alert("Time's up!");
      setIsRunning(false);
    }

    return () => clearInterval(timerInterval);
  }, [isRunning, totalSeconds]);

  useEffect(() => {
    const displayHours = Math.floor(totalSeconds / 3600);
    const displayMinutes = Math.floor((totalSeconds % 3600) / 60);
    const displaySeconds = totalSeconds % 60;

    setHours(displayHours);
    setMinutes(displayMinutes);
    setSeconds(displaySeconds);
  }, [totalSeconds]);

  const startTimer = () => {
    const inputHours =
      parseInt(document.getElementById("input-hours").value) || 0;
    const inputMinutes =
      parseInt(document.getElementById("input-minutes").value) || 0;
    const inputSeconds =
      parseInt(document.getElementById("input-seconds").value) || 0;

    const newTotalSeconds =
      inputHours * 3600 + inputMinutes * 60 + inputSeconds;
    setTotalSeconds(newTotalSeconds);
    setIsRunning(true);
  };

  const cancelTimer = () => {
    setIsRunning(false);
    setTotalSeconds(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className="container mt-5">
      <h1>Countdown Timer</h1>

      <div>
        <div class="form-group row align-items-center">
          <div class="col-sm-auto">
            <h5>
              <label for="name-input">Your Name</label>
            </h5>
          </div>
          <div class="col-sm">
            <input
              class="form-control"
              id="name-input"
              placeholder="Your Name"
            ></input>
          </div>
          <div class="col-sm-auto">
            <button type="submit" class="btn btn-primary">
              <i class="bi bi-person-bounding-box"></i>&nbsp;Confirm Identity
            </button>
          </div>
        </div>
      </div>

      <div className="col-sm-auto pt-3">
        <h5>
          <label htmlFor="time-input">Set Timer</label>
        </h5>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0 text-center">Enter Time</h5>
              </div>
              <div className="card-body">
                <div className="row text-center">
                  <div className="col-4">
                    <input
                      type="number"
                      id="input-hours"
                      className="form-control"
                      placeholder="0"
                    />
                    <p>Hours</p>
                  </div>
                  <div className="col-4">
                    <input
                      type="number"
                      id="input-minutes"
                      className="form-control"
                      placeholder="0"
                    />
                    <p>Minutes</p>
                  </div>
                  <div className="col-4">
                    <input
                      type="number"
                      id="input-seconds"
                      className="form-control"
                      placeholder="0"
                    />
                    <p>Seconds</p>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-4">
                    <h3 id="display-hours" className="display-4">
                      {String(hours).padStart(2, "0")}
                    </h3>
                    <p>Hours</p>
                  </div>
                  <div className="col-4">
                    <h3 id="display-minutes" className="display-4">
                      {String(minutes).padStart(2, "0")}
                    </h3>
                    <p>Minutes</p>
                  </div>
                  <div className="col-4">
                    <h3 id="display-seconds" className="display-4">
                      {String(seconds).padStart(2, "0")}
                    </h3>
                    <p>Seconds</p>
                  </div>
                </div>
                <div className="col text-center">
                  <button onClick={startTimer} className="btn btn-success">
                    Start
                  </button>
                  &nbsp;
                  <button onClick={cancelTimer} className="btn btn-warning">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="col-sm-auto pt-3">
          <h5>
            <label for="name-input">Game Mode</label>
          </h5>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
            checked
          ></input>
          <label class="form-check-label" for="inlineRadio1">
            Single-player
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          ></input>
          <label class="form-check-label" for="inlineRadio2">
            Multi-player
          </label>
        </div>
      </div>

      <div class="col-sm d-flex justify-content-center">
        <div class="col-sm-auto pt-3 pb-3">
          <div class="btn btn-primary">
            <i class="bi bi-play-fill"></i>&nbsp;Let's Play!
          </div>
        </div>
      </div>
    </div>
  );
}
