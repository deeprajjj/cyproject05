var trgt = document.querySelector(".main");

var topic = [
  {
    numberOfQuestions: 24,
    name: "SEMESTER 1",
  },
  {
    numberOfQuestions: 24,
    name: "SEMESTER 2",
  },
  {
    numberOfQuestions: 24,
    name: "SEMESTER 3",
  },
  {
    numberOfQuestions: 24,
    name: "SEMESTER 4",
  },
  {
    numberOfQuestions: 24,
    name: "SEMESTER 5",
  },
  {
    numberOfQuestions: 24,
    name: "SEMESTER 6",
  },
  {
    numberOfQuestions: 24,
    name: "SEMESTER 7",
  },
  {
    numberOfQuestions: 24,
    name: "SEMESTER 8",
  },
];
var pyq = [
  {
    name: "sample.pdf",
  },
  {
    name: "sample.pdf",
  },
  {
    name: "sample.pdf",
  },
  {
    name: "sample.pdf",
  },
  
];

var listHTML = "";
for (var i = 0; i < topic.length; i++) {
  listHTML += `<div class="col-lg-3 col-md-4 col-sm-6 mb-4"> <!-- Adjust the column sizes based on your layout -->
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title topic-name">${topic[i].name}</h5>
                    <p class="card-text">Previous year questions:${topic[i].numberOfQuestions}</p>
                    <a href="${pyq[0].name}" download="" class="btn btn-primary">Download</a>
                  </div>
                </div>
              </div>`;
}

trgt.innerHTML = `<div class="row">${listHTML}</div>`;
