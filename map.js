
//Grabbing the location display html element
var displayLocation = document.getElementById("currLoc");


//method to invoke geolocation API
function getLocation(){
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else { 
    displayLocation.innerHTML = `Geolocation is not supported by this browser`;
  }
}
    

//displaying the coordinates in the browser
function showPosition(position){
  displayLocation.innerHTML=`Latitude:${position.coords.latitude} <br>Longitude:  ${position.coords.longitude}`;
}