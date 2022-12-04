const images = document.querySelectorAll(".box");
document.body.scrollTop = 0;

const myImageObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("add-anim");
      }
    });
  },
  {
    threshold: [0.1],
  }
);

for (var image of images) {
  myImageObserver.observe(image);
}
const essays = [
  {input1: 'essay-1'},
  {input2: 'essay-2'},
]
const searchInput = document.queryselector('.input')
// inside, we will need to achieve a few things:
// 1. declare and assign the value of the event 's target to a variable AKA whatever is typed in the search Bar
let value = e.target.value

// 2.check: if input exists and if input is larger than 0
if (value && value.trim().length > 0){
  // 3. redefne 'value' to exclude white space and change input to all lowercase
  value = value.trim().tolowerCase()
  console.log("search exists")
  // 4. return the results only if the value of the search is included in the person's name
  //  we need to write code (a function for filtering through our date to include the search input value)
} else {
  //  5. return nothing
  // input is invalid -- show an error message or show no results
  }


const clearbutton = document.getElementById('clear')

clearButton.addEventListener("click",() => {
  // 1. write a function that removes any previous results from the page
})

// creating and declaring a function called "setlist"
// setlist takes in a param of "results"
function setlist(results){
  for (const person of results){
    // creating a li element for each result item
    const resultItems = document.createElement('li')

    // adding a class to each item of the results
    resultItem.classlist.add('results-item')

    // grabbing the name of the current point of the loop and adding the name as the list item's text
    const text = document.createTextNode(person.name)

    // appending the text to the result item
resultItem.appendChild(text)

//  appending the result item to the list
list.appendChild(resultItem)
  }
}
//searchInput.addEventListener("input", (e) => {
  //  let value = e.target.value

    //if (value && value.trim().length > 0){
      //   value = value.trim().toLowerCase()

        //returning only the results of setList if the value of the search is included in the person's name
        //setList(people.filter(person => {
          //  return person.name.includes(value)
      //  }))
