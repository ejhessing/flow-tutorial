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

// T[]
//Array<T> - anytype

function sumOfAges(smurfs: Smurf[]): number {
  return smurfs.reduce((sum, smurf) => sum + smurf.age, 0)

  // let sum = 0;
  // for (const smurf of smurfs) {
  //   sum += smurf.age
  // }
  // return sum
}

function concatOfName(smurfs: Smurf[]): string {
  return smurfs.reduce((str, smurf) => str + smurf.name, "")
}

sumOfAges([papa, smurfette])
