// document.getElementById('inputfile').addEventListener('change', function () {

// const { default: test } = require("node:test")
// const { text } = require("stream/consumers")

//   let fr = new FileReader();
//   fr.onload = function () {
//       const fileContent = fr.result;
//       const lines = fileContent.split('\n'); // Split content by lines
//       const dataStructure = lines.map(line => line.trim()); // Storing each line in an array

//       // Now you have the file content stored in a data structure (array)
//       console.log(dataStructure); // Output the data structure
//       console.log(dataStructure[0])
//   }

//   fr.readAsText(this.files[0]);
// })

fetch('output.csv')
  .then(response => response.text())
  .then(text => text.split('\r\n'))
  .then(text => createLeaderboardRows(text))
  
  


  // Function to dynamically create table rows
  function createLeaderboardRows(data) {
    const leaderboardBody = document.getElementById("leaderboardBody");
    leaderboardBody.innerHTML = ""; // Clear previous content

    for (let i = 0; i < data.length; i+=2) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${i}</td>
        <td>${data[i]}</td>
        <td>${data[i+1]}</td>
        
      `;
      leaderboardBody.appendChild(row);
    }
  }
