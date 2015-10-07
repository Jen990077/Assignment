 
 	function displayRestaurant(restaurant) 
 { 
 	alert(restaurant.fastFood); 
	alert(restaurant.DairyQueen);
 	alert(restaurant.city); 
 	alert(restaurant.employee1[0].firstName); 
 	alert(restaurant.employee1[0].lastName); 
 	alert(restaurant.employee1[0].age);
 	alert(restaurant.employee1[0].shirtWork);
 
 
 	for (var i=0; i<restaurant.employee1.length; i++) 
 	{ 
 		var member = restaurant.employee1[i];  
		alert( member.shiftWork + " " + member.firstName + " " + member.lastName + "" + member.age); 
 	} 
 } 
 
 
	function displayRestaurant2(restaurant2) 
 { 
 	alert(restaurant.fastFood); 
 	alert(restaurant.city); 
	alert(restaurant.DairyQueen);
 	alert(restaurant.employee2[0].firstName); 
 	alert(restaurant.employee2[0].lastName); 
 	alert(restaurant.employee2[0].age);
 	alert(restaurant.employee2[0].shirtWork);
 
 
 	for (var i=0; i<restaurant2.employee2.length; i++) 
 	{ 
 		var member2 = restaurant2.employee2[i];  
		alert( member2.shiftWork + " " + member2.firstName + " " + member2.lastName + "" + member2.age); 
 	} 
 } 

	function displayRestaurant3(restaurant3) 
 { 
 	alert(restaurant.fastFood); 
 	alert(restaurant.city); 
	alert(restaurant.DairyQueen);
 	alert(restaurant.employee3[0].firstName); 
 	alert(restaurant.employee3[0].lastName); 
 	alert(restaurant.employee3[0].age);
 	alert(restaurant.employee3[0].shirtWork);
 
 
 	for (var i=0; i<restaurant3.employee3.length; i++) 
 	{ 
 		var member3 = restaurant3.employee3[i];  
		alert( member3.shiftWork + " " + member3.firstName + " " + membe3r.lastName + "" + member3.age); 
 	} 
 } 

	function displayRestaurant4(restaurant4) 
 { 
 	alert(restaurant.fastFood); 
 	alert(restaurant.city); 
	alert(restaurant.DairyQueen);
 	alert(restaurant.employee4[0].firstName); 
 	alert(restaurant.employee4[0].lastName); 
 	alert(restaurant.employee4[0].age);
 	alert(restaurant.employee4[0].shirtWork);
 
 
 	for (var i=0; i<restaurant4.employee4.length; i++) 
 	{ 
 		var member4 = restaurant4.employee4[i];  
		alert( member4.shiftWork + " " + member4.firstName + " " + member4.lastName + "" + member4.age); 
 	} 
 } 







function createRestaurantAsJSON() 
 { 
 	return { 

   		"fastFood" : "DairyQueen",
 		"city"     : "Streetsboro", 
 		 
 		"employee1" : [ 

 
 			{ 
 				"firstName" : "Jennifer", 
				"lastName" : "Leverenz", 
 				"age" 	   : 21,
				"shiftWork" : "Day" 
 } ]};
 
 
 }
	
	function createRestaurant2AsJSON()  
 { 
 	return { 
			
	"employee2" : [

 
 			{ 
 				"firstName" : "Kenzie", 
 				"lastName" : "Gregoire", 
 				"age" : 20,
				"shiftWork" : "Day"
 
			}
	]};
 }
	function createRestaurant3AsJSON()
 { 
 	return { 
	"employee3" : [
 
 			{ 
 				"firstName" : "Kayla", 
 				"lastName" : "Kulla", 
 				"age" : 20,  
				"shiftWork" : "night"
 			}
			
	]};
 }
	function createRestaurant4AsJSON() 
 { 
 	return { 
                         
 	"employee4": [		
			{ 
 				"firstName" : "Mary", 
 				"lastName" : "Richards", 
 				"age" : 20,  
				"ShiftWork" : "night"
 			}  
			]
 
 
 		
 
 	}; 
 } 







$(document).ready(function () {
 
 $(".button0").mouseover(function() 
 	{ 
 		$(this).css("border", "10px solid blue"); 
 	}); 
 
 
 	$(".button0").mouseout(function() 
 	{ 
 		$(this).css("border", "10px solid red"); 
 	}); 

$(".button1").click(function() 
 	{ 
 		var member = createRestaurantAsJSON(); 
 		displayRestaurant(restaurant); 
 	}); 



 $(".button2").click(function() 
 	{ 
 		var member2 = createRestaurant2AsJSON(); 
 		displayRestaurant2(restaurant2); 
 	}); 


$(".button6").mouseover(function() 
 	{ 
 		$(this).css("border", "10px solid purple"); 
 	}); 
 
 
 	$(".button6").mouseout(function() 
 	{ 
 		$(this).css("border", "10px solid pink"); 
 	}); 


$(".button3").click(function() 
 	{ 
 		var member3 = createRestaurant3AsJSON(); 
 		displayRestaurant3(restaurant3); 
 	}); 

$(".button7").mouseover(function() 
 	{ 
 		$(this).css("border", "10px solid red"); 
 	}); 
 
 
 	$(".button7").mouseout(function() 
 	{ 
 		$(this).css("border", "10px solid black"); 

 	}); 




$(".button4").click(function() 
 	{ 
 		var member4= createRestaurant4AsJSON(); 
 		displayRestaurant4(restaurant4); 
 	}); 



$(".button8").mouseover(function() 
 	{ 
 		$(this).css("border", "10px solid lime"); 
 	}); 
 
 
 	$(".button8").mouseout(function() 
 	{ 
 		$(this).css("border", "10px solid red"); 
 	}); 

  
  
	
