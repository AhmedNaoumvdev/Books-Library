const books = [1,5,4,2,5]

const maincontents = document.querySelector('main')
const plusicon = document.querySelector('.addbook')
const form = document.querySelector('.bookform')
const title = form.elements['title']
const author = form.elements['author']
const pages = form.elements['pages']

function Books(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBooksToLibrary(book){
    console.log(books.includes(book))
}

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    if(title.value ===""){
        return alert("please provide real data")
    }
    const book1 = new Books(title.value, author.value, pages.value, read.value)
    addBooksToLibrary(book1)
    displaycard(book1)
    
})

function displaycard(book){
    let card = document.createElement('div')
    let title = document.createElement('h3')
    title.innerHTML = `Book title: ${book.title}`
    let author = document.createElement('h3')
    author.innerHTML = `Book author: ${book.author}`
    let pages = document.createElement('h3')
    pages.innerHTML = `Book pages: ${book.pages}`
    let readOrNot = document.createElement('button')

    if(read.checked){
        readOrNot.innerHTML = `Read`
        readOrNot.classList.add('green')
    }else{
        readOrNot.innerHTML = `Not read`
        readOrNot.classList.add('red')
    }
    card.appendChild(title)
    card.appendChild(author)
    card.appendChild(pages)
    card.appendChild(readOrNot)
    card.classList.add('cardstyle')
    plusicon.style.display = 'none'
    maincontents.appendChild(card)

}


/*here I trigger the popup form*/
const pop = document.querySelector('.booksinput')
const root = document.querySelector(':root')
const body = document.querySelector('.container')
const closebtn = document.querySelector('.close')
const press = document.querySelector('.plusicon')
const dark = document.querySelector('.dark')

dark.addEventListener('click', toggleDark)
press.addEventListener('click', toggle);
closebtn.addEventListener('click', toggleAndReset);

function toggleDark(){
    root.classList.toggle('dark')
}
function toggle(){
    pop.classList.toggle('active')
    body.classList.toggle('active')
}
function toggleAndReset(){
    pop.classList.toggle('active')
    body.classList.toggle('active')
}