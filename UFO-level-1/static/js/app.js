// from data.js
var tableData = data;

// checking data
console.log(tableData);

// get reference to table body
var tbody = d3.select("#ufo-table");

// append table rows
tableData.forEach((data_row) => {
    var table_row = tbody.append("tr");
    table_row.append("td").text(data_row.datetime);
    table_row.append("td").text(data_row.city);
    table_row.append("td").text(data_row.state);
    table_row.append("td").text(data_row.country);
    table_row.append("td").text(data_row.shape);
    table_row.append("td").text(data_row.durationMinutes);
    table_row.append("td").text(data_row.comments);
});


// filter button
var button = d3.select("#filter-btn")

// prevent default to 
button.on("click", function(event) {
    d3.event.preventDefault();
    tbody.html("");
    
    
    var input_element = d3.select("#datetime");
    var input_value = input_element.property("value");


    var tbody_filtered = d3.select("#ufo-table"); //this was to try keep the table cols names but not working.

var filteredData = tableData.filter(tableData => tableData.datetime === input_value);
filteredData.forEach((data_row) => {
    var table_row = tbody_filtered.append("tr");  
    table_row.append("td").text(data_row.datetime);
    table_row.append("td").text(data_row.city);
    table_row.append("td").text(data_row.state);
    table_row.append("td").text(data_row.country);
    table_row.append("td").text(data_row.shape);
    table_row.append("td").text(data_row.durationMinutes);
    table_row.append("td").text(data_row.comments);

});
});

