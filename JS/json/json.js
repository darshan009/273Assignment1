function storeInJson(){
	var firstName = document.getElementById("firstName").value,
		lastName = document.getElementById("lastName").value,
		age = document.getElementById("age").value,
		place = document.getElementById("place").value;
	
	//storing in JSON
	var patientData = {
	  "firstName": firstName,
	  "lastName" : lastName,
	  "age": age,
	  "place": place
	};
	
	document.getElementById("output").innerHTML = 
		patientData.firstName + " " +
		patientData.lastName + ", "+
		patientData.age + ", "+
		patientData.place;
}