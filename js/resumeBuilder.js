
var skills = ["Ruby", "Python", "Javascript"];

var bio = {
	"name" : "Alex Slack",
	"role" : "Research Analyst",
	"contact_info" : "email@gmail.com",
	"picture_url" : "http://www.fcps.edu/islandcreekes/ecology/Amphibians/Bullfrog/bull2.jpg",
	"welcome_message" : "Thanks for visiting my resume!",
	"skills" : skills
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.picture_url);
var formattedwelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcome_message);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedcontactInfo = HTMLcontactGeneric.replace("%data%", bio.contact_info);

$("#header").prepend(formattedName + formattedRole);
$("#main").prepend(formattedcontactInfo + formattedbioPic + formattedwelcomeMsg 
	+ formattedSkills);
