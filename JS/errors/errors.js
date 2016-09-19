function errorCheck(){
	var hours = document.getElementById("hours").value;
		
	try{
		if(hours < 2 || hours > 100)
			throw new RangeError("Value should be between 100 and 2.");
		else{
			alert("Your ride has been booked successfully");
		}
	}
	catch(error){
		if(error instanceof RangeError){
			alert(error.message);
		}
	}
}