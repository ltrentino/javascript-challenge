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
