function copyText(){
	var text = document.getElementById("userInput");
	text.select();
	document.execCommand("copy");
}


function myFunction() {
	var copyText = document.getElementById("myInput");
	copyText.select();
	document.execCommand("copy");
	
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copy to clipboard";
}