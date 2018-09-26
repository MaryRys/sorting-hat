const startForm = () => {
    document.getElementById('jumbotron').style.display = "none";
    document.getElementById('sortingForm').style.display = "block";
}

const sortingButton = document.getElementById('startSorting').addEventListener('click', startForm);

// const startSortingGame = () => {
//     let domString = 
// }