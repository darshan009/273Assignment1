function convert(){
	var enteredNumber = document.getElementById("phoneNo").value;
	
	var firstName = document.getElementById("firstName").value,
		lastName = document.getElementById("lastName").value;
	
	var fullName = firstName + " " + lastName;
	
	
	var removeFloatNumber = Number(enteredNumber);
	if(typeof(enteredNumber) == Number)
		alert("it is a number");
//	alert(typeof(enteredNumber));
//	alert(removeFloatNumber);
	
	alert(fullName);
}