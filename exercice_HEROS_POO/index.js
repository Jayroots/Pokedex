function createHero(name, level, weapon, attackName) {
  const hero = {};

  hero.name = name;
  hero.level = level;
  hero.weapon = weapon; 
  hero.attackName = attackName;

  hero.attack = function () {
    return `${this.name} ${this.attackName} you!`;
  };

  return hero;

}

const heroes = [
  createHero("Johnny", 1,"micro" , "bites"),
  createHero("Spiderman",7,"crachat", "bites"),
 createHero("SanGoku", 25, "kamehameha", "scratches"),
];

console.log(heroes);
