import { availableBooks } from "./data.js";
const chosenLanguage = document.getElementById("language")
const chosenGenre = document.getElementById("genre")
const target = document.getElementById("target")
const btn = document.getElementById("generate-btn")


function getMatching()
{
  let bookArray = []
  availableBooks.forEach(function(books){
    if(books.language === chosenLanguage.value && books.genre === chosenGenre.value)
    {
      bookArray.push(books)
    }
  })
  return bookArray
}

// document.addEventListener("click",function(){
//   getMatching()
// })

btn.addEventListener("click",function(){
  let renderArray = getMatching()
  let randomNumber = Math.floor(Math.random()*renderArray.length)
  target.innerHTML = `
  <div class="result-container">
  <img class="showing-img" src="${renderArray[randomNumber].image}">
  <h1>${renderArray[randomNumber].bookName}</h1>
  <h2>Written By: ${renderArray[randomNumber].author}</h2>
  <p>Have a great read</p>
 </div>`
})

