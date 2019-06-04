'use strict';

function jediName(firstName, lastName) {
  const name = firstName.slice(0,2);
  const surname = lastName.slice(0,3);
  return surname + name;
  //console.log(name,surname);
}
let output = jediName('Beyonce', 'Knowles');
console.log(output);

/////////////////////////////////////

function beyond(num){
  if(num === Infinity || num === -Infinity){
    console.log('And beyond');
  }
  else if(num > 0){
    console.log('To infinity');
  }
  else if(num < 0){
    console.log('To negative infinity');
  }
  else if(num === 0){
    console.log('Staying home');
  }
}

beyond(34);

///////////////////////////////////////

let code = [];

function decode(word){   //needs work
  for(let i = 0; i < word.length; i++){
    if(word.charAt(0) === 'a')
      code.push(word.charAt(1));

    if(word.charAt(0) === 'b')
      code.push(word.charAt(2));

    if(word.charAt(0) === 'c')
      code.push(word.charAt(3));

    if(word.charAt(0) === 'd')
      code.push(word.charAt(4));
 
    else{
      console.log(' ')}
  }
  return code;
} 
console.log(decode('craft block argon meter bells brown croon droop'));

////////////////////////////////////////////

let result = '';

function calendar(month, leapYear) { 
  switch (month) { 
  case 'January': 
    result = 'January has 31 days'; 
    break; 
  case 'February': 
    result = 'Februray has 28 days'; 
    break; 
  case 'Februray(leapYear)': 
    result = 'February has 29 days'; 
    break; 
  case 'March': 
    result = 'March has 31 days'; 
    break; 
  case 'April': 
    result = 'April has 30 days'; 
    break; 
  case 'May': 
    result = 'May has 31 days'; 
    break; 
  case 'June': 
    result = 'June has 30 days'; 
    break; 
  case 'July': 
    result = 'July has 31 days'; 
    break; 
  case 'August': 
    result = 'August has 31 days'; 
    break; 
  case 'September': 
    result = 'September has 30 days'; 
    break; 
  case 'October': 
    result = 'October has 31 days'; 
    break; 
  case 'November': 
    result = 'November has 30 days'; 
    break; 
  case 'December': 
    result = 'December has 31 days'; 
    break; 
  } 
  return result;
}

console.log(calendar('Februray(leapYear)'));

/////////////////////////////////////////////

function game(num){
  const one = 'rock'; //1 beats 3
  const two = 'paper'; //2 beats 1
  const three = 'scissors'; //3 beats 2
  const randomNum = Math.floor(Math.random() * 3) + 1;
  let person;
  let cpu;
  
  if((person.num === 1) && (cpu.num === 3))
  {
    console.log('You win!');
  }
  if((person.num === 2) && (cpu.num === 1))
  {
    console.log('You win!');
  }
  if((person.num === 3) && (cpu.num === 2))
  {
    console.log('You win!');
  }
  else {
    console.log('You lose!');
  }

  if(num < 1 || num > 3){
    throw new Error('Please choose a number between 1 and 3');
  }
}

console.log(game(1));