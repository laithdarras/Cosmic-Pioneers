import './Timer.css';

export default function Timer() {
  return (
    <div id="main-container" class="container pt-2 pb-2">
      <h1>Countdown Timer</h1>

      <div>
        <div class="form-group row align-items-center">
          <div class="col-sm-auto">
            <h5><label for="name-input">Your Name</label></h5>
          </div>
          <div class="col-sm">
            <input class="form-control" id="name-input" placeholder="Your Name"></input>
          </div>
          <div class="col-sm-auto">
            <button type="submit" class="btn btn-primary"><i class="bi bi-person-bounding-box"></i>&nbsp;Confirm Identity</button>
          </div>
        </div>
      </div>

      <div>
        <div class="col-sm-auto pt-3">
          <h5><label for="name-input">Minutes to Play</label></h5>
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="card">
                <div class="card-header bg-primary text-white">
                  <h5 class="mb-0 text-center">Enter Time</h5>
                </div>
                <div class="card-body">
                  <div class="row text-center">
                    <div class="col-4">
                      <h3 id="hours" class="display-4">00</h3>
                      <p>Hours</p>
                    </div>
                    <div class="col-4">
                      <h3 id="minutes" class="display-4">00</h3>
                      <p>Minutes</p>
                    </div>
                    <div class="col-4">
                      <h3 id="seconds" class="display-4">00</h3>
                      <p>Seconds</p>
                    </div>
                  </div>
                  <div class="col text-center">
                    <div class="btn btn-warning">Cancel</div>&nbsp;
                    <div class="btn btn-success">OK</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="col-sm-auto pt-3">
          <h5><label for="name-input">Game Mode</label></h5>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked></input>
          <label class="form-check-label" for="inlineRadio1">Single-player</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
          <label class="form-check-label" for="inlineRadio2">Multi-player</label>
        </div>
      </div>

      <div class="col-sm d-flex justify-content-center">
        <div class="col-sm-auto pt-3 pb-3">
          <div class="btn btn-primary"><i class="bi bi-play-fill"></i>&nbsp;Let's Play!</div>
        </div>
      </div>
    </div>
  )
}
