//$("#main").append("aaa");

var email = "aaab";
var newemail = email.replace('a', 'c');
console.log(email);
console.log(newemail);

//$("#main").append(newemail);

var formattedName = HTMLheaderName.replace("%data%", "Yi Duan");
var formattedRole = HTMLheaderRole.replace("%data%", "Director");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
    "name" : "Yi Duan",
    "role" : "Director",
    "contacts" : {
        "email" : "windream1991@gmail.com",
        "location" : "United States",
        "github" : "windream"
    },
    "welcomeMessage" : "Welcome to my Resume!",
    "skills" : "javascript"
};

var work = {
    "jobs" : [
        {
            "location" : "United States"
        }
    ]
}


$(document).click(function(loc){
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
    console.log("click");
})

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);