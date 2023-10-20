/////////////////////////////DZ1
let books2 = ['Война и мир','Звук и ярость','Илиада и Одиссея','Дети полуночи','Вечный сон','Цвет пурпурный']

    function filterBooks(books2) {
    let filteredBooks = books2.filter(book => book.includes("у"))
    let otherBooks = books2.filter(book => !book.includes("у"))
    filteredBooks = filteredBooks.map(book => book + " книга с буквой \"у\"")
    for (let i = 0; i < filteredBooks.length; i++) {
        console.log(filteredBooks[i])
        }
        for (let i = 0; i < otherBooks.length; i++) {
            console.log(otherBooks[i])
            }
        
    }
    filterBooks(books2)

    /////////////////////////////DZ2
    let button = document.querySelectorAll(".button");
    for(let i = 0; i < button.length; i++) {
    button[i].onclick = function() {
    let plusbtn = this.querySelector(".plus");
    let minusbtn = this.querySelector('.minus');
    let number = this.querySelector('input');
    let numberbtn = +number.value;
    plusbtn.onclick = function() {
        number.value = numberbtn + 1;
    }
    minusbtn.onclick = function() {
        number.value = numberbtn - 1;
    }
        }
    }   

   ////////////////////////// THE END!