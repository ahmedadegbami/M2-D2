// <!-- MANDATORY JS EXERCISES (create a different file for this exercise)
//     1) Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]
//     2) Create an unordered list using JavaScript and save it in a variable
//     3) Cycle the array and create a list-item via JavaScript for every element
//     4) Insert the genere as text in the list-item
//     5) Append the list items in the unordered list
//     6) Append the unordered list in the document. The list should appear in the page.
// -->

// 1) Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]
let genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]

// 2) Create an unordered list using JavaScript and save it in a variable

let unOrderedList = document.createElement("ul")


// 3) Cycle the array and create a list-item via JavaScript for every element

for (let i = 0; i < genres.length; i++) {
    let list = document.createElement("li")
    list.innerText = genres[i]
    unOrderedList.appendChild(list)
}

document.body.appendChild(unOrderedList)




