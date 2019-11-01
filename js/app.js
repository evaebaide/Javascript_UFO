// from data.js
var tableData = data;

//Totorials
// https://www.w3schools.com/js/default.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// https://www.tutorialsteacher.com/d3js/dom-manipulation-using-d3js

// Reference the table body
var tbody = d3.select("tbody");

// Console.log the data
console.log(data);

data.forEach((AlienRecord) => {
    var row = tbody.append("tr");
    Object.entries(AlienRecord).forEach(([key, value]) => {
      var cell = tbody.append("td");
      //document.write(cell.text(value));
      cell.text(value);
     
    });
  });

// Select the submit button 
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  
  // Set the content of tbody to blank
  
  d3.select("tbody").html("");

    // Prevent the page from reloading
  d3.event.preventDefault();

  // Select the input element 
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);  

  var filteredData = tableData.filter(date => date.datetime === inputValue);  
  
  console.log(filteredData);
  
  filteredData.forEach((AlienRecord) => {
    var row = tbody.append("tr");
    Object.entries(AlienRecord).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

});
