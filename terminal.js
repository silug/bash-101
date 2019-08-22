$(document).ready(function () {
	//add the new tab terminal button.
	$("#closeMenu").before('<div id="terminaltoggle" style="visibility:visible;" class="buttonWrapper"><i class="fa fa-clone"></i><a href="https://training.onyxpoint.com/wetty" target="_blank">New Tab Terminal</a></div><hr>');

	// Sets the terminal toggle option in the menu for the students
	$("#fileDownloads").before('<div id="terminaltoggle" style="visibility:visible;" class="buttonWrapper"><i class="fa fa-gamepad"></i> Toggle Terminal</div><hr>');


	$("#closeMenu").before('<div id="puppetdocs" style="visibility:visible;" class="buttonWrapper"><i class="fa fa-book"></i><a href="https://docs.puppet.com/puppet/" target="_blank">Puppet Docs</a></div><hr>');

	// injects the iframe for the terminal window to nest in the background
	$("#preso").before('<iframe id="terminalwindow" style="width:0%; height:0%;" src="https://training.onyxpoint.com/wetty">Outside Webpage</iframe>');

	// This is activated when the class for the terminal window is clicked
	$("#terminaltoggle").click(function () {
		$("#terminalwindow").toggleClass("visibleterm");
		$("#preso").toggleClass("minipreso");
		$(".content").toggleClass("minipresocontent");
		$(".slide").toggleClass("minipresocontent");
		$(".#hamburger").toggleClass("go Ham");
	});
});
