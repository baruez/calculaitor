var currentDisplayed = "0";
var maxDecimals = 0;
var num1 = 0.0;
var button0 = document.getElementById("button0")
var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")
var button4 = document.getElementById("button4")
var button5 = document.getElementById("button5")
var button6 = document.getElementById("button6")
var button7 = document.getElementById("button7")
var button8 = document.getElementById("button8")
var button9 = document.getElementById("button9")
var buttondec = document.getElementById("buttondec")
var buttonC = document.getElementById("buttonC")
var buttonUN = document.getElementById("buttonUN")
var buttoneq = document.getElementById("buttoneq")
var buttondiv = document.getElementById("buttondiv")
var buttonX = document.getElementById("buttonX")
var buttonsub = document.getElementById("buttonsub")
var buttonsum = document.getElementById("buttonsum")
var buttonmod = document.getElementById("buttonmod")

button0.addEventListener("click", function(){
  if(currentDisplayed === "0") document.getElementById("display").innerHTML = currentDisplayed;
  else if (currentDisplayed === "+" || currentDisplayed === "-" || currentDisplayed === "*"
  || currentDisplayed === "/" || currentDisplayed === "%") {
    currentDisplayed = "0"
    document.getElementById("display").innerHTML = currentDisplayed;
  }
  else{
    currentDisplayed = currentDisplayed + "0";
    document.getElementById("display").innerHTML = currentDisplayed;
  }
})
button1.addEventListener("click", function(){
  if(currentDisplayed === "0" || currentDisplayed === "+" || currentDisplayed === "-"
    || currentDisplayed === "*" || currentDisplayed === "/" || currentDisplayed === "%") {
    currentDisplayed = "1"
    document.getElementById("display").innerHTML = currentDisplayed;
  }
  else{
    currentDisplayed = currentDisplayed + "1";
    document.getElementById("display").innerHTML = currentDisplayed;
  }
})
button2.addEventListener("click", function(){
  if(currentDisplayed === "0" || currentDisplayed === "+" || currentDisplayed === "-"
    || currentDisplayed === "*" || currentDisplayed === "/" || currentDisplayed === "%") {
    currentDisplayed = "2"
    document.getElementById("display").innerHTML = currentDisplayed;
  }
  else{
    currentDisplayed = currentDisplayed + "2";
    document.getElementById("display").innerHTML = currentDisplayed;
  }
})
button3.addEventListener("click", function(){
  if(currentDisplayed === "0" || currentDisplayed === "+" || currentDisplayed === "-"
    || currentDisplayed === "*" || currentDisplayed === "/" || currentDisplayed === "%") {
    currentDisplayed = "3"
    document.getElementById("display").innerHTML = currentDisplayed;
  }
  else{
    currentDisplayed = currentDisplayed + "3";
    document.getElementById("display").innerHTML = currentDisplayed;
  }
})

button4.addEventListener("click", function(){
  if(currentDisplayed === "0" || currentDisplayed === "+" || currentDisplayed === "-"
    || currentDisplayed === "*" || currentDisplayed === "/" || currentDisplayed === "%") {
    currentDisplayed = "4"
    document.getElementById("display").innerHTML = currentDisplayed;
  }
  else{
    currentDisplayed = currentDisplayed + "4";
    document.getElementById("display").innerHTML = currentDisplayed;
  }
})
button5.addEventListener("click", function(){
  if(currentDisplayed === "0" || currentDisplayed === "+" || currentDisplayed === "-"
    || currentDisplayed === "*" || currentDisplayed === "/" || currentDisplayed === "%") {
    currentDisplayed = "5"
    document.getElementById("display").innerHTML = currentDisplayed;
  }
  else{
    currentDisplayed = currentDisplayed + "5";
    document.getElementById("display").innerHTML = currentDisplayed;
  }
})
button6.addEventListener("click", function(){
  if(currentDisplayed === "0" || currentDisplayed === "+" || currentDisplayed === "-"
    || currentDisplayed === "*" || currentDisplayed === "/" || currentDisplayed === "%") {
    currentDisplayed = "6"
    document.getElementById("display").innerHTML = currentDisplayed;
  }
  else{
    currentDisplayed = currentDisplayed + "6";
    document.getElementById("display").innerHTML = currentDisplayed;
  }
})
button7.addEventListener("click", function(){
  if(currentDisplayed === "0" || currentDisplayed === "+" || currentDisplayed === "-"
    || currentDisplayed === "*" || currentDisplayed === "/" || currentDisplayed === "%") {
    currentDisplayed = "7"
    document.getElementById("display").innerHTML = currentDisplayed;
  }
  else{
    currentDisplayed = currentDisplayed + "7";
    document.getElementById("display").innerHTML = currentDisplayed;
  }
})
button8.addEventListener("click", function(){
  if(currentDisplayed === "0" || currentDisplayed === "+" || currentDisplayed === "-"
    || currentDisplayed === "*" || currentDisplayed === "/" || currentDisplayed === "%") {
    currentDisplayed = "8"
    document.getElementById("display").innerHTML = currentDisplayed;
  }
  else{
    currentDisplayed = currentDisplayed + "8";
    document.getElementById("display").innerHTML = currentDisplayed;
  }
})
button9.addEventListener("click", function(){
  if(currentDisplayed === "0" || currentDisplayed === "+" || currentDisplayed === "-"
    || currentDisplayed === "*" || currentDisplayed === "/" || currentDisplayed === "%") {
    currentDisplayed = "9"
    document.getElementById("display").innerHTML = currentDisplayed;
  }
  else{
    currentDisplayed = currentDisplayed + "9";
    document.getElementById("display").innerHTML = currentDisplayed;
  }
})

buttondec.addEventListener("click", function(){
  if(maxDecimals != 0) return;
  else{
    currentDisplayed = currentDisplayed + ".";
    document.getElementById("display").innerHTML = currentDisplayed;
  maxDecimals++;
  }
})

buttonC.addEventListener("click", function(){
  clearNum();
})


buttonsub.addEventListener("click", function(){
  num1 = parseFloat(currentDisplayed);
  clearNum();
  currentDisplayed = "-";
  document.getElementById("display").innerHTML = currentDisplayed;
  buttoneq.addEventListener("click", function(){
    currentDisplayed = subtract(num1,currentDisplayed)
    document.getElementById("display").innerHTML = currentDisplayed;
    num1 = 0.0;
  });
});

//deberia llamar a apply operation, le pasas operacion y refresh
buttonsum.addEventListener("click", function(){
  num1 = parseFloat(currentDisplayed);
  clearNum();
  currentDisplayed = "+";
  document.getElementById("display").innerHTML = currentDisplayed;
  buttoneq.addEventListener("click", function(){
    currentDisplayed = add(num1,parseFloat(currentDisplayed))
    document.getElementById("display").innerHTML = currentDisplayed;
    num1 = 0.0;


  });

})

buttonX.addEventListener("click", function(){
  num1 = parseFloat(currentDisplayed);
  clearNum();
  currentDisplayed = "*";
  document.getElementById("display").innerHTML = currentDisplayed;
  buttoneq.addEventListener("click", function(){
    currentDisplayed = multiply(num1,parseFloat(currentDisplayed))
    document.getElementById("display").innerHTML = currentDisplayed;
    num1 = 1;
  });

})


// CLEAR NUM FUNCTION
function clearNum(){
  currentDisplayed = "0";
  document.getElementById("display").innerHTML = currentDisplayed;
  maxDecimals = 0;

}


// MATH FUNCTIONS
function add (num1,num2) {
	return num1+num2;
}

function subtract (num1,num2) {
	return num1-num2;
}

function sum(array){
total = 0;
	for (var i = 0; i < array.length; i++) {
		total += array[i]
	}
	return total;
}

function multiply (num1,num2){
  return num1*num2;
}
