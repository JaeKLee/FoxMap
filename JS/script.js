// This contains all JS related scripts for the map
// Created by Jae Kyoung Lee and Ian Sniffen
// © Copyright 2017 Marist College. All Rights Reserved.

//-----------------------------------Tooltip------------------------------------
$(document).ready(function(){
    
    
    $('area').each(function() {
        $(this).qtip({
            overwrite: true,
            content: {
                text: $('#'+$(this).attr('id')+'tip').html(),
                title: function(event, api) {
                // Retrieve content from title attribute of the $('.selector') element
                 return $(this).attr('title');
                }
            },
            style: { 
                classes: 'qtip-light qtip-rounded',
                widget: true, // Use the jQuery UI widget classes
		           def: false, // Remove the default styling (usually a good idea, see below)
		           tip: {
		               border: 0,
		               corner: true,
		               width: 24,
		               height: 24
		           }
            },
            show:{
                solo: true
            },
            hide: 'unfocus',
            position: {
                target: 'mouse',
                my:'top left',
                at:'top right',
                //target: 'event', // Use the mouse position as the position origin
                viewport: $('#imageID'),
                adjust: {
                    // Don't adjust continuously the mouse, just use initial position
                    mouse: false,
                    method: 'flipinvert flipinvert', 
                    screen: false,
                    }
                },
        });
    });

}); //end of $(document).ready

function showtooltip(item){
    $(item).qtip({
        content: {
            text: $(item+'tip').html(),
            title: function(event, api) {
            // Retrieve content from title attribute of the $('.selector') element
             return $(item).attr('title');
            }
        },
        style: { 
          classes: 'qtip-light qtip-rounded',
             widget: true, // Use the jQuery UI widget classes
		        def: false, // Remove the default styling
		        tip: {
		          border: 0,
		          corner: true,
		          width: 24,
		          height: 24
		      }
        },
        show:{
            solo: true
        },
        hide: 'unfocus',
          position: {
            my:'center left',
            at:'center right',
            //target: 'event', // Use the mouse position as the position origin
            viewport: $('#imageID'),
            adjust: {
                // Don't adjust continuously the mouse, just use initial position
                //mouse: false,
                method: 'flip shift', 
                screen: true
                }
            },
    });
    highlight(item.slice(1));
    console.log(item);
    $(item).qtip('show');
} //end of showtooltip

var timeoutID;
var blinkTimer;
var blink = 1;

function setup() {
    this.addEventListener("mousemove", resetTimer, false);
    this.addEventListener("mousedown", resetTimer, false);
    this.addEventListener("keypress", resetTimer, false);
    this.addEventListener("DOMMouseScroll", resetTimer, false);
    this.addEventListener("mousewheel", resetTimer, false);
    this.addEventListener("touchmove", resetTimer, false);
    this.addEventListener("MSPointerMove", resetTimer, false);
    startTimer();
}
setup();
startBlinkTimer();
 
function startTimer() {
    // wait 2 seconds before calling goInactive
    timeoutID = window.setTimeout(goInactive, 180000);
}

function startBlinkTimer(){
    blinkTimer = window.setTimeout(blinker, 1000);
}

function blinker(){
    blink = (blink==1 ? .5 : 1);
    window.clearTimeout(blinkTimer);
    startBlinkTimer();
    highlight(currentHighlight);
}
 
function resetTimer(e) {
    window.clearTimeout(timeoutID);
    goActive();
}
 
function goInactive() {
    location.href = "index.html";
}
 
function goActive() {
    // do something 
    startTimer();
}

//------------------------------------Search------------------------------------
//Search content 
$(document).ready(function() {

    $('#imageID, #parkbtn').click(function() { 
        //This is for the fade out animation when Parking Information btn is clicked
        $('#tipue_search_content').css('display', 'external').fadeOut();
    });
    $('#tipue_search_input, #submit, #search_dd').focusin(function() { 
        // This brings out tipue_search_content modal into display 
        // once input, submit, or search_dd is selected 
        $('#tipue_search_content').css('display', 'external').fadeIn(400, function() {
            document.getElementById("tipue_search_content").style.padding = "10px 0 5px 1.5%";
        });
    }); 
    $('#tipue_search_input').focusin(function() {
        document.getElementById("tipue_search_input").innerHTML="";
    });

            
    var search_drop = document.getElementById("search_dd");
    var selectedOption = search_drop.options[search_drop.selectedIndex].value;
    var showVar = 3; //Number of results for surch
    selectedOption == 0 ?  showVar = 3: showVar = 5;
    
    $('#tipue_search_input, #submit').tipuesearch({
        'show' : showVar,
        'minimumLength' : 1, //Minimum number of characters search needs to search
        'showTitleCount' : false
    });

});

//Stores the data of dropdown selection so it can carry over after refreshing

document.getElementById("search_dd").onchange = function() {
    localStorage.setItem('search_dd', document.getElementById("search_dd").value);
    };

if (localStorage.getItem('search_dd')) {
    document.getElementById("search_dd").options[localStorage.getItem('search_dd')].selected = true;
    }
    
    
//--------------------------------Parking Lot Map-------------------------------
// Get the modal
var parkModal = document.getElementById('parkingDiv');
var hideParkModal = document.getElementsByClassName('parkDiv-content')[0];

// Get the button that opens the modal
var btn = document.getElementById("parkbtn");

// Get the <span> element that closes the modal
var span = document.getElementById("closeBtn");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    parkModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    parkModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal (or rather, if they click
// the white box outside the parking map), close the parking map
window.onclick = function(event) {
    if (event.target == hideParkModal) {
        parkModal.style.display = "none";
    }
};

//----------------------------------Help Button---------------------------------
function helpFn() {
    var helpPop = document.getElementById("helpText");
    helpPop.classList.toggle("show");
}

//-----------------------------------Scalable-----------------------------------
var currentHighlight, currentPointer = 'dn';
window.onload = function () {
    navigator.geolocation.getCurrentPosition(curLoc);
    //map scaling
    var ImageMap = function (map, img) {
            var n,
                areas = map.getElementsByTagName('area'),
                len = areas.length,
                coords = [],
                previousWidth = 9147;
            for (n = 0; n < len; n++) {
                coords[n] = areas[n].coords.split(',');
            }
            this.resize = function () {
                
                var n, m, clen,
                    x = img.offsetWidth / previousWidth;
                for (n = 0; n < len; n++) {
                    clen = coords[n].length;
                    for (m = 0; m < clen; m++) {
                        coords[n][m] *= x;
                    }
                    areas[n].coords = coords[n].join(',');
                }
                previousWidth = document.body.clientWidth;
                var resizeCanvas = document.querySelector('canvas');
                resizeCanvas.width=img.offsetWidth;
				resizeCanvas.height=img.offsetHeight;
				highlight(currentHighlight);
                return true;
            };
            window.onresize = this.resize;
        },
    imageMap = new ImageMap(document.getElementById('foxmap'), document.getElementById('imageID'));
    imageMap.resize();
    return;
    //End of map scaling
    
}

//-----------------------------------Canvas-------------------------------------


function highlight(id){//send index of building to be highlighted
    var canvas = document.querySelector('canvas'),
        ctx = canvas.getContext('2d');
    ctx.imageSmoothingQuality = "high";//Prevents blurriness of canvas image
    ctx.drawImage(document.getElementById('mapImage'),0,0,canvas.width,canvas.height);
    
    if(id){
        var x = document.getElementById(id);
        var coordSpl = x.coords.split(',');
        ctx.fillStyle = 'rgba(179,27,27,.25)';
        ctx.beginPath();
        ctx.moveTo(coordSpl[0], coordSpl[1]);//go to first coord
        //for loop
        for(var i=2;i<coordSpl.length;i+=2){
            ctx.lineTo(coordSpl[i],coordSpl[i+1]);
        }
        ctx.closePath();
        ctx.fill();
        currentHighlight=id;    
    }
    
    pointer(currentPointer);
}

function curLoc(position) {
    NearestBuilding(position.coords.latitude, position.coords.longitude);
}

function deg2Rad(deg){
	return deg*Math.PI/180;
}

function haversineDistance(lat1, lon1, lat2, lon2) {
  lat1 = deg2Rad(lat1);
  lat2 = deg2Rad(lat2);
  lon1 = deg2Rad(lon1);
  lon2 = deg2Rad(lon2);
  var R = 6371; // Earth's mean radius in km
  var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
  var y = (lat2 - lat1);
  var d = Math.sqrt(x * x + y * y) * R;
  return d;
}

//temporary until we start pulling from db
var buildings = [
	["byrne",41.719976, -73.936653],
	["library",41.721880, -73.934180],	
	["ch",41.720401, -73.935644],
	["chapel",41.722082, -73.933536],
	["corn",41.721369, -73.938455],
	["dn",41.720723, -73.932769],
	["dy",41.724200, -73.933091],
	["fn",41.725607, -73.932996],
	["foy",41.724593, -73.934128],
	["lf",41.722794, -73.928736],
	["uf",41.722989, -73.926496],
	["gs",41.721414, -73.933922],
	["hc",41.722671, -73.934630],
	["kieran",41.721784, -73.931943],
	["kirk",41.723858, -73.935204],
	["leo",41.719540, -73.936186],
	["lt",41.723338, -73.932785],
	["ln",41.722751, -73.935230],
	["marian",41.721074, -73.934287],
    ["boat",41.720672, -73.938482],
    ["mccann",41.717665, -73.935224],
    ["mr",41.721510, -73.936030],
    ["sc",41.720972, -73.935510],
    ["tmw",41.726812, -73.932930],
    ["ngb",41.727039, -73.933992],
    ["ngc",41.726671, -73.934057],
    ["ngd",41.726182, -73.933740],
    ["rt",41.721386, -73.935381],
    ["ann",41.728101, -73.934378],
    ["peter",41.722560, -73.932724],
    ["ah",41.722374, -73.930143],
    ["sh",41.719268, -73.935669],
    ["sp",41.721482, -73.930848],
    ["tenney",41.719138, -73.932962],
    ["un",41.723574, -73.934718],
    ["lwc",41.720253, -73.929829],
    ["uwc",41.720729, -73.926063]				
];
//above code should be pulled in from db





function NearestBuilding(lat,lon){
    var min = Number.MAX_VALUE,
	    minID;
	for(i=0;i<buildings.length;i++){
		var dif = haversineDistance(lat,lon,buildings[i][1],buildings[i][2]);
		if(dif<min){
    		minID=buildings[i][0];
	    	min=dif;
		}
	}
	pointer(minID);
}



function pointer(id){
    var item=document.getElementById(id),
        x=0,
        y=0,
        coordSpl = item.coords.split(','),
        canvas=document.querySelector('canvas'),
        ctx = canvas.getContext('2d', {alpha: false});
    for(var i=0;i<coordSpl.length;i+=2){
        x+=parseFloat(coordSpl[i]);
        y+=parseFloat(coordSpl[i+1]);
    }
    //Rather than find centroid of polygon, find centroid of points
    x/=(coordSpl.length/2);
    y/=(coordSpl.length/2);    
    var pct = canvas.width*.009375;//pct is used to offset shapes
    y-=pct*2
    //Pointer shape
    ctx.fillStyle='#B31B1B';
    ctx.beginPath();
    ctx.arc(x,y,pct,0,Math.PI,true);
    ctx.quadraticCurveTo(x-pct,y+(pct*.25),x,y+(pct*1.5));
    ctx.quadraticCurveTo(x+pct,y+(pct*.25),x+pct,y);
    ctx.fill();
    //White Circle in pointer
    ctx.fillStyle='#FFF';
    ctx.beginPath();
    ctx.arc(x,y,(pct*.5),0,2*Math.PI);
    ctx.fill();
    //You Are Here
    
    var scale = 4;
    var ocanvas = document.createElement('canvas');
    var octx = ocanvas.getContext('2d');
    ocanvas.width = canvas.width * scale;
    ocanvas.height = canvas.height * scale;
    
    octx.drawImage(canvas, 0, 0, ocanvas.width, ocanvas.height);
    
    octx.fillStyle="rgba(255,255,255,"+blink+")";
    octx.font = "Italic Bold "+2*scale+"em Myriad Pro";
    octx.textAlign = "center";
    octx.fillText("You Are Here", x*scale, (y-(pct)-5)*scale); 
    
    ctx.drawImage(ocanvas, 0, 0, canvas.width, canvas.height);
    
    currentPointer=id;
}