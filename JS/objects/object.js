function house(){

	//objects
	var table = new Object(),
		lamp = new Object(),
		chair = new Object(),
		bed = new Object(),
		carpet = new Object();

	//object properties
	table.color = document.getElementById("tableColor").value;
	table.size = document.getElementById("tableSize").value;
	
	lamp.color = document.getElementById("lampColor").value;
	lamp.size = document.getElementById("lampSize").value;
	
	chair.color = document.getElementById("chairColor").value;
	chair.size = document.getElementById("chairSize").value;
	
	bed.color = document.getElementById("bedColor").value;
	bed.size = document.getElementById("bedSize").value;
	
	carpet.color = document.getElementById("carpetColor").value;
	carpet.size = document.getElementById("carpetSize").value;
	
	alert(table);
}