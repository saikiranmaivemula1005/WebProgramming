function validateForm() {
  var x = document.getElementById("password");
  console.log(x);
  if (x == 'kkk') {
    document.getElementById("welcome").innerHTML = "hello";
    var comment = document.getElementById("comment");
    document.getElementById("addcomments").innerHTML = comment;    
  }
  else{
  	document.getElementById("welcome").innerHTML = "Please enter valid details"
  	var comment = document.getElementById("comment");
    document.getElementById("addcomments").innerHTML = comment;

  }
}

