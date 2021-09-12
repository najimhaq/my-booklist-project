/* Dom Selection
Event Listener
Basic Validation
Creating Element
Append */

//Dom
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

//Event Listener
btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (title.value == '' && author.value == '' && year.value == '') {
        alert('Please fill all Input')
    } else {
        const newRow = document.createElement('tr');
        
        //Title
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        //Author
        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        //Year
        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        //Book List Data Pass
        bookList.appendChild(newRow);

    }

});

