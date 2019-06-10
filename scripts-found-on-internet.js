function copyText() {
	var copyText = document.getElementById("myInput");
	copyText.select();
	document.execCommand("copy");
	document.getSelection().removeAllRanges();
	document.getElementById("myTooltip").classList.add('copied');
	
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "<strong>Copied:</strong> " + copyText.value;
}

function outFunc() {
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "You're doing the right thing";
	document.getElementById("myTooltip").classList.remove('copied');
}