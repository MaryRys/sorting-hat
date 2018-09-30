let house = [
    {name:'Gryffindor', color:'red'},
    {name:'Hufflepuff', color:'yellow'},
    {name:'Ravenclaw', color:'blue'}, 
    {name:'Slytherin', color:'green'}  
];

let randHouse = house[Math.floor(Math.random() * house.length)];

const pageLoad = () => {
    document.getElementById('jumbotron').style.display = "block";
    document.getElementById('sortingForm').style.display = "none";      
}
pageLoad();

const startForm = () => {
    document.getElementById('jumbotron').style.display = "none";
    document.getElementById('sortingForm').style.display = "block";
}


const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
}
// calling all buttons
const sortingButton = document.getElementById('startSorting').addEventListener('click', startForm);
const submitSortingButton = document.getElementById('sortingButton');
const nameInputElem = document.getElementById('nameInput');
const 

// student card builder
buildNewStudentCard = (name, ) => {
    if (nameInputElem === "") {
        window.alert('You must enter a name in order to sort!');
    } else {
        let randHouse = house[Math.floor(Math.random() * house.length)];
        let domString = 
        `<div class="card .bg-${house.color}">
            <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${randHouse.name}</p>
            <button type="submit" id="expelBtn" class="btn btn-primary expelBtn">Expel</button>
            </div>
        </div>`

        printToDom(domString, 'studentCards')
        };
}
// executes student card builder
submitSortingButton.addEventListener("click", (e) => {
    e.preventDefault();
    buildNewStudentCard(nameInputElem.value, buildNewStudentCard)
});

// expel student 
const activatesExpel = () => {
    const expelButton = document.getElementsByClassName('expelBtn');
    
    for (let i = 0; i<expelButton.length; i++) {
        const element = expelButton[i];
        element.addEventListener('click', (e) => {
            const buttonIClicked = e.target;
            const cardToDelete = buttonIClicked.parentNode.parentNode;
            cardToDelete.remove();
        })
    }
};
activatesExpel();
