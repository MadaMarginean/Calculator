// calculator logic
var numericButtonsContainer = document.getElementById("numeric-buttons");

for(var i=0;i<3;i++)
{
  var line = document.createElement("div");
  line.id = "line"+(i+1);
  for(var j=1;j<=3;j++){
      var button = document.createElement("button");
      var buttonText = document.createTextNode(i*3+j);
      button.style.width = '40px';
      button.style.height = '40px';
      button.id = "button"+(i*3+j);
      button.appendChild(buttonText);
      line.appendChild(button);
    }
    numericButtonsContainer.appendChild(line);
}

line1.style.position = 'relative';
line1.style.top = '50px';
line1.style.left = '45px';

line2.style.position = 'relative';
line2.style.top = '50px';
line2.style.left = '45px';

line3.style.position = 'relative';
line3.style.top = '50px';
line3.style.left = '45px';

var functionButtonsContainer = document.getElementById("function-buttons");
var functionButton = ['+', '-', '*', '/','='];
for(var i=0;i<1;i++)
{
  var col = document.createElement("div");
  col.id = "operators";
  for(var j=0;j<=4;j++){
    var button = document.createElement("button");
    var buttonText = document.createTextNode(functionButton[j]);
    button.style.width = '40px';
    button.style.height = '40px';
    button.id = functionButton[j];
    button.appendChild(buttonText);
    col.appendChild(button);
  }
  functionButtonsContainer.appendChild(col);
}

operators.style.position = 'relative';
operators.style.top = '10px';
operators.style.left = '15px';
