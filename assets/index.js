$(document).ready(function(){ //applies jquery to the webpage
    var logo = $("#logo"); //variables for website sections
    var quarterly = $("#menu-title");
    var favorites = $("#favorites");
    var locationHours = $("#location-hours");
    logo.delay(300).animate({opacity: "1"}, 2000); //delays image by .3 seconds and brings opacity from 0 to 1 in 2 seconds
    quarterly.delay(2000).animate({opacity: "1"}, 2000);
    favorites.delay(4000).animate({opacity: "1"}, 2000);
    locationHours.delay(5000).animate({opacity: "1"}, 2000);
    })