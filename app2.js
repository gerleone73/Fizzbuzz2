var list = document.getElementById("list");
  var listItems = " ";
  var f = "Fizz";
  var b ="Buzz";

  
  for (i = 1; i <= 100; i++) {
    listItems += "<li>";
    var temp = '';
    if (i % 3 === 0) 
      temp = f;
    if (i % 5 === 0) 
      temp = b;
    
    listItems+=(temp || i);    
    
    listItems += "</li>";
  
  }
  
list.innerHTML +=listItems;