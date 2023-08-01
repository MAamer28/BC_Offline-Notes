// The new student and grade to add to the table
let newGrade = ["Wash", 79];

// Use D3 to select the table

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped

// Use D3 to select the table body
let TableBody = d3.select("tbody");

// Append one table row `tr` to the table body
let student = TableBody.append("tr");

// Append one cell for the student name
let stuname = student.append("td").text(newGrade[0])

// Append one cell for the student grade
let stugrade = student.append("td").text(newGrade[1])