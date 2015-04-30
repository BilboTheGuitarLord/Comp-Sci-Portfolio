var playerX = 0;
var playerY = 0;
var arrows = [];

var snake = [];

document.onkeydown = checkKey;
// Movement of the player
function checkKey(e) {
    e = e || window.event;
    //up arrow
    if (e.keyCode == '38'&&playerY!=7) {
       
        playerY++;
    }
    //right arrow
    if (e.keyCode == '39'&&playerX!=7) {
       
        playerX++;
    }
    //down arrow
    if (e.keyCode == '40'&&playerY!=-7) {
       
        playerY--;
    }
    //left arrow
    if (e.keyCode == '37'&&playerX!=-7) {
       
        playerX--;
    }

  //Checks if there is food. If there is food it is eaten and dissapears. Then makes snake longer.
  
  
  //add the image
    document.getElementById("spot" + playerX + playerY).innerHTML = "<img style='width:88%' src = http://www.stickylife.com/images/u/a754ee74e4a34c51983dae001e53cf30-800.png/>";
  // Store the id of the element where the image is
  
  snake.push("spot" + playerX + playerY);
  
  //check to see if there are 5 images.  If there is... remove the image from the oldest place, and then remove that place from the array
  if (snake.length === 5){
    document.getElementById(snake[0]).innerHTML =  "";
    
    snake.splice(0,1);
  }

  
}

//[checksthe specific spot for the class hasFood.  this is an example] if(hasClass(document.getElementById("spot5-3"),"hasFood") === true){alert("hello");}


// @Desc: This function looks for a class name in the given Element.
// Returns true if it exists, false if it does not.
function hasClass(element, classNameToTestFor) {
    var classNames = element.className.split(' ');
    for (var i = 0; i < classNames.length; i++) {
        if (classNames[i].toLowerCase() == classNameToTestFor.toLowerCase()) {
            return true;
        }
    }
    return false;
}

