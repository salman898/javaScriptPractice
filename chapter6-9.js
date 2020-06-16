// 1. Write a program to take a number in a variable, do the required arithmetic to display the 
// following result in your browser: 

/*document.write("Result");
var a = 10;
document.write("<br>The Value of a is = "+a);
++a;
document.write("<br><br><br>The Value of a++ is: "+a);
document.write("<br>Now the Value of a is: "+a);

document.write("<br><br><br>The Value of ++a is: 11");
++a;
document.write("<br>The Value of ++a is: "+a);

--a;
document.write("<br><br><br>The Value of --a is: 11");
document.write("<br>The Value of --a is: "+a);
a--;
document.write("<br><br><br>The Value of --a is: 11");
document.write("<br>The Value of --a is: "+a);*/


// 2. What will be the output in variables a, b & result after 
// execution of the following script


/*var a = 2, b = 1; 
--a;
document.write("<br>The Value of a is --a:  "+a);
--b;
document.write("<br>The Value of b is --b:  "+b);
var c = --a - --b;
document.write("<br>The Subraction of --a And --b is:  "+c);
var d = --a - --b + ++b; 
document.write("<br>At this stage --a - --b + ++b:  "+d);
var e = --a - --b + ++b + b--; 
document.write("<br>At this stage --a - --b + ++b + b--:  "+e);

var result = --a - --b + ++b + b--; 
document.write("<br>The Result is: "+result);*/

// 3. Write a program that takes input a name from user & greet the user. 

/*let name = prompt("Enter Your Name: ");
document.write("Good Evening " +name);*/


// 5. Write a program to take input a number from user & display it’s multiplication 
// table on your browser. If user does not enter a new number, 
// multiplication table of 5 should be displayed by default. 

var anyNumber = +prompt("Enter Your Desire Number and See the table:");

 document.write("Table of " , anyNumber + "<br></br>");
 document.write(anyNumber + "x" + "1" + "=" + anyNumber*1 + "<br></br>");
 document.write(anyNumber + "x" + "2" + "=" + anyNumber*2 + "<br></br>");
 document.write(anyNumber + "x" + "3" + "=" + anyNumber*3 + "<br></br>");
 document.write(anyNumber + "x" + "4" + "=" + anyNumber*4 + "<br></br>");
 document.write(anyNumber + "x" + "5" + "=" + anyNumber*5 + "<br></br>");
 document.write(anyNumber + "x" + "6" + "=" + anyNumber*6 + "<br></br>");
 document.write(anyNumber + "x" + "7" + "=" + anyNumber*7 + "<br></br>");
 document.write(anyNumber + "x" + "8" + "=" + anyNumber*8 + "<br></br>");
 document.write(anyNumber + "x" + "9" + "=" + anyNumber*9  + "<br></br>");
 document.write(anyNumber + "x" + "10" + "=" + anyNumber*10 + "<br></br>");
