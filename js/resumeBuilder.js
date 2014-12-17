
var name = "Alex Slack"
var formattedName = HTMLheaderName.replace("%data%", name)
var role = "Research Analyst"
var formattedRole = HTMLheaderRole.replace("%data%", role)

$("#header").append(formattedName,formattedRole)