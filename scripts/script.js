$(document).ready(function(){
  // function that will make the name uppercase
  $("#buttonUpper").click(function(){
    
    // var that holds the name
    var userName = $("#fname").val();

     // changes to upper case
    var nameUpper = userName.toUpperCase();
      
      // array that holds spirit animal names
      var sAnimal = ["Raspberry Crazy Ants", "Pink Fairy Armadillo", "Leafy Seadragon", "Ice Cream Cone Worm", "Fried Egg JellyFish", "Satanic Leaf-Tailed Gecko"];
     
    // gets random from the array
    var randAnimal = sAnimal[Math.floor(Math.random() * sAnimal.length)];
      
      // sends the output
    alert(nameUpper + " your spirit animal is " + randAnimal + "!");
  });
      
   // function that will make the name lowercase
  $("#buttonLower").click(function(){
    
    // var that holds the name
    var userName = $("#fname").val();

     // changes to upper case
    var nameLower = userName.toLowerCase();
      
      // array that holds spirit animal names
      var sAnimal = ["Raspberry Crazy Ants", "Pink Fairy Armadillo", "Leafy Seadragon", "Ice Cream Cone Worm", "Fried Egg JellyFish", "Satanic Leaf-Tailed Gecko"];
     
    // gets random from the array
    var randAnimal = sAnimal[Math.floor(Math.random() * sAnimal.length)];
      
      // sends the output
    alert(nameLower + " your spirit animal is " + randAnimal);
  });
   
});