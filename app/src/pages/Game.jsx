import gameImage from "../images/game.png";

export default function Game() {
  return (
    <div className="text-center">
      <h2>Average Max BPM 150</h2>
      <h3>30 Minutes</h3>
      <h1>Loading Game ...</h1>
      <img src={gameImage} style={{ width: "30%" }} alt="game art" />
    </div>
  );
}
