import { players, test } from '../script.js';
console.log(players);
console.log(test);

// console.log(players);
// console.log(colors);

// let player1 = {
// 	name: 'players',
// 	color: 'colors'
// };

// console.log(player1);

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
}

class Members {
	constructor(name, family, position, damage, cost) {
		this.name = name;
		this.family = family;
		this.position = position;
		this.damage = damage;
		this.cost = cost;
		this.owned = false;
	}

	damageMember() {
		return this.damage;
	}
}

// MEMBERS/EVENTS POSITIONS

// Stark

let kinglanding = new Events('KingsLanding', 0, 0, 500);
board.push(kinglanding);

let ned = new Members('Ned', 'Stark', 1, 500, 1000);
board.push(ned);

let sansa = new Members('Sansa', 'Stark', 2, 300, 800);
board.push(sansa);

let robb = new Members('Robb', 'Stark', 3, 200, 400);
board.push(robb);

let arya = new Members('Arya', 'Stark', 4, 800, 1200);
board.push(arya);

// EVENT
let nerraBattle = new Events('NerraBattle', 5, 500, 0);
board.push(kinglanding);

// Baratheon

let stannis = new Members('Stannis', 'Baratheon', 6, 300, 800);
board.push(stannis);

let rendy = new Members('Rendy', 'Baratheon', 7, 200, 500);
board.push(rendy);

let robert = new Members('Robert', 'Baratheon', 8, 300, 600);
board.push(robert);

// EVENT

let dragonsBattle = new Events('Dragons Battle', 9, 0, 700);
board.push(dragonsBattle);

// Lannister

let tyrion = new Members('Tyrion', 'Lannister', 10, 600, 1300);
board.push(tyrion);

let cersei = new Members('Cersei ', 'Lannister', 11, 900, 1800);
board.push(cersei);

let jaime = new Members('Jaime', 'Lannister', 12, 650, 1300);
board.push(jaime);

let lancel = new Members('Lancel', 'Lannister', 13, 200, 500);
board.push(lancel);

// EVENT

let walkersBattle = new Events('Walkers Battle', 14, 700, 0);
board.push(walkersBattle);

// Targaryen

let viserys = new Members('Viserys', 'Targaryen', 15, 250, 400);
board.push(viserys);

let rhaegar = new Members('Rhaegar ', 'Targaryen', 16, 400, 800);
board.push(rhaegar);

let daenerys = new Members('Daenerys', 'Targaryen', 17, 1000, 2000);
board.push(daenerys);

console.log(board);

// PLAYERS

// Remplacer le Player constructor par valeurs des Joueurs (name et color) mais garder le reste
class Player {
	constructor(name, color) {
		this.name = name;
		this.color = color;
		this.position = 0;
		this.life = 1000;
	}

	diceMove() {
		let dice = 1 + Math.floor(6 * Math.random());
		console.log('Valeur du de est à : ' + dice);
		let oldPosition = this.position;

		this.position = (this.position + dice) % board.length;
		console.log('Position du joueur est : ' + this.position);

		let oldCard = document.getElementsByClassName('card-member')[oldPosition];
		console.log(oldCard);
		oldCard.querySelector('.player1-color').style.visibility = 'hidden';

		let currentCard = document.getElementsByClassName('card-member')[this.position];
		console.log(currentCard);
		currentCard.querySelector('.player1-color').style.visibility = 'visible';
	}

	damage() {
		this.life -= board[this.position].damage;
		console.log('Vie est à : ' + this.life);
	}

	// Method displayInfo
	displayInfo() {
		//console.log(`${this.name} rolls ${dice} is at case position ${this.position} and has ${this.life} left`);
		console.log('---------------------------------------');
	}
}

let player1 = new Player('Vladimir', 'red');

// EVENT ON CLICK TO MAKE MOUVEMENT EXECUTE

document.getElementById('dice-btn').addEventListener('click', function() {
	player1.diceMove();
	player1.damage();
	player1.displayInfo();
});
