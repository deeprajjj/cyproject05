var trgt = document.querySelector(".main");

var topic = [
  {
    numberOfQuestions: 10,
    name: "Array",
  },
  {
    numberOfQuestions: 10,
    name: "Tree",
  },
  {
    numberOfQuestions: 10,
    name: "Graph",
  },
  {
    numberOfQuestions: 10,
    name: "Tree",
  },
  {
    numberOfQuestions: 10,
    name: "Dynamic Programming",
  },
];

// links that will refer to the specific pages of questions 
var dsalinks = [
  { name: "../dsa/array.html" },
  { name: "../dsa/array.html" },
  { name: "../dsa/array.html" },
  { name: "../dsa/array.html" },
  { name: "../dsa/array.html" },
];

var listHTML = "";

for (var i = 0; i < topic.length; i++) {
  listHTML += `<div class="col-md-6 col-lg-4 mb-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="topic-name">${topic[i].name}</h5>
                    <p class="Number-Of-Questions">Total Questions: ${topic[i].numberOfQuestions}</p>
                    <a href="${dsalinks[i].name}" class="btn btn-primary">Let's Get Started</a>
                  </div>
                </div>
              </div>`;
}

trgt.innerHTML = listHTML;
