function replaceWords(){
	
	var statement = document.getElementById('enteredStatement').value,
//		toBeReplaced = document.getElementById('toBeReplaced').value,
		replacement = document.getElementById('replacement').value,
//		regExp = new RegExp(replacement+"" ,"g"),
		newStatement = statement.replace(/\bhi\b/g, replacement);
	alert(newStatement);
}