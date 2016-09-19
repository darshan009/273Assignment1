function addItems(){
	//all amount are in dollars
	var tomatoes = document.getElementById("tomatoes").value,
		milk = document.getElementById("milk").value,
		rice = document.getElementById("rice").value,
		onions = document.getElementById("onions").value,
		sumAllGroceries = 0;

	sumAllGroceries += +tomatoes + +milk + +rice + +onions;
	alert("sum of  all groceries is "+sumAllGroceries);
	
};