let runs = 0;
let wickets = 0;
let overs = 0;
let balls = 0;

function noRun() {
  runs;
  balls++;
  updateScore();
}

function addRuns(run) {
  runs += run;
  balls++;
  updateScore();

  if (run === 6) {
    document.getElementById("score").classList.add("animation-6");
    setTimeout(() => {
      document.getElementById("score").classList.remove("animation-6");
    }, 800);
  } else if (run === 4) {
    document.getElementById("score").classList.add("animation-4");
    setTimeout(() => {
      document.getElementById("score").classList.remove("animation-4");
    }, 800);
  }
}

function wicket() {
  wickets++;
  balls++;
  updateScore();

  document.getElementById("score").classList.add("animation-wicket");
  setTimeout(() => {
    document.getElementById("score").classList.remove("animation-wicket");
  }, 800);
}

function noBall() {
  runs++;

  updateScore();
}

function wide() {
  runs++;
  updateScore();
}

function reset() {
  runs = 0;
  wickets = 0;
  overs = 0;
  balls = 0;
  updateScore();
}

function updateScore() {
  document.getElementById("score").classList.remove("fade-in");
  document.getElementById("score").style.color = "#e44d26"; // Highlight score update
  setTimeout(() => {
    document.getElementById("score").style.color = "#333";
    document.getElementById("score").classList.add("fade-in");
  }, 500);

  document.getElementById("runs").innerText = runs;
  document.getElementById("wickets").innerText = wickets;

  overs = Math.floor(balls / 6) + (balls % 6) / 10;
  document.getElementById("oversCount").innerText = overs.toFixed(1);

  const runRate = (runs / overs).toFixed(2);
  document.getElementById("runRateValue").innerText = runRate;
}
