function jediName(firstName, lastName) {
    const name = firstName.slice(0,2);
    const surname = lastName.slice(0,1);
     name + surname;
}
let output = jediName('Beyonce', 'Knowles');
console.log(output);