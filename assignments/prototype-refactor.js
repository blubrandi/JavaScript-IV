/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday


2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// function GameObject(attr){
//     this.createdAt = attr.createdAt
//     this.dimensions = attr.dimensions
//   }
  
//   GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game.`
//   }

//   function CharacterStats(stats) {
//     GameObject.call(this,stats)
//     this.healthPoints = stats.healthPoints
//     this.name = stats.name
//   }
  
//   CharacterStats.prototype = Object.create(GameObject.prototype)
  
//   CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage.`
//   }

//   function Humanoid(info) {
//     CharacterStats.call(this,info)
//     this.team = info.team
//     this.weapons = info.weapons
//     this.language = info.language
//   }
  
//   Humanoid.prototype = Object.create(CharacterStats.prototype)
  
//   Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}`
//   }
  
