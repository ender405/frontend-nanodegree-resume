

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
	"skills" : ["ruby", "css", "html", "web scraping", "mad alpha", "python", "javascript"]
};





$("#header").prepend(HTMLheaderName.replace("%data%",bio.name) + HTMLheaderRole.replace("%data%",bio.role));

function displayContacts() {

	var mobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var email = HTMLemail.replace("%data%",bio.contacts.email);
	var github = HTMLgithub.replace("%data%",bio.contacts.github);
	var twitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var location = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts").append(mobile + email + github + twitter + location);
}

displayContacts();

$("#header").append(HTMLbioPic.replace("%data%",bio.picture_url));
$("#header").append(HTMLWelcomeMsg.replace("%data%",bio.welcome_message));

if (bio.skills) {
	$("#header").append(HTMLskillsStart);
	
	for (skill in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));	
	}
	
};


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

//remove internationalize button for now until I can style with CSS
//$("#main").append(internationalizeButton);

// projects data and display code

var projects = {
	"projects" : [
		{
			"title" : "Build an Online Resume",
			"startDate" : "2014",
			"endDate" : "2014",
			"description" : "Build and format an interactive, online resume",
			"images" : ["http://upload.wikimedia.org/wikipedia/en/7/76/Nba-jam-dunk.png","http://justclaws.atari.org/graphics/pix/nba2.jpg"]
		}
	]
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].startDate + " - " + projects.projects[project].endDate);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectTitle + formattedProjectDates + formattedProjectDescription);
		for (image in projects.projects[project].images) {
			var formattedProjectImage = HTMLprojectTitle.replace("%data%",projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedProjectImage);
		}
	}
}

projects.display();


// education data and display code

var education = {
	"schools" : [
		{
			"name" : "Harvard College",
			"location" : "Cambridge, MA",
			"degree" : "AB",
			"majors" : ["History"],
			"startDate" : "2002",
			"endDate" : "2006",
			"url" : "http://www.harvard.edu"
		},
		
		{
			"name" : "Udacity U",
			"location" : "Phoenix, AZ",
			"degree" : "Nano",
			"majors" : ["Web Programming"],
			"startDate" : "2014",
			"endDate" : "Present",
			"url" : "http://www.udacity.com"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Javascript Basics",
			"school" : "Udacity U",
			"startDate" : "2014",
			"endDate" : "2014",
			"url" : "http://www.udacity.edu"
		}
		]
};

education.display = function() {

	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name).replace("#",education.schools[school].url);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].startDate + " - " + education.schools[school].endDate);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors[0]);
		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor);
	}

	$("#education").append(HTMLonlineClasses);

	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart)
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title).replace("#",education.onlineCourses[course].url);
		var formattedOnlineName = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].startDate + " - " + education.onlineCourses[course].endDate);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineName + formattedOnlineDates + formattedOnlineURL);
	}

};





education.display();

/*
var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';
*/

//hide this map until I can figure out how it works
//$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
	logClicks(loc.pageX,loc.pageY);

});

function inName(name) {
	var firstName = name.split(" ")[0];
	var lastName = name.split(" ")[1];
	return firstName + " " + lastName.toUpperCase();
}



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
