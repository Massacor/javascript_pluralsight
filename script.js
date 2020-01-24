'use strict';

//Literal object
var melee = {
	name:'Nikana Prime', 
	type:'nikana', 
	riven: function(){console.log('low riven disposition')}
};

function Warframe (name, type, ability1, ability2, ability3, ability4){
	this.name = name,
	this.type = type,
	this.ability = {
		a1 : ability1,
		a2 : ability2,
		a3 : ability3,
		a4 : ability4
	}
};

console.log(melee.name);
melee.riven();

var ember = new Warframe("ember", "dps", "fireball", "immolation", "release", "world in flame");

console.log(ember.ability.a1);