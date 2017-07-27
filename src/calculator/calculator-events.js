// event
calculator.displayScreen = document.querySelector('#display-screen');
calculator.screenLine = document.createElement("div");
calculator.number = [];
calculator.opText;

addEventForNumericButtons();
addEventForFunctionButtons();

function addEventForNumericButtons(){
  for(var i = 0; i < calculator.numericButton.length; i++){
  	  calculator.numericButton[i].addEventListener("click", saveBtnTextInArray);
  }
}

function saveBtnTextInArray(e)
{
  var btnText = e.target.textContent;

  calculator.displayScreen.textContent += btnText;
  // var screenText = document.createTextNode(btnText);
  // calculator.screenLine.appendChild(screenText);
  // calculator.displayScreen.appendChild(calculator.screenLine);
  calculator.number.push(btnText);
  console.log(calculator.number, btnText);
}

calculator.screenLine.style.position = 'relative';

function createNumber()
{
  var nr = 0;

  for(var i=0;i<calculator.number.length;i++){
    nr = nr * 10 + parseInt(calculator.number[i]);
  }

  return nr;
}

function addEventForFunctionButtons()
{
  for(var i = 0; i < calculator.functionButton.length; i++){
      calculator.functionButton[i].addEventListener("click", addTextToFunctionButtons);
  }
}

function addTextToFunctionButtons(e)
{
  calculator.opText = e.target.textContent;
  calculator.displayScreen.textContent += calculator.opText;
  eval();
}

function clearScreen()
{
  calculator.number = [];
  calculator.displayScreen.textContent = "";

}

function createFirstNumberAndRemoveElementsFromNumberArray()
{
  calculator.firstValue = createNumber();
  calculator.number = [];
}

function eval() {
  console.log(calculator.opText);
  calculator.operator;
  if(calculator.opText === "+")
  {
     createFirstNumberAndRemoveElementsFromNumberArray();
     operator = "+";
  }
  if(calculator.opText === "-")
  {
     createFirstNumberAndRemoveElementsFromNumberArray();
     operator = "-";
  }
  if(calculator.opText === "*")
  {
     createFirstNumberAndRemoveElementsFromNumberArray();
     operator = "*";
  }
  if(calculator.opText === "/")
  {
     createFirstNumberAndRemoveElementsFromNumberArray();
     operator = "/";
  }
  if(calculator.opText === "="){
    calculator.secondValue = createNumber();
    console.log("secondValue: "+calculator.secondValue);
    switch(operator){
      case "+": {
        var result = calculator.firstValue + calculator.secondValue;
        clearScreen();
        calculator.displayScreen.textContent += result;
        break; }
      case "-": {
          var result = calculator.firstValue - calculator.secondValue;
          clearScreen();
          calculator.displayScreen.textContent += result;
          break; }
      case "*": {
          var result = calculator.firstValue * calculator.secondValue;
          clearScreen();
          calculator.displayScreen.textContent += result;
          break; }
      case "/": {
          var result = calculator.firstValue / calculator.secondValue;
          clearScreen();
          calculator.displayScreen.textContent += result;
          break; }
    }
  }
}

function remove(){
  document.addEventListener('keydown', function (event) {
    if (event.keyCode == 8) {
        console.log('BACKSPACE was pressed');
        clearScreen();
    }
  });
}
remove();
