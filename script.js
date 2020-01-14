var current = "0";
var stored = "0";
var current_op;
var decimal = false;
var needs_clear = false


document.querySelectorAll(".number").forEach(function(b){
    b.addEventListener("click", function(e){
        let number = b.dataset.value
        press_number(number);
    })
});

document.querySelectorAll(".dec").forEach(function(b){
    b.addEventListener("click", function(e){
        add_decimal();
    })
});

document.querySelectorAll(".math").forEach(function(b){
    b.addEventListener("click", function(e){
        let op = b.dataset.value
        press_op(op);
    })
});

document.querySelectorAll(".equal").forEach(function(b){
    b.addEventListener("click", function(e){
        press_equal();
    })
});

document.querySelectorAll(".clear").forEach(function(b){
    b.addEventListener("click", function(e){
        clear();
    })
});

document.querySelectorAll(".clear").forEach(function(b){
    b.addEventListener("click", function(e){
        clear();
    })
});

document.querySelectorAll(".return").forEach(function(b){
    b.addEventListener("click", function(e){
        if (current.length === 1) current = "0"
        else current = current.slice(0, -1);
        refresh();
    })
});




function press_op(op){
    if (current_op){
      value = calculate(current_op,parseFloat(stored),parseFloat(current))
      current = value;
    }
    needs_clear = true
    stored = current;
    current_op = op
    refresh()
}


function press_equal(){
  if (!current_op) return
  current = calculate(current_op,parseFloat(stored),parseFloat(current));
  current = parseFloat(current)
  current = parseFloat(current.toFixed(6))
  needs_clear = true
  stored = ""
  current_op = ""
  refresh()
}


function add_decimal(){
  if (!decimal){
     current = current + ".";
     decimal = true;
  } else return;
  refresh();
}


function press_number(number){
  if (needs_clear) {
    current = "0"
    decimal = false;
    needs_clear = false
  }
  if (number === "0" && current === "0") return;
  if (number != "0" && current === "0") current = number;
  else current = current + number;
  refresh();
}

function clear(){
  current = "0"
  stored = "0"
  current_op = ""
  decimal = false;
  refresh();
}

function calculate(operation,a,b){
  if (operation === "sum") return a+b;
  else if (operation === "sub") return a-b;
  else if (operation === "mult") return a*b;
  else if (operation === "div") return a/b;
  refresh();
}




function refresh(){
  document.getElementById("display").innerHTML = current;

}
