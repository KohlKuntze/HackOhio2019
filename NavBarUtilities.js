
function createNavBar() {
	alert("creating nav bar");
	
	var navBarDiv = document.getElementById("navigation-bar");

	var aTag = document.createElement("a");
	aTag.href = "http://http://18.224.98.137/";

	var navTag = document.createElement("nav");
	navTag.class = "text-center";

	var rowDivTag = document.createElement("div");
	rowDivTag.class = "row";

	var styleDivTag = document.createElement("div");
	styleDivTag.style = "width:100%";
	styleDivTag.class = "p-3 mb-2 bg-info text-white";	

	var centerTag = document.createElement("center");

	var headerTag = document.createElement("h1");

	headerTag.innerHTML = "Beerio Kart";

	centerTag.appendChild(headerTag);
	styleDivTag.appendChild(centerTag);
	rowDivTag.appendChild(styleDivTag);
	navTag.appendChild(rowDivTag);
	aTag.appendChild(navTag);
	navBarDiv.appendChild(aTag);

}