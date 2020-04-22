// jshint esversion:6
const superheroes = require("superheroes");
const supervillains = require('supervillains');
const fs = require('fs');

// fs.copyFileSync('file1.txt', 'file2.txt');

var mySuperheroName = superheroes.random();
var myVillainName = supervillains.random();
console.log(mySuperheroName);
console.log(myVillainName);
