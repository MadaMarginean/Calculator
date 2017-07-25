// calculator logic

createNumberButtons();
createFunctionButtons();

function createNumberButtons(){
  calculator.numericButtonsContainer = document.getElementById("numeric-buttons");
  calculator.numericButton = [];
  for(var i=0;i<3;i++)
  {
    var line = document.createElement("div");
    line.id = "line"+(i+1);
    applyStyleForLines(line);
    for(var j=1;j<=3;j++){
      var button = document.createElement("button");
      var buttonText = document.createTextNode(i*3+j);
      applyStyleForButtons(button);
      button.id = "button"+(i*3+j);
      calculator.numericButton.push(button);
      button.appendChild(buttonText);
      line.appendChild(button);
    }
    calculator.numericButtonsContainer.appendChild(line);
  }
}

function applyStyleForLines(line)
{
  line.style.position = 'relative';
  line.style.top = '50px';
  line.style.left = '45px';
}

function applyStyleForButtons(button)
{
  button.style.width = '40px';
  button.style.height = '40px';
}

function createFunctionButtons(){
  calculator.functionButtonsContainer = document.getElementById("function-buttons");
  calculator.operators = ["+","-","*","/","="];
  calculator.functionButton = [];
  for(var i=0;i<1;i++)
  {
    var col = document.createElement("div");
    col.id = "operators";
    for(var j=0;j<=4;j++){
      var button = document.createElement("button");
      var buttonText = document.createTextNode(calculator.operators[j]);
      applyStyleForButtons(button);
      button.id = calculator.operators[j];
      calculator.functionButton.push(button);
      button.appendChild(buttonText);
      col.appendChild(button);
    }
    calculator.functionButtonsContainer.appendChild(col);
  }
}
