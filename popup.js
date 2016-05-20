//run on page load
document.addEventListener('DOMContentLoaded', function() {
	//links clicked on so far
	var linksClicked = 0;
	//if the time has ran
	var popupReady = false;
	//if the popup has already appeared to the user
	var popupDone = false;
	var waitingPopup = document.getElementById('waitingpopup');
	//if element isn't on page stop script
	if (!waitingPopup) return;
	var time = waitingPopup.getAttribute('time') || 0;
	var reqPageVisits = waitingPopup.getAttribute('pageVisits') || 0;
	var waitingPopupHTML = waitingPopup.innerHTML;
	var modalHTML = '<div id="myModal" class="modal"><div class="modal-content"><span class="close">X</span>' + waitingPopupHTML + '</div></div>';
	setTimeout(
		function(){
			//popup is now ready once the required links are clicked
			popupReady = true;
			if (linksClicked >= reqPageVisits) loadPopup();
		},
	time);
	//get all links on page
	var allLinks = Array.prototype.slice.call( document.links );
	allLinks.map(function(e){
		e.onclick = function(){
			//once a link has been clicked, increase count, check to see if the right number has been added, if the time has ran and that it hasn't run before, if so show popup
			linksClicked++;
			if (linksClicked >= reqPageVisits && popupReady && !popupDone) loadPopup();
		}
	});
	function loadPopup(){
		popupDone = true;
		var divmodal = document.createElement("div");
		divmodal.innerHTML = modalHTML;
		document.body.appendChild(divmodal);
		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];
		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
		    divmodal.style.display = "none";
		}
	}
}, false);