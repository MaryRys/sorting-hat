let house = [
    {name:'Gryffindor', color:'red'},
    {name:'Hufflepuff', color:'yellow'},
    {name:'Ravenclaw', color:'blue'}, 
    {name:'Slytherin', color:'green'}  
];

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
    if (nameInputElem === "") {
        alert('You must enter a name in order to sort!')
    } else {
        let randHouse = house[Math.floor(Math.random() * house.length)];
        let domString = 
        `<div class="card">
            <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${randHouse.name}</p>
            <a href="#" class="btn btn-primary">Expel</a>
            </div>
        </div>`

        printToDom(domString, 'studentCards')
        };
}
const submitSortingButton = document.getElementById('sortingButton');
const nameInputElem = document.getElementById('nameInput');

submitSortingButton.addEventListener("click", (e) => {
    e.preventDefault();
    buildNewStudentCard(nameInputElem.value, buildNewStudentCard)
});

// const isEmpty = () => {
//     if (nameInputElem === "") {
//         alert('Enter a name!');
// }}