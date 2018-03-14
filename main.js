/*
function loadJSON(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === "200") {
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
//var url = "https://jaganmohangumpa.github.io/resume/resources/data.json";
//usage:
loadJSON("api-data/data.json", function(text) {
  let data = JSON.parse(text);
  console.log(data);
});
*/

function loadJSON(url){
  return new Promise( (resolve, reject) => {
    return fetch(url).then( response => {
      if (response.ok) {
        resolve(response.json());
      } else {
        reject(new Error('error - unable to load JSON'));
      }
    })
  })
}

var myPromise = loadJSON("main.json");

myPromise.then( data => {
  console.log(data);
  career(data.career);
  education(data.education);
} );

var content=document.querySelector(".content");

function career(car){
  var h2=document.createElement("h2");
  h2.textContent="Career Objective";
  content.appendChild(h2);

  var hr=document.createElement("hr");
  content.appendChild(hr);

  var p=document.createElement("p");
  p.textContent=car.data;
  content.appendChild(p);
}

function education(edu){
  var h2=document.createElement("h2");
  h2.textContent="Education Qualification";
  content.appendChild(h2);

  var hr=document.createElement("hr");
  content.appendChild(hr);

  console.log(edu.length);
  var ul=document.createElement("ul");
  content.appendChild(ul);

  for(var i=0; i<edu.length; i++){
    var li=document.createElement("li");
    li.textContent=edu[i].degree;
    ul.appendChild(li);

    var li2=document.createElement("p");
    li2.textContent=edu[i].college;
    ul.appendChild(li2);

    var p=document.createElement("p");
    p.textContent=edu[i].data;
    ul.appendChild(p);

  }
}
