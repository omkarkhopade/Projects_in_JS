document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll(".cell");
  const statusText = document.getElementById("status");
  const restartBtn = document.getElementById("restart-btn");

  let currentPlayer = "X";
  let board = ["", "", "", "", "", "", "", "", ""];
  let gameActive = true;

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  cells.forEach((cell) => {
    cell.addEventListener("click", handleCellClick);
  });

  restartBtn.addEventListener("click", restartGame);

  function handleCellClick(e) {
    const clickedCell = e.target;
    const clickedIndex = clickedCell.getAttribute("data-index");

    if (board[clickedIndex] !== "" || gameActive === false) {
      return;
    }

    board[clickedIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    if (currentPlayer === "X") {
      clickedCell.classList.add("x");
    } else {
      clickedCell.classList.add("o");
    }

    checkResult();
  }

  function checkResult() {
    let roundWon = false;

    for (let i = 0; i < winningCombinations.length; i++) {
      const combination = winningCombinations[i];

      const a = board[combination[0]];
      const b = board[combination[1]];
      const c = board[combination[2]];

      if (a === "" || b === "" || c === "") {
        continue;
      }

      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      statusText.textContent = `Player ${currentPlayer} Wins!`;
      gameActive = false;
      return;
    }

    if (!board.includes("")) {
      statusText.textContent = "Game Draw!";
      gameActive = false;
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s Turn`;
  }


  function restartGame() {
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;

    statusText.textContent = "Player X's Turn";

    cells.forEach((cell) => {
      cell.textContent = "";
      cell.classList.remove("x" , "o");
    });
    }
});