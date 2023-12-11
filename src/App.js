import React from "react";

const GuessNumberGame = () => {
  return (
    <div>
      <h1>猜數字遊戲</h1>
      <p>猜一個介於 1 到 100 之間的數字：</p>
      <input type="text" id="guessField" />
      <button>猜！</button>
      <p className="message"></p>
    </div>
  );
};

export default GuessNumberGame;
