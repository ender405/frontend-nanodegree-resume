

var bio = {
	"name" : "Alex Slack",
	"role" : "Research Analyst",
	"contacts" : {
		"email" : "email@gmail.com",
		"mobile" : "111-111-1111",
		"github" : "ender405",
		"twitter" : "@AlexSlack2",
		"location" : "Phoenix"
	},
	"picture_url" : "http://www.fcps.edu/islandcreekes/ecology/Amphibians/Bullfrog/bull2.jpg",
	"welcome_message" : "Thanks for visiting my resume!",
	"skills" : ["Ruby", " Python ", " Javascript"]
};

var projects = {
	"projects" : [
		{
			"title" : "Build an Online Resume",
			"startDate" : 2014,
			"endDate" : 2014,
			"description" : "Build and format an interactive, online resume",
			"images" : ["http://image1.com","http://image2.com"]
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "McKinsey and Company",
			"title" : "Business Analyst",
			"location" : "Boston, MA",
			"startDate" : "2006",
			"endDate" : "2008",
			"description" : "Analyze markets and business strategy"
		},
		{
			"employer" : "Maverick Capital",
			"title" : "Managing Director",
			"location" : "Philadelphia, PA",
			"startDate" : "2008",
			"endDate" : "Present",
			"description" : "Research and execute on investments in healthcare"
		}
	]
	
};


var education = {
	"schools" : [
		{
			"name" : "Harvard College",
			"location" : "Cambridge, MA",
			"degree" : "AB",
			"majors" : ["History"],
			"startDate" : 2002,
			"endDate" : 2006,
			"url" : "http://www.harvard.edu"
		},
		
		{
			"name" : "Udacity U",
			"location" : "Phoenix, AZ",
			"degree" : "Nano",
			"majors" : ["Web Programming"],
			"startDate" : 2014,
			"endDate" : 2014,
			"url" : "http://www.udacity.com"
		}
	],
	"online_courses" : [
		{
			"title" : "Javascript Basics",
			"school" : "Udacity U",
			"startDate" : 2014,
			"endDate" : 2014,
			"url" : "http://www.udacity.edu"
		}
		]
};


if (bio.skills) {
	$("#header").append(HTMLskillsStart);
	$("#skills").append(HTMLskills.replace("%data%", bio.skills));
};

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].startDate + " - " + work.jobs[job].endDate);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedWorkLocation + formattedWorkDescription);
	}
};

displayWork();

$(document).click(function(loc) {
	logClicks(loc.pageX,loc.pageY);

});

//var formattedName = HTMLheaderName.replace("%data%", bio.name);
//var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
//var formattedbioPic = HTMLbioPic.replace("%data%", bio.picture_url);
//var formattedwelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcome_message);
//var formattedSkills = HTMLskills.replace("%data%", bio.skills);
//var formattedcontactInfo = HTMLcontactGeneric.replace("%data%", bio.contact_info);
//var formattedworkStart = HTMLworkStart.replace("%data%", work.workStart);

//$("#header").prepend(formattedName + formattedRole);
//$("#main").prepend(formattedcontactInfo + formattedbioPic + formattedwelcomeMsg 
//	+ formattedSkills);
//$("#main").append(work.workStart);
