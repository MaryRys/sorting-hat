let house = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
let randHouse = house[Math.floor(Math.random() * house.length)];

const startForm = () => {
    document.getElementById('jumbotron').style.display = "none";
    document.getElementById('sortingForm').style.display = "block";
}

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

const sortingButton = document.getElementById('startSorting').addEventListener('click', startForm);

const buildNewStudentCard = (name, randHouse) => {
    let domString = `<div class="card">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${randHouse}</p>
      <a href="#" class="btn btn-primary">Expel</a>
    </div>
  </div>`;

    printToDom(domString, 'studentCards');
}
const submitSortingButton = document.getElementById('sortingButton');
const nameInputElem = document.getElementById('nameInput');

submitSortingButton.addEventListener("click", (e) => {
    e.preventDefault();
    buildNewStudentCard(nameInputElem.value, randHouse)
});

// const isEmpty = () => {
//     if (nameInputElem === "") {
//         alert('Enter a name!');
// }}