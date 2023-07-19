function num(val) {
  document.getElementById("box").value += val;
}
function clr() {
  document.getElementById("box").value = "";
}
var count = 0;
function result() {
  b = document.getElementById("box").value;
  if (count == 0) {
    if (e == "+") {
      f = eval(a) + eval(b);
    } else if (e == "-") {
      f = eval(a) - eval(b);
    } else if (e == "*") {
      f = eval(a) * eval(b);
    } else {
      f = eval(a) / eval(b);
    }
    document.getElementById("box").value = f;
    count = 1;
  } else {
    document.getElementById("eq").disabled;
  }
}

function opr(val) {
  a = document.getElementById("box").value;
  document.getElementById("box").value = "";
  e = val;
  count = 0;
}
