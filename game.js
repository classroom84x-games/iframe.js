
function loadGame() {
  const urlParams = new URLSearchParams(window.location.search);
  const gameId = urlParams.get('gameId');

  fetch('games.json')
    .then(response => response.json())
    .then(data => {
      const game = data.games.find(game => game.id === gameId);
      
      if (game) {
        document.getElementById('game-title').textContent = game.title;
        document.getElementById('game-description').textContent = game.description;
        document.getElementById('game-link').href = game.url;
      } else {
        document.getElementById('game-title').textContent = 'Game not found';
        document.getElementById('game-description').textContent = 'Sorry, we could not find the game you selected.';
      }
    })
    .catch(error => {
      console.error('Error loading games.json:', error);
      document.getElementById('game-title').textContent = 'Error loading game';
      document.getElementById('game-description').textContent = 'There was an error loading the game details.';
    });
}

window.onload = loadGame;
