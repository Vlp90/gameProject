const localPlayers = localStorage.getItem('players');
const playersData = JSON.parse(localPlayers);

console.log(playersData);

// BOARD ARRAY

let board = [];

// MEMBERS CREATION

class Events {
	constructor(name, position, damage, gain) {
		this.name = name;
		this.position = position;
		this.damage = damage;
		this.gain = gain;
		this.special = true;
	}

	drawCard() {
		document.querySelector(`#card-${this.position} .numGainEvent`).innerHTML = ' + ' + this.gain;
		//document.querySelector(`#card-${this.position} .numGainEvent`).textContent = ' + ' + this.damage;

	}


}

class Members {
	constructor(name, family, position, damage, cost, owned) {
		this.name = name;
		this.family = family;
		this.position = position;
		this.damage = damage;
		this.cost = cost;
		this.member = 0;
		this.owned = owned;
	}

	damageMember() {
		return this.damage;
	}
	drawCard() {
		document.querySelector(`#card-${this.position} .numDamage`).innerHTML = this.damage;
		document.querySelector(`#card-${this.position} .numCost`).innerHTML = this.cost;
	}
}

// MEMBERS/EVENTS POSITIONS

// Stark

let kinglanding = new Events('KingsLanding', 0, 0, 500);
board.push(kinglanding);

let ned = new Members('Ned', 'Stark', 1, 500, 1000, false);
board.push(ned);

let sansa = new Members('Sansa', 'Stark', 2, 300, 800, false);
board.push(sansa);

let robb = new Members('Robb', 'Stark', 3, 200, 400, false);
board.push(robb);

let arya = new Members('Arya', 'Stark', 4, 800, 1200, false);
board.push(arya);

// EVENT
let nerraBattle = new Events('NerraBattle', 5, 500, 0);
board.push(nerraBattle);

// Baratheon

let stannis = new Members('Stannis', 'Baratheon', 6, 300, 800, false);
board.push(stannis);

let rendy = new Members('Rendy', 'Baratheon', 7, 200, 500, false);
board.push(rendy);

let robert = new Members('Robert', 'Baratheon', 8, 300, 600, false);
board.push(robert);

// EVENT

let dragonsBattle = new Events('Dragons Battle', 9, 0, 700, false);
board.push(dragonsBattle);

// Lannister

let tyrion = new Members('Tyrion', 'Lannister', 10, 600, 1300, false);
board.push(tyrion);

let cersei = new Members('Cersei ', 'Lannister', 11, 900, 1800, false);
board.push(cersei);

let jaime = new Members('Jaime', 'Lannister', 12, 650, 1300, false);
board.push(jaime);

let lancel = new Members('Lancel', 'Lannister', 13, 200, 500, false);
board.push(lancel);

// EVENT

let walkersBattle = new Events('Walkers Battle', 14, 700, 0);
board.push(walkersBattle);

// Targaryen

let viserys = new Members('Viserys', 'Targaryen', 15, 250, 400, false);
board.push(viserys);

let rhaegar = new Members('Rhaegar ', 'Targaryen', 16, 400, 800, false);
board.push(rhaegar);

let daenerys = new Members('Daenerys', 'Targaryen', 17, 1000, 2000, false);
board.push(daenerys);



// INITIALISATION DES PARAMETRES

board.forEach(function(element) {
	element.drawCard();
});

// playersData.forEach(function(position) {
// 	position.positionPlayers();
// });
console.log(board);
console.log(playersData);



// PLAYERS

class Player {
	constructor(name, color) {
		this.name = name;
		this.color = color;
		this.position = 0; // doit etre la position de l'id="card-0"
		this.life = 1000;
		this.own = 0;
	}


	diceMove(player) {
		console.log(player);
		let dice = 1 + Math.floor(6 * Math.random());
		console.log('Valeur du dice est : ' + dice);
		let oldPosition = this.position;

		this.position = (this.position + dice) % board.length;
		console.log('La position de ' + this.name + ' est : ' + this.position);
		// console.log(document.querySelector('#card-1 .player1-color'));
		// console.log(player);

		// console.log("ALERTE")
		// console.log(player)

		document.querySelector(`#card-${oldPosition} .player${player + 1}-color`).style.visibility = 'hidden';
		document.querySelector(`#card-${this.position} .player${player + 1}-color`).style.visibility = 'visible';
		// currentCard.querySelector('.player1-color').style.visibility = 'visible';

		// ajouter les conditions d'achat ici
	}




	damage(player) {
		this.life -= board[this.position].damage;
		console.log(this.name + ' a pris ' + board[this.position].damage + ' de degat et sa vie est à : ' + this.life);

		let scorePlayer = document.getElementsByClassName('life-player')[player];
		scorePlayer.innerHTML = ': ' + this.life;

		// Game Over
		if (this.life < 0) {
			let gameOverStatus = document.getElementsByClassName('GameOver')[player];
			gameOverStatus.innerHTML = 'Game Over ';
			console.log(`Game over for ${this.name}.`);
		}
	}

	cardOwner() {}

	// Method displayInfo
	displayInfo() {
		console.log('---------------------------------------');
	}
}


// INIT POSITION JOUEUR
// function positionPlayers(player) {
// 	console.log(player)
// 	document.querySelector(`#card-${this.position} .player${player}-color`).style.visibility = 'visible';
// };





const players = [];
playersData.forEach((player, index) => {
	players.push(new Player(player.name, player.color));

	// COULEURS SCORE
	document.querySelectorAll(`.colorPick${index + 1}`).forEach((color) => {
		color.style.fill = player.color;
		color.style.color = player.color;
	});

	document.querySelectorAll(`.player${index + 1}-color`).forEach((circle) => {
		circle.style.backgroundColor = player.color;
	});

	document.querySelectorAll(`.play${index + 1}`).forEach((players) => {
		players.style.color = player.color;
		players.innerHTML = player.name;
	});

	// PLAY TURN
	// NAME DONT CHANGE
	document.querySelectorAll(`#player-play`).forEach((turn) => {
		turn.style.color = player.color;
		turn.textContent = player.name;
	});
});

// PRINT SCORE

// PRINT CARDS VALUES

// DOM ACHAT

// function buyMember() {

// 	let removeDice = document.querySelector('.player-select.order.order3');
// 	removeContainer.remove();
// }
// removePlayerBtn.onclick = removePlayerContainer;

// let turnName = document.getElementById('player-play');
// turnName.innerHTML = players[0].name;

// PRINT COLOR

// boucle array player query select
let player1Color = document.getElementsByClassName('player1-color');
//console.log(player1Color)

// document.getElementsByClassName("player2-color").style.backgroundColor = "yellow" ;//players[1].color;

// EVENT ON CLICK TO MAKE MOUVEMENT EXECUTE
let turn = 0;

document.getElementById('dice-btn').addEventListener('click', function() {
	let currentPlayer = players[turn % players.length];
	// remplacer element du DOM par currentPlayer.name

	document.querySelectorAll(`#player-play`).forEach((turn) => {
		turn.style.color = currentPlayer.color;
		turn.textContent = currentPlayer.name;
	});

	// document.getElementById('player-play') = currentPlayer.name;
	//  console.log(currentPlayer);
	//  console.log(currentPlayer.name);
	 console.log("ALERTE")
	 console.log("Player sur la case " + board[turn % players.length].name)
	 console.log("Quelqu'un possede la carte ? " + board[turn % players.length].owned)
	 console.log("Player argent " + currentPlayer.life);
	 console.log("Possession de carte " + currentPlayer.own);


	 // CONDITIONS ACHAT

	//  if (document.getElementById('buy-btn').onclick) {
	// 	currentPlayer.own =+ 1;
	//  document.getElementsByClassName('sub-player-name') = currentPlayer.name + currentPlayer.color
	//  }  
	


	currentPlayer.diceMove(turn % players.length);
	// check achat
	currentPlayer.damage(turn % players.length);
	currentPlayer.displayInfo();
	turn++; // recommence le tour par tour
});
