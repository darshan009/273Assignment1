function checkedAnswer(){
	
	var checkedValue = document.querySelector('#checkedAnswer:checked').value;
	//if else condition statement
	if(checkedValue == "Sacramento"){
		alert("your answer is correct");
	}else{
		alert("your answer is incorrect");
	}
	
}

function calculateTax(){
	var income = document.getElementById("income").value;
	
	switch(parseInt(income/10000)){
		case 0:
			alert("Your tax rate is 10%");
			break;
		case 1:
			alert("Your tax rate is 15%");
			break;
		case 2:
			alert("Your tax rate is 25%");
			break;
		case 3:
			alert("Your tax rate is 30%");
			break;
		case 4:
			alert("Your tax rate is 35%");
			break;
	}
}
