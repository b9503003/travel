var xmlhttp = new XMLHttpRequest();
var url = "customer.txt";

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    myFunction(myArr);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
  var out = "";
  var i;
  for(i = 0; i < arr.length; i++) {
    out += '<div class="client_section_2"><div class="client_taital_main"><div class="client_left"><div class="client_img"><img src="images/' 
        + arr[i].photo 
        + '"alt="Avatar" style="width:200px"></div></div><div class="client_right"><h3 class="moark_text">' 
        + arr[i].name 
        + '</h3><p class="client_text">'
        + arr[i].comment + '</p></div><div></div></div>';


  }
  document.getElementById("id01").innerHTML = out;
}