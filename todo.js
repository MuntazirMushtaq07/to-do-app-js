// ==========================
// Adding Items to the List
// ==========================

let text = document.getElementById("input");  // . Stores reference to the input box
let button = document.getElementById("btn");  // . Stores reference to the 'Add' button
let list = document.getElementById("box");    // . Stores reference to the list container div

button.addEventListener("click", function () { // . When button is clicked, run this function
  let input = text.value;                      // . Store current input text into a variable

  if (input === "") {                          // . Check if the input is empty
    console.log("u can submit empty box");     // . If empty, log warning
    return;                                    // . Stop function here
  }

  let items = document.createElement("p");     // . Create a <p> tag to show the item
  items.innerText = input;                     // . Set the text inside <p> to input value

  let del = document.createElement("button");  // . Create a delete button
  del.innerText = "❌";                         // . Set its symbol to a cross
  del.style.marginLeft = "10px";               // . Add spacing between text and button
  del.style.color = "red";                     // . Make the delete icon red

  del.addEventListener("click", function () {  // . On clicking ❌
    items.remove();                            // . Remove the <p> tag (item text)
    del.remove();                              // . Remove the delete button
  });

  items.append(del);                           // . Add the ❌ button beside item text inside <p>
  list.prepend(items);                         // . Add the item to the top of the list
  text.value = "";                             // . Clear the input box
});


// ==========================
// Searching Items from the List
// ==========================

let searchbox = document.getElementById("search-input");    // . Reference to the search text input
let searchbtn = document.getElementById("search-button");   // . Reference to the 'Search' button
let searched = document.getElementById("search-div");       // . Reference to where matched results will show

searchbtn.addEventListener("click", function () {           // . On clicking 'Search' button
  let query = searchbox.value;                              // . Store the search keyword
  searched.innerHTML = "";                                  // . Clear previous search results

  let allItems = document.querySelectorAll("#box p");       // . Select all <p> elements in the main list
  let found = false;                                        // . Flag to track if a match is found

  allItems.forEach(function (item) {                        // . Go through each <p> element in the list
    if (item.innerText.toLowerCase().includes(query)) {     // . Check if item text contains the query (case-insensitive)
      found = true;                                          // . Match found

      let searchitm = document.createElement("p");           // . Create new <p> to show in search result
      searchitm.innerText = item.innerText;                  // . Copy the same item text into new <p> for search result
      // So we can compare both in search and main list

      let del = document.createElement("button");            // . Create delete button for search result
      del.innerText = "❌";                                  // . Set ❌ symbol
      del.style.marginLeft = "10px";                         // . Style spacing
      del.style.color = "red";                               // . Style color

      del.addEventListener("click", function () {            // . When ❌ in search result is clicked
        searchitm.remove();                                  // . Remove it from search results
        item.remove();                                       // . Also remove original from main list
        //  This deletes both — the matched result shown AND its original entry
      });

      searchitm.appendChild(del);                            // . Add delete button beside the result text
      searched.appendChild(searchitm);                       // . Add the result to the search-div
    }
  });

  if (!found) {                                              // . If no item matched the search
    searched.innerText = "No match found.";                  // . Show this message
  }

  searchbox.value = "";                                      // . Clear search input
});
