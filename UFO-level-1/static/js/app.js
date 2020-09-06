// from data.js
var tableData = data;
let tbody = d3.select("tbody");

console.log(data);

//Loop Through `data` and console.log each weather report object
data.forEach(function(ufoSighting){
    console.log(ufoSighting);
    //Use d3 to append one table row `tr` for each weather report object
    let row = tbody.append("tr");
    //Use `Object.entries` to console.log each weather report value
    Object.entries(ufoSighting).forEach(function([key, value]){
        console.log(key, value);
        //Use d3 to append 1 cell per ufo sighting value (datetime, city, state, 
        //country, shape, durationMinutes, comments)
        let cell = row.append("td");
        //Use d3 to update each cell's text with ufo sighting value
        cell.text(value);
    });
});