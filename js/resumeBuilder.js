var skills = [" HTML ", " CSS ", " Javascript ", " C++ ", " jQuery ", " Nodejs ", " Grunt ", " ImageMagick ", " Git ", " Github ", "Bower", "Polymer"];

var bio = {
    "name" : "Christine Sales",
    "role" : "Front-End Web Developer",
    "contacts" : {
        "mobile" : "(650)222-2222",
        "email" : "jinglebot@email.com",
        "github" : "jinglebot",
        "twitter" : "@jinglebot",
        "location" : "Dublin, California"
},
    "message" : "My specialty is in making responsive, user-friendly and lightning-fast websites, with the most amazing looks and the shortest sensible loading time when accessed in any or all mobile devices whether laptop, tablet, smartphone, pc, tv, electronic billboard or smartwatch, and in whatever functional network connection speed or bandwidth.",
    "skills" : skills,
    "photo" : "images/me.jpg"
};

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedmobile);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedemail);
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedtwitter);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedgithub);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedlocation);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.photo);
    $("#header").append(formattedbioPic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.message);
    $("#header").append(formattedwelcomeMsg);

    function contactSkills() {
        $("#header").append(HTMLskillsStart);
        for (var skill = 0; skill < bio.skills.length; skill++) {
            var formattedskills = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills:last").append(formattedskills);
        }
    }
    if (bio.skills.length > 0) {
        contactSkills();
    }
}
bio.display();

var work = {
    "jobs": [
        {
            "employer": "Knowledge Camp Tutorial Center",
            "title": "Private Home Tutor",
            "location": "Quezon City, Philippines",
            "dates": "June 2012 - present",
            "description": "tutors gradeschool and highschool students in all subjects, in particular, the Sciences and Math"
        },
        {
            "employer": "Government Service Insurance System",
            "title": "Social Insurance Specialist",
            "location": "Pasay City, Philippines",
            "dates": "1998 - 2004",
            "description": "Bacon ipsum dolor amet filet mignon shoulder pancetta capicola boudin salami strip steak, andouille picanha spare ribs pork loin beef ribs. Turkey ham t-bone short ribs alcatra pig chicken meatloaf cow fatback boudin. Landjaeger bresaola brisket shankle short loin ball tip rump spare ribs frankfurter capicola jerky leberkas. Pastrami shank pig tail turkey."           
        },
        {
            "employer": "JJ-Degussa Phils., Inc.",
            "title": "Technical Product Executive",
            "location": "Pasay City, Philippines",
            "dates": "1995 - 1998",
            "description": "Bacon ipsum dolor amet filet mignon shoulder pancetta capicola boudin salami strip steak, andouille picanha spare ribs pork loin beef ribs. Turkey ham t-bone short ribs alcatra pig chicken meatloaf cow fatback boudin. Landjaeger bresaola brisket shankle short loin ball tip rump spare ribs frankfurter capicola jerky leberkas. Pastrami shank pig tail turkey."            
        },
        {
            "employer": "United Laboratories, Inc.",
            "title": "Quality Control Laboratory Analyst",
            "location": "Mandaluyong City, Philippines",
            "dates": "1994",
            "description": "Bacon ipsum dolor amet filet mignon shoulder pancetta capicola boudin salami strip steak, andouille picanha spare ribs pork loin beef ribs. Turkey ham t-bone short ribs alcatra pig chicken meatloaf cow fatback boudin. Landjaeger bresaola brisket shankle short loin ball tip rump spare ribs frankfurter capicola jerky leberkas. Pastrami shank pig tail turkey."           
        },
        {
            "employer": "Chem-perts Corporation",
            "title": "Technical Sales Engineer",
            "location": "Manila, Philippines",
            "dates": "1992 - 1993",
            "description": "Bacon ipsum dolor amet filet mignon shoulder pancetta capicola boudin salami strip steak, andouille picanha spare ribs pork loin beef ribs. Turkey ham t-bone short ribs alcatra pig chicken meatloaf cow fatback boudin. Landjaeger bresaola brisket shankle short loin ball tip rump spare ribs frankfurter capicola jerky leberkas. Pastrami shank pig tail turkey."            
        },
        {
            "employer": "University of Santo Tomas",
            "title": "Instructor I",
            "location": "Manila, Philippines",
            "dates": "1990 - 1991",
            "description": "Bacon ipsum dolor amet filet mignon shoulder pancetta capicola boudin salami strip steak, andouille picanha spare ribs pork loin beef ribs. Turkey ham t-bone short ribs alcatra pig chicken meatloaf cow fatback boudin. Landjaeger bresaola brisket shankle short loin ball tip rump spare ribs frankfurter capicola jerky leberkas. Pastrami shank pig tail turkey."            
        }
    ]
};

work.display = function () {
    $("#workExperience").append(HTMLworkStart);
    for (var job = 0; job < work.jobs.length; job++) {
        var workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var workTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var workEmployerTitle = workEmployer + workTitle;
        var workDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var workLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var workDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(workEmployerTitle);
        $(".work-entry:last").append(workLocation);
        $(".work-entry:last").append(workDates);
        $(".work-entry:last").append(workDescription);
    }
}
work.display();

var educ = {
    "schools": [
        {
            "name": "Philippine College of Health Sciences, Inc.",
            "city": "Manila, Philippines",
            "degree": "Bachelor of Science",
            "majors": ["Nursing"],
            "dates": 2007,         
            "url": "pchsmanila.com"
        },
        {
            "name": "University of Santo Tomas",
            "city": "Manila, Philippines",
            "degree": "Bachelor of Science",
            "majors": ["Chemical Engineering"],
            "dates": 1989,         
            "url": "http://www.ust.edu.ph/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer NanoDegree",
            "school": "Udacity",
            "dates": "current",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }        
    ]
};

education.display = function () {
    $("#education").append(HTMLschoolStart);
    for (var course = 0; course < educ.schools.length; course++) {
        var schoolName = HTMLschoolName.replace("%data%", educ.schools[course].name);
        var schoolDegree = HTMLschoolDegree.replace("%data%", educ.schools[course].degree);
        $(".education-entry:last").append(schoolName);
        $(".education-entry:last").append(schoolDegree);
        
        function displayMajors() {
            for (var major = 0; major < educ.schools[course].majors.length; major++) {
                var schoolMajor = HTMLschoolMajor.replace("%data%", educ.schools[course].majors[major]);
                $(".education-entry:last").append(schoolMajor);
            }
        }

        var schoolDates =  HTMLschoolDates.replace("%data%", educ.schools[course].dates);
        var schoolLocation = HTMLschoolLocation.replace("%data%", educ.schools[course].city);
        var schoolURL =  HTMLschoolURL.replace("%data%", educ.schools[course].url);
        $(".education-entry:last").append(schoolDates);
        $(".education-entry:last").append(schoolLocation);
        $(".education-entry:last").append(schoolURL);
    }

    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    for (var course = 0; course < educ.onlineCourses.length; course++) {
        var onlineTitle = HTMLonlineTitle.replace("%data%", educ.onlineCourses[course].title);
        var onlineSchool = HTMLonlineSchool.replace("%data%", educ.onlineCourses[course].school);
        var onlineDates =  HTMLonlineDates.replace("%data%", educ.onlineCourses[course].dates);
        var onlineURL = HTMLonlineURL.replace("%data%", educ.onlineCourses[course].url);
        var onlineTitleSchool = onlineTitle + onlineSchool;

        $(".education-entry:last").append(onlineTitleSchool);
        $(".education-entry:last").append(onlineDates);
        $(".education-entry:last").append(onlineURL);
    }
}
education.display();


var projects = {
    "project": [
        {
            "title": "FEND Project 0",
            "date": "2015",
            "description": "Bacon ipsum dolor amet filet mignon shoulder pancetta capicola boudin salami strip steak, andouille picanha spare ribs pork loin beef ribs. Turkey ham t-bone short ribs alcatra pig chicken meatloaf cow fatback boudin. Landjaeger bresaola brisket shankle short loin ball tip rump spare ribs frankfurter capicola jerky leberkas. Pastrami shank pig tail turkey.",
            "url": "https://github.com/jinglebot/FE-Project-0",
//            "images": ["https://farm1.staticflickr.com/643/22569400881_e85b06d23a_o.jpg"],
            "images": ["images/AboutMeOrig-large.jpg"]
        },
        {
            "title": "Portfolio",
            "date": "2015",
            "description": "Bacon ipsum dolor amet filet mignon shoulder pancetta capicola boudin salami strip steak, andouille picanha spare ribs pork loin beef ribs. Turkey ham t-bone short ribs alcatra pig chicken meatloaf cow fatback boudin. Landjaeger bresaola brisket shankle short loin ball tip rump spare ribs frankfurter capicola jerky leberkas. Pastrami shank pig tail turkey.",
            "url": "https://github.com/jinglebot/MyPortfolio",
//            "images": ["http://lorempixel.com/output/transport-q-c-640-480-3.jpg",
//                      "http://lorempixel.com/output/transport-q-c-640-480-2.jpg"],
            "images": ["images/myportfolio-large.jpg",
                      "images/portlayout-large.jpg"]
        },        
        {
            "title": "Resume",
            "date": "2015",
            "description": "Bacon ipsum dolor amet filet mignon shoulder pancetta capicola boudin salami strip steak, andouille picanha spare ribs pork loin beef ribs. Turkey ham t-bone short ribs alcatra pig chicken meatloaf cow fatback boudin. Landjaeger bresaola brisket shankle short loin ball tip rump spare ribs frankfurter capicola jerky leberkas. Pastrami shank pig tail turkey.",
            "url": "https://github.com/jinglebot/frontend-nanodegree-resume",
//            "images": ["http://lorempixel.com/output/abstract-q-c-640-480-4.jpg", 
//                       "http://lorempixel.com/output/transport-q-c-640-480-5.jpg"],
            "images": ["images/ComingSoon-large.jpg", 
                       "images/ComingSoon-large.jpg"]
        }        
    ]
};

projects.display = function () {
    for (var proj = 0; proj < projects.project.length; proj++) {
        $("#projects").append(HTMLprojectStart);
        var projectTitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
        $(".project-entry:last").append(projectTitle);
        var projectDates = HTMLprojectDates.replace("%data%", projects.project[proj].date);
        $(".project-entry:last").append(projectDates);
        var projectDescription = HTMLprojectDescription.replace("%data%", projects.project[proj].description);
        $(".project-entry:last").append(projectDescription);
        var projectURL = HTMLprojectURL.replace("%data%", projects.project[proj].url);
        $(".project-entry:last").append(projectURL);        
        
        function displayImages() {
            for (var pic = 0; pic < projects.project[proj].images.length; pic++) {
                var projectImage = HTMLprojectImage.replace("%data%", projects.project[proj].images[pic]);
                $(".project-entry:last").append(projectImage);
            }
        }
        if (projects.project[proj].images.length > 0) {
            displayImages();
        }
    }
}
projects.display();

$("#main").append(internationalizeButton);

function inName(name) {
    var name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name = name[0] + " " + name[1];
    console.log(name);
    return name;
}

$("#mapDiv").append(googleMap);



