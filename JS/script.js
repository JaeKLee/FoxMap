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
    $(item).qtip('show');
} //end of showtooltip

var timeoutID;
 
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
 
function startTimer() {
    // wait 2 seconds before calling goInactive
    timeoutID = window.setTimeout(goInactive, 180000);
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
            
var search_drop = document.getElementById("search_dd");
var selectedOption = search_drop.options[search_drop.selectedIndex].value;
var showVar = 3;
selectedOption == 0 ?  showVar = 3: showVar = 5;

  $('#tipue_search_input, #submit').tipuesearch({
      'show' : showVar,
      'minimumLength' : 1,
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
window.onload = function () {
    
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
                return true;
            };
            window.onresize = this.resize;
        },
        imageMap = new ImageMap(document.getElementById('foxmap'), document.getElementById('imageID'));
    imageMap.resize();
    return;
    //End of map scaling
    
}