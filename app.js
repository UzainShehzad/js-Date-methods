var now = new Date();
document.write("Current date: " + now +" <br><br>")

var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
alert("Current month: " + months[now.getMonth()]);

var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
alert("Today is " + days[now.getDay()]);

var day = now.getDay()
if(day == 0 || day == 6){
    alert("Its Fun day");
}

var date = now.getDate();
if(date < 16){
    document.write("First fifteen days of the month<br><br>");
}else{
    document.write("Last days of the month<br><br>");
}

var milli = now.getTime();
var minutes = milli / (1000*60);
document.write("Elapsed milliseconds since Jan 1, 1970:" + milli + "<br>");
document.write("Elapsed minutes since Jan 1, 1970: " + minutes + "<br><br>");

var hours = now.getHours();
if(hours < 12){
    alert("It's AM");
}else{
    alert("It's PM");
}


var laterdate = new Date(2020,11,31);
document.write("Later date:" + laterdate + "<br><br>");


var ramadanStart = new Date(2015,5,18);
var today = new Date();
var diff = today - ramadanStart;
var daysPast = Math.floor(diff / (1000*60*60*24));
alert(daysPast + " days have passed since 1st Ramadan, 2015");

var refDate = new Date();
var begin2015 = new Date(2015,0,1);
var diffSec = Math.floor((refDate - begin2015) / 1000);
document.write("On reference date " + refDate + "<br>");
document.write(diffSec + " seconds had passed since beginning of 2015<br><br>");


var cDate = new Date();
var cHours = cDate.getHours();
cDate.setHours(cHours - 1);
document.write("1 hour ago, it was " + cDate + "<br><br>");


var cur = new Date();
var past = new Date();
past.setFullYear(cur.getFullYear() - 100);
alert("Current date: " + cur);
alert("100 years back, it was " + past);


var age = prompt("Enter your age");
var birthYear = new Date().getFullYear() - age;
document.write("Your age is " + age + "<br>");
document.write("Your birth year is " + birthYear + "<br><br>");


var name = prompt("Enter customer name");
var month = months[new Date().getMonth()];
var units = prompt("Enter number of units");
var charges = prompt("Enter charges per unit");

var net = units * charges;
var late = net * 0.1;
var gross = net + late;

document.write("Customer Name: " + name + "<br>");
document.write("Current Month: " + month + "<br>");
document.write("Number of units: " + units + "<br>");
document.write("Charges per unit: " + charges + "<br>");
document.write("Net Amount: " + net.toFixed(2) + "<br>");
document.write("Late Payment: " + late.toFixed(2) + "<br>");
document.write("Gross Amount: " + gross.toFixed(2) + "<br>");