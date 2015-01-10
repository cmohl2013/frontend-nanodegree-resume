var bio = {
    "name": "Christoph Möhl",
    "role": "Image Data Scientist",
    "picture_url": "images/fry.jpg",
    "welcome_message": "hi",
    "skills": [
        "python",
        "javascript",
        "matlab",
        "image analysis",
        "microscopy",
        "piano"
    ],
    "contacts": {
        "mobile": "015774407495",
        "email": "cmohl@yahoo.com",
        "location": "Bonn, Germany"
    }
};


var work = {
    "jobs": [
        {
            "employer": "DZNE",
            "title": "Head of Image and Data Analysis Facility",
            "dates": "December 2011 - Future",
            "description": "Data analysis service for scientists in life science.",
            "location" : "Bonn, Germany"
        },
        {
            "employer": "EMBL",
            "title": "Postdoc",
            "dates": "May 2010 - November 2011",
            "description": "Application of quantitative live cell imaging methods to the zebrafish modelsystem; design and cloning of fluorescent reporters for targeted expression in in specified embryonic tissues.",
            "location" : "Heidelberg, Germany"
        },
        {
            "employer": "Forschungszentru Jülich",
            "title": "PhD Student and Postdoc",
            "dates": "2006 - 2009",
            "description": "Investigation of focal adhesion dynamics in migrating cells with various quantitative fluorescence microscopy methods.",
            "location" : "Jülich, Germany"
        }    
    ]
};


var projects ={
    "projects": [
        {
            "title": "Modelling of actin/myosin and adhesion dynamics in mirgating cells",
            "dates": "2004 - 2005",
            "description": "Diploma Thesis in Theoretical Biology Group."
        },
        {
            "title" : "Adhesion- and cytoskeleton-dynamics in migrating cells",
            "dates" : "2006 - 2009", 
            "description": "Investigation of focal adhesion dynamics in migrating cells with various quantitative fluorescence microscopy methods."
        }
    ]
};

var education = {
	"schools" : [
		{
			"name" : "Universität Bonn",
			"location" : "Bonn, Germany",
			"degree" : "Diplom",
			"major" : ["Theoretical Biology", "Cell Biology"]
		},
		{
			"name" : "Universität Bonn",
			"location" : "Jülich, Germany",
			"degree" : "PhD",
			"major" : ["Chemistry", "Physics"]
		}
	],
	"onlineCourses" : [
		{
			"name" : "Intro to Computer Science",
			"school" : "Udacity",
			"year" : 2013
		},
		{
			"name" : "Startup Egineering",
			"school" : "Coursera",
			"year" : 2013
		},
		{
			"name" : "Intro to Hadoop",
			"school" : "Udacity",
			"year" : 2014
		}
	] 
};

var name = bio.name;

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(HTMLbioPic.replace("%data%", bio.picture_url));

if (bio.skills != null) {
	$("#header").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}


$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});


var displayWork = function(){
	for (job_index in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		console.log(job_index);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job_index].employer);
		var formattedWorktitle = HTMLworkTitle.replace("%data%", work.jobs[job_index].title);
		var workItem = formattedEmployer.concat(formattedWorktitle);
		workItem = workItem.concat(HTMLworkDates.replace("%data%", work.jobs[job_index].dates));
		workItem = workItem.concat(HTMLworkDescription.replace("%data%", work.jobs[job_index].description));
		$(".work-entry:last").append(workItem);
		console.log(workItem);
	}
}

var inName = function(name){
	var nameArray = name.split(" ");
	return nameArray[0] + " " + nameArray[1].toUpperCase();
}

$("#main").append(internationalizeButton);
displayWork();



projects.display = function(){
	for (idx in this.projects){
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", this.projects[idx].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", this.projects[idx].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", this.projects[idx].description));
		
	}	
} 

projects.display();


$("#mapDiv").append(googleMap);    