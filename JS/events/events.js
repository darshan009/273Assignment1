function changeDoorStatus(){
	
	//if locked
	if(document.getElementById("door").getAttribute("currentStatus") == "LOCKED"){
		var doorString = "UNLOCKED";
	    var result = doorString.fontcolor("green");
	    document.getElementById("door").setAttribute("currentStatus", "UNLOCKED");
	    document.getElementById("door").innerHTML = result;
	}
	//close the door in 10 sec
	setTimeout(
		function(){
			var doorString = "LOCKED";
		    var result = doorString.fontcolor("red");
		    document.getElementById("door").setAttribute("currentStatus", "LOCKED");
		    document.getElementById("door").innerHTML = result;
	}, 5000);
	
}