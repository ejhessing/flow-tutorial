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

type SmurfMetric = {
  name: string,
  measure: (s: Smurf) => number
}

const lengthOfName : SmurfMetric = {
  name: "length of name",
  measure: (s) => s.name.length
}
const ageInCenturies : SmurfMetric = {
  name: "ageInCenturies",
  measure: (s) => s.age / 100
}
