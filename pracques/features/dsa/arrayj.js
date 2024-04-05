var trgt = document.querySelector(".main");

var topic = [
  {
    numberOfQuestions: 1,
    name: "Reverse The ArrayArray",
  },
  {
    numberOfQuestions: 2,
    name: " Sum Of Max And Min",
  },
  {
    numberOfQuestions: 3,
    name: "Kth smallest element",
  },
  {
    numberOfQuestions: 4,
    name: "Find similarities between two arrays.",
  },
  {
    numberOfQuestions: 5,
    name: "Merge Without Extra Space",
  },
  {
    numberOfQuestions: 6,
    name: "Kadane's Algorithm",
  },
  {
    numberOfQuestions: 7,
    name: "4Sum",
  },
  {
    numberOfQuestions: 8,
    name: "Find Duplicate in Array",
  },
  {
    numberOfQuestions: 9,
    name: "Reverse Pair",
  },
  {
    numberOfQuestions: 10,
    name: "Dynamic Programming",
  },
];

var listHTML = "";
// console.log(topic[0].NumberOfQuestions);
for (var i = 0; i < topic.length; i++) {
  listHTML += `<div class="card" id="${topic[i].numberOfQuestions}">
                <div class="Number-Of-Questions">${topic[i].numberOfQuestions}</div>
                <div class="topic-name">${topic[i].name}</div>
                
              </div>`;

  console.log(topic[2].numberOfQuestions);

}

trgt.innerHTML = listHTML;

  const click1= document.getElementById(1);
  click1.addEventListener('click',function(){
    window.location.href = 'https://www.codingninjas.com/studio/problems/reverse-the-array_1262298?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker'
  })
  const click2 = document.getElementById(2);
  click2.addEventListener('click',function(){
    window.location.href = 'https://www.codingninjas.com/studio/problems/sum-of-max-and-min_1081476?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker'
  })
  const click3 = document.getElementById(3);
  click3.addEventListener('click',function(){
    window.location.href = ''
  })
  const click4 = document.getElementById(4);
  click4.addEventListener('click',function(){
    window.location.href = 'https://www.codingninjas.com/studio/problems/find-similarities-between-two-arrays_1229070?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker'
  })
  const click5 = document.getElementById(5);
  click5.addEventListener('click',function(){
    window.location.href = 'https://www.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1'
  })
  const click6 = document.getElementById(6);
  click6.addEventListener('click',function(){
    window.location.href = 'https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1'
  })  
  const click7 = document.getElementById(7);
  click7.addEventListener('click',function(){
    window.location.href = 'https://www.codingninjas.com/studio/problems/4sum_5713771?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf'
  })
  const click8 = document.getElementById(8);
  click8.addEventListener('click',function(){
    window.location.href = 'https://www.codingninjas.com/studio/problems/1112602?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website'
  })
  const click9 = document.getElementById(9);
  click9.addEventListener('click',function(){
    window.location.href = 'https://leetcode.com/problems/reverse-pairs/description/'
  })
  const click10 = document.getElementById(10);
  click10.addEventListener('click',function(){
    window.location.href = ''
  })


