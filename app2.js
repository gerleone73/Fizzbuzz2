var list = document.getElementById("list");
  var listItems = " ";
  var f = "Fizz";
  var b ="Buzz";

  
  for (i = 1; i <= 100; i++) {
    listItems += "<li>";
  
    if (i % 3 === 0) 
      listItems += f;
    if (i % 5 === 0) 
      listItems += b;

    else {
      listItems+=i;
    }
    
  listItems += "</li>";
  
}
list.innerHTML +=listItems;