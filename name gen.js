function generator() {
var firstName = ["Albert","Allen","Bert","Bob","Cecil","Clarence","Elliot","Elmer","Ernie","Eugene","Fergus","Ferris","Frasier","Fred","George","Graham","Harvey","Irwin","Lester","Marvin","Dustin","Ethan","Harold","Henry","Irving","Jason","Frank","Martin","Nick","Norm","Yuri","Yogi","Yanni","Wesley","Walt","Wally","Waldo","Uri","Ulysses","Ulric","Toby","Opie","Oliver","Niles","Neil","Dean","Calvin","Brandon","Bill","Alfred","Orin","Patrik","Perry","Ron","Shawn","Tim","Will","Wyatt","Cory","Quinn","Paul","Scott","Steven","Tom","Yahn","Jerry","Keith","Josh","Mark","Matt","Chad","Chet","GabeN","Hank","Ivan","Gavin","Michael","Ray","Geoff","Ryan","Jack","Burnie","Gustavo","Joel","Miles","Kerry","Jordan","Grey","Christopher","Richard","Adam","Maikel","Kdin","Jeremy","Toby",];

var randomNumber1 = parseInt(Math.random() * firstName.length);
var name = firstName[randomNumber1];

  if (document.getElementById("result")) {
     document.getElementById("placeholder").removeChild(document.getElementById("result"));
  }

var element = document.createElement("div");
  element.setAttribute("id", "result");
  element.appendChild(document.createTextNode(name));
     document.getElementById("placeholder").appendChild(element);
}