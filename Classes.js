// STEP 1:

// First, create a Monster class
// Add properties for name, Health, Strength and Gold
// Add a constructor to initialize our values
// Add a method to print out the Monster's health, strength, name and gold
// Create a Monster and print out that Monster's stats
class Monster {
    constructor(name, health, strength, gold) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.gold = gold;
    }

    printStats = () => {
        console.log(`Monster: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Strength: ${this.strength}`);
        console.log(`Gold: ${this.gold}`);
    }
}

let m1 = new Monster('M1', 100, 200, 300);
// m1.printStats();

// STEP 2:

// Next, create a Boss class that inherits from the Monster class
// Add a property to the Boss class called ExperiencePoints
// Add a method to the Boss class called Heal that heals the Boss to full health
// Create a Boss and print out that Boss's stats
// Set the health of the Boss to 0.
// Next call the Heal method on our Boss and then print out the stats again

class Boss extends Monster {
    constructor(name, health, strength, gold, xp) {
        super(name, health, strength, gold);
        this.xp = xp;
        this.fullHealth = health;
    }

    heal = () => {
        this.health = this.fullHealth;
    }

    printStats() {
        super.printStats();
        console.log(`XP: ${this.xp}`);
    }
}
let b1 = new Boss('B1', 300, 200, 100, 1000);

// b1.printStats();
// b1.health = 0;
// b1.printStats();
// b1.heal();
// b1.printStats();





// STEP 3:

// Create a Player class that has properties of Name, Health, Strength and Gold
// Create a method on the player class that prints out the player's stats
// Create a player
// Call the Print method on the instantiated player class

class Player {
    constructor(name, health, strength, gold) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.gold = gold;
    }

    printStats = () => {
        console.log(`Monster: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Strength: ${this.strength}`);
        console.log(`Gold: ${this.gold}`);
    }
}

let p1 = new Player('P1', 250, 250, 250);
// p1.printStats();

// STEP 4:

// Create a Game class
// Create a Player property of that Game class
// Create a collection of Monsters in the Game class
// Create a constructor in the Game class to initialize our initial values
// Create a method in the Game class that prints our the game status, which will include all monster status
// and the player status

class Game {
    constructor(player, monsters) {
        this.player = player;
        this.monsters = monsters;
    }

    printStats() {
        this.player.printStats();
        for(let m of this.monsters){
            m.printStats();
        }
    }
}
let monsters = [m1, b1];
let game = new Game(p1, monsters);
game.printStats();