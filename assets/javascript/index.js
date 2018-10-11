var allProducts = [{name: "banana", category: "fruit"}, {name:"carrot", category: "vegetable"}, {name: "peanut", category: "nut"}, {name: "apple", category: "fruit"}, {name:"broccoli", category: "vegetable"}, {name: "almond", category: "nut"}];
//var filter = "none";
var cart = [];
var activeProducts=allProducts;
cart=[];
// {name:"carrot", category:"vegetable"}
// cart.push(allProducts[3]);
/*$(".canAdd").on("click", function() {
	console.log("sup");
});
*/

function addToCart(element) {
	var elementPos = allProducts.map(function(x) {return x.name; }).indexOf(element.id);
	var objectFound = allProducts[elementPos];
	var inCart = cart.map(function(x) {return x.name; }).indexOf(element.id);
	console.log(elementPos);
	console.log(objectFound);
	console.log(inCart);
	if(inCart<0) {
		cart.push(objectFound);
		updateView();
	}
	else {
		alert("THIS ITEM IS ALREADY IN CART!!!");
		updateView();
	}
	// if (cart.indexOf(element.id)<0){
	// 	console.log(cart.indexOf(element.id));
	// 	cart.push(allProducts[allProducts.indexOf(element.id)]);
	// }
}

function removeFromCart () {

}

function changeFilter (filter) {
	if (filter === "noneF") {
		activeProducts=allProducts;
		updateView();
	}
	else if (filter === "fruitF") {
		activeProducts=[];
		allProducts.forEach(function(element) {
			if(element.category==="fruit") {
				activeProducts.push(element);
			}
		});
		updateView();
	}
	else if (filter === "vegetableF") {
		activeProducts=[];
		allProducts.forEach(function(element){
			if(element.category==="vegetable") {
				activeProducts.push(element);
			}
		});
		updateView();
	}
	else if (filter==="nutF") {
		activeProducts=[];
		allProducts.forEach(function(element){
			if(element.category==="nut") {
				activeProducts.push(element);
			}
		});
		updateView();
	}
}

function updateView () {
	$("#itemArea").empty();
	$("#cartArea").empty();
	activeProducts.forEach(function(element) {
		var button = $("<button>");
		$(button).addClass("btn btn-primary");
		$(button).addClass(element.category);
		$(button).addClass("canAdd");
		$(button).attr("onClick", "addToCart(this)");
		$(button).attr("data-cart", false);
		$(button).attr("id", element.name);
		$(button).text(element.name);
  		$("#itemArea").append(button); 
  	});
  	cart.forEach(function(element) {
		var button = $("<button>");
		$(button).addClass("btn btn-primary");
		$(button).addClass(element.category);
		$(button).addClass("canRemove");
		$(button).attr("data-cart", true);
		$(button).attr("id", element.name);
		$(button).text(element.name);
  		$("#cartArea").append(button); 
  	});

}
updateView();