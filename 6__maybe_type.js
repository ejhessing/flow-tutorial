// @flow

type Smurf = { name: string, age: ?number}

const papa: Smurf = {
  name: "Papa Smurf",
  age: 300
}

const smurfette = {
  name: "Smurfette",
  age: 200
}


function toString(smurf : Smurf): string {
  if(smurf.age == null) { //typeof smurf.age === "undefined"
    return `${smurf.name} is immortal`
  }
  return `${smurf.name} is ${smurf.age} years old`
}


const x : number | string = 42;
const y : number | null = 42;
