// from data.js
let tableData = data;
let tbody = d3.select("tbody");

console.log(data);

//Loop Through `data` 
data.forEach(function(ufoSighting){
    //console.log each ufosighting object
    console.log(ufoSighting);
    //Use d3 to append one table row `tr` for each ufosighting object
    let row = tbody.append("tr");
    //Use `Object.entries` to console.log each ufosighting value
    Object.entries(ufoSighting).forEach(function([key, value]){
        console.log(key, value);
        //Use d3 to append 1 cell per ufo sighting value (datetime, city, state, 
        //country, shape, durationMinutes, comments)
        let cell = row.append("td");
        //Use d3 to update each cell's text with ufo sighting value
        cell.text(value);
    });
});

//select the form
let form = d3.select("#form");
let button = d3.select("#filter-btn");

// Create event handlers for pressing the enter key or clicking filter btn
form.on("submit",runEnter);
button.on("click", runEnter);

function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    let inputElement = d3.select("#datetime");
    // Get the value property of the input element
    let inputValue = inputElement.property("value");
    // Print the value to the console
    console.log(inputValue);

    let filteredData = tableData.filter(entryDate => entryDate.datetime === inputValue);
    console.log(filteredData);

    //clear html table data in tbody already existing
    tbody.html(" ");

    filteredData.forEach(function(filteredSighting){
        //Use d3 to append one table row `tr` for each ufosighting object
        let row = tbody.append("tr");
        //Use `Object.entries` to console.log each ufosighting value
        Object.entries(filteredSighting).forEach(function([key, value]){
            console.log(key, value);
            //Use d3 to append 1 cell per ufo sighting value (datetime, city, state, 
            //country, shape, durationMinutes, comments)
            let cell = row.append("td");
            //Use d3 to update each cell's text with ufo sighting value
            cell.text(value);
        });
    });

    


}