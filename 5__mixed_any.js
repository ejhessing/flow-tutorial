// @flow
type Smurf = { name: string, age: number}

const papa: Smurf = {
  name: "Papa Smurf",
  age: 300
}

const smurfette = {
  name: "Smurfette",
  age: 200
}

// mixed
// any

function foo(x: mixed) : number {
  if(typeof x === 'string'){
    return x.length
  } else if( typeof x === 'number') {
    return x * 2
  } else {
    return NaN
  }
}

foo("2")
