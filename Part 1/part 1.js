//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality

	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to pass all your class students one by one ? think of a way to pass them in your function
*/
// write your code here ...

function factory (name, age, education, nationality){
	return {
		name : name,
		age : age,
		education :education,
		nationality : nationality
	}
}

var friend1 = factory ("Bayan", 28, "computer science", "Jordanian")
var friend2 = factory ("Noor", 23, "computer science","Jordanian")
var cohort2 = [friend1, friend2]

function showFriends (friend){
	return friend.name + " with the age of " + friend.age + " and with " + friend.education + "education " 
}

function averageStudents(cohort2){
	result = 0
	cohort2.forEach(function(element){
		result += element.age
	})
	return result/cohort2.length
}



/*
 b-create a function called rangeSquared in which it will accept two parameters, and will output the squared numbers between these two parameter if the number is even 
	in order to square the numbers create a function called square and call it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,12,16,100];
*/
// write your code here ...
function square (n) {
	return n*n
}
function rangeSquared (x,y){
	var result = [];
	for(var i = 0; i <= y; i++){
		if(i %2 === 0){
			result.push(square(i))
		}
	}
	return result;
}



/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
*/
function leaders (array){
	var result = [];
	for(var i = 0; i < array.length; i++){
		if( i > array[i+1]){
			result.push(i);
		}
	}
	return result;
}
// write your code here ....

