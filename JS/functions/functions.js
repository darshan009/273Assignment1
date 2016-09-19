function changeLight(){
	
	//if green
	if(document.getElementById("light").getAttribute("currentLight") == "GREEN"){
	    var lightString = "RED";
	    var result = lightString.fontcolor("red");
	    document.getElementById("light").setAttribute("currentLight", "RED");
	    document.getElementById("light").innerHTML = result;
	}
	else if(document.getElementById("light").getAttribute("currentLight") == "RED"){
	    var lightString = "GREEN";
	    var result = lightString.fontcolor("green");
	    document.getElementById("light").setAttribute("currentLight", "GREEN");
	    document.getElementById("light").innerHTML = result;
	}
	
	//call back function every 5 sec
	setTimeout(arguments.callee, 5000);
}