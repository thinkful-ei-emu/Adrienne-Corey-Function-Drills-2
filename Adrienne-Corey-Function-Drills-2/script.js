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

