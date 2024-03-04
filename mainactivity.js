function Pokemon(name, hp, critical_attack, lowest_attack, highest_attack) {
    this.name = name;
    this.hp = hp;
    this.critical_attack = critical_attack;
    this.lowest_attack = lowest_attack;
    this.highest_attack = highest_attack;   
}

var Charizard = new Pokemon("Charizard", 90, 30, 1, 15);
var Blastoise = new Pokemon("Blastoise", 95, 28, 1, 14);
var Venasaur = new Pokemon("Venasaur", 100, 26, 1, 13);

var poke_choice = [Charizard, Blastoise, Venasaur];

function Player(type, name, pokemon) {
    this.type = type;
    this.name = name;
    this.pokemon = pokemon;
}

var user = new Player("User", "Arhum", Charizard);
console.log(user.pokemon);

for(i = 0; i < poke_choice.length; i++) {
  if (poke_choice[i] === user.pokemon) {
    poke_choice.splice(i,1);
  }
}  

var comp_choice = function() {
  return poke_choice[Math.floor(Math.random() * poke_choice.length)];
}

var comp = new Player("Computer","Red", comp_choice());

var user_attack = function() {
  var uhigh = user.pokemon.highest_attack
  var ulow = user.pokemon.lowest_attack
  return Math.floor(Math.random() * (uhigh - ulow + 1)) + ulow;
}        

var comp_attack = function() {
  var chigh = comp.pokemon.highest_attack
  var clow = comp.pokemon.lowest_attack
  return Math.floor(Math.random() * (chigh - clow + 1)) + clow;
}     

console.log(comp.pokemon);
console.log(user.pokemon);
console.log(user_attack());
console.log(comp_attack());