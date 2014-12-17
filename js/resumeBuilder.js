
var skills = ["Ruby", "Python", "Javascript"];

var bio = {
	"name" : "Alex Slack",
	"role" : "Research Analyst",
	"contact" : {
		"email" : "email@gmail.com",
		"mobile" : "111-111-1111",
		"github" : "ender405",
		"twitter" : "@AlexSlack2",
		"location" : "Phoenix"
	},
	"picture_url" : "http://www.fcps.edu/islandcreekes/ecology/Amphibians/Bullfrog/bull2.jpg",
	"welcome_message" : "Thanks for visiting my resume!",
	"skills" : skills
};

var work = {
	"workEmployer" : "Maverick Capital"
};
work.workStart = "06/08/2008";


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.picture_url);
var formattedwelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcome_message);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedcontactInfo = HTMLcontactGeneric.replace("%data%", bio.contact_info);
var formattedworkStart = HTMLworkStart.replace("%data%", work.workStart);

$("#header").prepend(formattedName + formattedRole);
$("#main").prepend(formattedcontactInfo + formattedbioPic + formattedwelcomeMsg 
	+ formattedSkills);
$("#main").append(work.workStart);
