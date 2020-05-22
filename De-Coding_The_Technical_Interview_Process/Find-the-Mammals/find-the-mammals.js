const animals = [
  { type: "Dog", mammal: true },
  { type: "Snake", mammal: false },
  { type: "Cheetah", mammal: true },
];

function findMammals(arr) {
  return arr.filter((i) => i.mammal === true);
}

console.log(findMammals(animals));
