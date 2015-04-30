var button = document.getElementById("submitButton");

button.addEventListener("click", domath, true);


function domath() {
  if  (document.getElementById("DropdownMenu1").value == "+"){
    var num1 = document.getElementById('Number1').value;

    var num2 = document.getElementById('Number2').value;

    var answer = parseInt(num1) + parseInt(num2);

    document.getElementById('Answer').innerHTML = answer;

  } else if (document.getElementById("DropdownMenu1").value == "-"){
    var num1 = document.getElementById('Number1').value;

    var num2 = document.getElementById('Number2').value;

    var answer = parseInt(num1) - parseInt(num2);

    document.getElementById('Answer').innerHTML = answer;

  } else if (document.getElementById("DropdownMenu1").value == "x"){
    var num1 = document.getElementById('Number1').value;

    var num2 = document.getElementById('Number2').value;

    var answer = parseInt(num1) * parseInt(num2);

    document.getElementById('Answer').innerHTML = answer;

  } else if (document.getElementById("DropdownMenu1").value == "÷"){
    var num1 = document.getElementById('Number1').value;

    var num2 = document.getElementById('Number2').value;

    var answer = parseInt(num1) / parseInt(num2);

    document.getElementById('Answer').innerHTML = answer;
  } else if (document.getElementById("DropdownMenu1").value == "^"){
    var num1 = document.getElementById('Number1').value;

    var num2 = document.getElementById('Number2').value;

    var answer =  Math.pow(parseInt(num1), parseInt(num2)) ;

    document.getElementById('Answer').innerHTML = answer;
  } else if (document.getElementById("DropdownMenu1").value == "&"){
    var num1 = document.getElementById('Number1').value;

    var num2 = document.getElementById('Number2').value;

    var answer =  Math.sqrt(parseInt(num1)) ;

    document.getElementById('Answer').innerHTML = answer;
  }
  
}
function Clear() {
            document.getElementById('Number1').value = "";
            document.getElementById('Number2').value = "";
            document.getElementById('Answer').innerHTML = "";

        }