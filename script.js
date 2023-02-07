let result = [];

let results = [
    { name: "John Doe", id: "12345", result: "85%" },
    { name: "Jane Doe", id: "67890", result: "90%" },
    { name: "Jim Smith", id: "11223", result: "80%" }
  ];

  function addResult() {
    let studentName = document.getElementById("student-name").value;
    let studentId = document.getElementById("student-id").value;
    let studentResult = document.getElementById("student-result").value;
    result.push({ name: studentName, id: studentId, result: studentResult });
    alert(`Result added successfully: 
    Student Name: ${studentName}
    Student ID: ${studentId}
    Result: ${studentResult}`);
  }
  
 
  function displayResults() {
    let resultsTable = document.getElementById("results-table");
    let resultsBody = document.getElementById("results-body");
  
    for (let i = 0; i < results.length; i++) {
      let result = results[i];
      let row = resultsBody.insertRow();
      let nameCell = row.insertCell(0);
      let idCell = row.insertCell(1);
      let resultCell = row.insertCell(2);
      nameCell.innerHTML = result.name;
      idCell.innerHTML = result.id;
      resultCell.innerHTML = result.result;
    }
  }
  