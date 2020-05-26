const allAnimals = document.getElementsByClassName("all-animals")[0].childNodes;
const mammalsArray = [];

Array.prototype.forEach.call(allAnimals, (animal) => {
  if (
    animal.childNodes.length > 0 &&
    animal.childNodes[3].childNodes[1].innerHTML === "true"
  ) {
    mammalsArray.push(animal.childNodes[1].innerHTML);
  }
});

const onlyMammals = document.getElementById("only-mammals");

if (mammalsArray.length === 0) {
  let noMammal = document.createElement("p");
  noMammal.innerText = "There are no mammals!";
  onlyMammals.append(noMammal);
} else {
  for (const mammal of mammalsArray) {
    let newMammal = document.createElement("h2");
    newMammal.innerText = mammal;
    onlyMammals.append(newMammal);
  }
}
