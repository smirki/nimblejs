// app.js
var data = {
  title: "Welcome to Nimble.js",
  description: "A simple JavaScript templating library"
};

var template = `
  <h1>{{title}}</h1>
  <p>{{description}}</p>
`;

var button = document.getElementById("render-button");

button.addEventListener("click", function() {
  var container = document.body;
  Nimble.render(data, template, container);
});