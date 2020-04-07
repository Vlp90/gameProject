const addPlayerBtn = document.getElementById('addPlayer');
const removePlayerBtn = document.getElementById('removePlayer');
const blockPlayerContainer = document.getElementById('player-select order order3');
const startGame = document.getElementById('start');


let playerNumber = 0;
// ADD PLAYER CONTAINER
function addPlayerContainer() {
	playerNumber++;

	let insertContainer = document.querySelector('.main-select.order');
	insertContainer.insertAdjacentHTML(
		'afterend',
		'<div class = "player-select order order3"><input id="name-input" type="text" placeholder="Enter Playername"><div class="order2"><label>Pick your color</label><input id="color-input" type="color"></div></div>'
	);
}
// EXECUTE
addPlayerBtn.onclick = addPlayerContainer;



// REMOVE PLAYER CONTAINER
function removePlayerContainer() {

	playerNumber--;

	let removeContainer = document.querySelector('.player-select.order.order3');
	removeContainer.remove();
}
removePlayerBtn.onclick = removePlayerContainer;

// START BUTTON
function initGame() {
	
}


document.getElementById("myButton").onclick = function () {
    if (playerNumber < 2){
        alert("There are no enough players, please add at least 2 players")
    } else {
        location.href = "/board/board.html";
    }
};
