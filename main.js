var reason=[
    "Imtiaz Shaikh",
    "Shehnaaz Shaikh",
    "Aziz Shaikh",
    "Rozina Shaikh"];
    var images=[
      "Papa.jpeg",
      "Mom.jpeg",
      "Brother.jpeg",
      "Me.jpeg"];
  var i=0;
  function nextslide(){
    document.getElementById("family_name").innerHTML=reason[i];
     document.getElementById("album").src=images[i];
    i++;

    if(i == 4)
    {
      i=0;
    }
  }
  