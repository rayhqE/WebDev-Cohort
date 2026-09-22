class Cricketer {
  constructor(name, role) {
    this.name = name;
    this.role = role;
    this.matchesPlayed = 0;
    this.stamina = 100;
  }
  introduce() {
    return `${this.name} the ${this.role} | Matches Played: ${this.matchesPlayed} | Stamina: ${this.stamina}`;
  }
}

const player1 = new Cricketer("Virat", "Batsman");
const player2 = new Cricketer("Bumrah", "Bowler");
// console.log(player1.hasOwnProperty("name"));
// console.log(player2.hasOwnProperty("name"));
// console.log(typeof Cricketer);

class Debutant {
  constructor(name) {
    this.name = name;
    this.walkout = () => `${this.name} walks out to bat for the first time`;
  }
}
const debutant1 = new Debutant("Shubman");
const someThing = debutant1.walkout;
console.log(someThing());

const debutant2 = new Debutant("Yashasvi");
console.log(debutant1.walkout === debutant2.walkout);
