This repository creates a framework for creating a popup that will appear after the time you specify and after the amount of a tags clicked for your Single Page Application.

Add the HTML for the popup that will render in a div with an id called "waitingpopup" and add the specified time and pagevisits for the logic for when it will appear

Example:

	<div id="waitingpopup" time="1000" pagevisits="2">
		<p class='mycustomCSSclass'>My HTML for the popup </p>
	</div>

Default time will be 0 and default page visits will be 0.