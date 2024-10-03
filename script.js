// Question 01:

// var fname = prompt("Enter Youre First Name:");
// var lname = prompt("Enter Youre Last Name:");
// var fullName = fname.concat(lname);
// document.write("Youre Full Name is: " + fullName);


// Question 02:

// var favMob = prompt("Enter Youre Favoratie Mobile Name:");
// var strLen = favMob.length;

// document.write("Your Favoratie Mobile Name is: " + favMob + "<br>");
// document.write("Name length: " + strLen);


// Question 03:

// var word = "Pakistani";
// var index = word.indexOf("n");
// document.write("Index of 'n' in the word 'Pakistani' is: " + index);


// Question 04:

// var word = "Hello World";
// var ind = word.lastIndexOf("l");
// document.write("The last index of 'l' in the word 'Hello World' is: " + ind);


// Question 05:

// var word = "Pakistani";
// var ind = word.charAt("3");
// document.write("word is: " + word + "<br>")
// document.write("The word in 3rd index is: " + ind);


// Question 06:

// var fname = prompt("Enter Youre First Name:");
// var lname = prompt("Enter Youre Last Name:");
// var fullName = fname.concat(lname);
// document.write("Youre Full Name is: " + fullName);


// Question 07:

// var word = "Hyderabad";
// var rep = word.replace("Hyder", "Islam");
// document.write("original: " + word + "<br>" + "Replacing 'Hyder' with 'Islam': " + rep);


// Question 08:

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var updatedMessage = message.replace(/and/g, "&");
// document.write(updatedMessage);


// Question 9:

// var value = "472";
// document.write("Value: " + value + "<br>Type: " + typeof value + "<br>");
// var numValue = Number(value);
// document.write("Value: " + numValue + "<br>Type: " + typeof numValue);


// Question 10:

// var userInput = prompt("Enter a word:");
// var upperCaseInput = userInput.toUpperCase();
// document.write("User input: " + userInput + "<br>Upper case: " + upperCaseInput);


// Question 11:

// var userInput = prompt("Enter a word:");
// var titleCaseInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
// document.write("User input: " + userInput + "<br>Title case: " + titleCaseInput);


// Question 12:

// var num = 35.36;
// var numString = num.toString().replace(".", "");
// document.write(numString);


// Question 13:

// var username = prompt("Enter a username:");
// var specialChars = ['@', '.', ',', '!'];
// var isValid = true;

// for (var i = 0; i < specialChars.length; i++) {
//   if (username.includes(specialChars[i])) {
//     isValid = false;
//     break;
//   }
// }

// if (!isValid) {
//   alert("Please enter a valid username without special characters [@ . , !]");
// } else {
//   document.write("Username is valid: " + username);
// }


// Question 14:

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter the item to search:").toLowerCase();
var itemFound = false;
var itemIndex = -1;

for (var i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === userInput) {
    itemFound = true;
    itemIndex = i;
    break;
  }
}

if (itemFound) {
  document.write(userInput + " is available at index " + itemIndex + " in the list.");
} else {
  alert(userInput + " is not available in the list.");
}



// Question 15:
