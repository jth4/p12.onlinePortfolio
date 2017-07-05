// ---------------------------------------


	// Alerts & Notifications
	

// ---------------------------------------

// ===================
// Bell Notification
// ===================

var bellWrap = document.getElementById('notification-bell');
var bellDot = document.getElementById('bellDot');
var modal = document.getElementById('bellAlerts');
var span = document.getElementsByClassName("close")[0];

bellWrap.addEventListener('click', function() {
	bellDot.style.opacity = 0;	
	modal.style.display = "block";
});

span.addEventListener('click', function() {
    modal.style.display = "none";
});

window.addEventListener('click', function() {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});


// ===================
// Alert Message
// ===================

var closeAlert = document.getElementById('alertClose');

closeAlert.addEventListener('click', function () {
	var alert = document.getElementById('alert');
	alert.innerHTML = "You're all caught up!";
	
	function changeAlertStatus(){ 
		alert.className = "noAlerts";}
	
	setTimeout(changeAlertStatus, 500);
});



// ---------------------------------------


	// CHARTS
	

// ---------------------------------------


// ==========/*\==========
// Periodic Visitors Chart
// =======================



var trafficBtnMonthly = document.getElementById('traffic-btn-monthly');
var trafficBtnWeekly = document.getElementById('traffic-btn-weekly');
var trafficBtnDaily = document.getElementById('traffic-btn-daily');
var trafficBtnHourly = document.getElementById('traffic-btn-hourly');


trafficBtnMonthly.addEventListener('click', trafficMonthly);
trafficBtnWeekly.addEventListener( 'click', trafficWeekly );
trafficBtnDaily.addEventListener( 'click' , trafficDaily  );
trafficBtnHourly.addEventListener('click' , trafficHourly );

trafficWeekly();

function trafficMonthly(e) {
	e.preventDefault();

	var ctx = document.getElementById('trafficChart').getContext('2d');
	var chart = new Chart(ctx, {
	    // The type of chart we want to create
	    type: 'line',
	
	    // The data for our dataset
	    data: {
	        labels: ['Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'],
	        datasets: [{
	            label: "My First dataset",
	            backgroundColor: 'rgba(65,86,119,.3)',
	            borderColor: '#415677',
	            data: [0, 10, 5, 2, 20, 30, 45, 30, 35, 25, 20, 30],
	        }]
	    },
	
	    // Configuration options go here
	    options: {
	    	legend: {
	    		display: false
	    		}
	    }
	});

	buttonChange(trafficBtnMonthly);
}

function trafficWeekly(e) {

// Why dis not work?
//	e.preventDefault();
	
	var ctx = document.getElementById('trafficChart').getContext('2d');
	var chart = new Chart(ctx, {
	    // The type of chart we want to create
	    type: 'line',
	
	    // The data for our dataset
	    data: {
	        labels: ['4/20-4/27','4/20-4/27','4/20-4/27','4/20-4/27','4/20-4/27','4/20-4/27','4/20-4/27'],
	        datasets: [{
	            label: "My First dataset",
	            backgroundColor: 'rgba(65,86,119,.3)',
	            borderColor: '#415677',
	            data: [0, 10, 5, 2, 20, 30, 45],
	        }]
	    },
	
	    // Configuration options go here
	    options: {
	    	legend: {
	    		display: false
	    		}
	    }
	});

	buttonChange(trafficBtnWeekly);
}

function trafficDaily(e) {
	e.preventDefault();

	var ctx = document.getElementById('trafficChart').getContext('2d');
	var chart = new Chart(ctx, {
	    // The type of chart we want to create
	    type: 'line',
	
	    // The data for our dataset
	    data: {
	        labels: ['M','Tu','W','Th','F','Sa','Su'],
	        datasets: [{
	            label: "My First dataset",
	            backgroundColor: 'rgba(65,86,119,.3)',
	            borderColor: '#415677',
	            data: [20, 30, 15, 11, 11, 15, 12],
	        }]
	    },
	
	    // Configuration options go here
	    options: {
	    	legend: {
	    		display: false
	    		}
	    }
	});
	
	buttonChange(trafficBtnDaily);
}


function trafficHourly(e) {
	e.preventDefault();

	var ctx = document.getElementById('trafficChart').getContext('2d');
	var chart = new Chart(ctx, {
	    // The type of chart we want to create
	    type: 'line',
	
	    // The data for our dataset
	    data: {
	        labels: ['12a-4a','4a-8a','8a-12p','12p-4p','4p-8p','8p-12a'],
	        datasets: [{
	            label: "My First dataset",
	            backgroundColor: 'rgba(65,86,119,.3)',
	            borderColor: '#415677',
	            data: [17,15,25,35,50,30],
	        }]
	    },
	
	    // Configuration options go here
	    options: {
	    	legend: {
	    		display: false
	    		}
	    }
	});
	
	buttonChange(trafficBtnHourly);
}

// =========================
// Change Chart Button Style
// =========================

function buttonChange(periodicBtn) {
	
	var trafficBtns = [trafficBtnWeekly, 
						trafficBtnDaily, 
						trafficBtnHourly, 
						trafficBtnMonthly];
	
	for(var i=0; i < trafficBtns.length; i+=1) {
		if(trafficBtns[i] === periodicBtn) {
			trafficBtns[i].className = 'selected';
		} else {
			trafficBtns[i].className = '';
		}
	}
}

//-------------------------------------------------------

// =========================
// Daily Traffic Chart (bar)
// =========================

var ctx = document.getElementById('dailyTrafficChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["M", "Tu", "W", "Th", "F", "Sa", "Su"],
        datasets: [{
            backgroundColor: '#415677',
            borderColor: '#415677',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {
    	legend: {
    		display: false
    		}
    }
});

// ===================
// Mobile Users Chart
// ===================

var ctx = document.getElementById('mobileUsersChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: [
            	'rgba(165,86,19,.3)',
            	'rgba(65,186,119,.6)',
            	'rgba(65,86,119,.9)'
            	],
            borderColor: 'rgb(65,86,119)',
            data: [20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {
    	legend: {
    		position: 'right',
    		labels : { boxWidth: 15 }
    	},
    	layout: {
            padding: {
                left: 0,
                right: 70,
                top: 20,
                bottom: 0
            }
        }
    }
});

// ---------------------------------------


	// User Messages
	

// ---------------------------------------

var messageSubmit = document.getElementById('messageSubmit');
var userMessage = document.getElementById('user_message');
var userSearch = document.getElementById('user_search');

// ========================
// Confirmation / Rejection
// ========================

messageSubmit.addEventListener('click', function(e) {
	e.preventDefault();
	
	if(!userMessage.value || !userSearch.value){
		alert('Whoops!  Looks like you forgot to select a user or type a message.');
	} else {
		alert('Message Submitted Successfully.');
		userMessage.value = '';
		userSearch.value = '';
	}
});


// ============
// Autocomplete
// ============

new Awesomplete(userSearch, {
	list: [
		"Alex Grey",
		"Billy The Kid",
		"Carol King",
		"Doris Day",
		"Elon Musk",
		"Frank Lloyd Wright",
		"Greg Stevens",
		"Henry Wigglesheimer",
		"Ivan Krotchevitch",
		"Jessica Messica",
		"Kid Cudi",
		"Lori Hammerstein",
		"Misty From Pokemon",
		"Nora Jones",
		"Opra Winfrey",
		"Patrick Ewing",
		"Quincy Jones",
		"Rocky Raccoon",
		"Steve Buschemi",
		"Tina Turner",
		"Ulysses Richardson",
		"Victoria Schmictoria",
		"Winston Minston",
		"Xavier, Charles",
		"Yolanda Schmolonda",
		"Zipp Grasswell",
		]
});

// ---------------------------------------


	// Settings
	

// ---------------------------------------


var emailNotifications = document.getElementById('emailNotifications');
var publicProfile = document.getElementById('publicProfile');
var timezone = document.getElementById('timezone');

var settingsSave = document.getElementById('settingsSave');
var settingsCancel = document.getElementById('settingsCancel');



settingsSave.addEventListener('click', function(e) {
	e.preventDefault();
	
		//Localstorage Save
		
		function save(){
		    localStorage.setItem('publicProfile', publicProfile.checked);
		    
		    localStorage.setItem('emailNotifications', emailNotifications.checked);
		    
		    localStorage.setItem('timezone', timezone.selectedIndex);
		}
		
		save();
	
	alert('Settings have been successfully saved.');
});

// Cancel Settings

settingsCancel.addEventListener('click', function(e) {
	e.preventDefault();
	emailNotifications.checked = false;
	publicProfile.checked = false;
	timezone.selectedIndex = 0;
	
	alert('Settings will reset.  Click "Save" to commit these changes.');
	
});


//Localstorage Load

function load(){    
    var checked = JSON.parse(localStorage.getItem('publicProfile'));
    publicProfile.checked = checked;
    
    var checked2 = JSON.parse(localStorage.getItem('emailNotifications'));
    emailNotifications.checked = checked2;
    
    var timezoneIndex = JSON.parse(localStorage.getItem('timezone'));
    timezone.selectedIndex = timezoneIndex;
}

load();