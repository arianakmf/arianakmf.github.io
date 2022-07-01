/* .js files add interaction to your website */

/* fact generator*/ 
var quoteList = [
 "Over 7,000 species around the world are considered endangered.", /*0*/
 "Commercial Whaling in 1970 was the main cause of population drops and endangered status.", /*1*/
"Humans Are Responsible for 99% of the Endangered Species.", /*2*/
"Extinction is a natural process in the wild. But the standard rate is about five species per year.  The current extinction rate is over 12 species a day, which means we’re losing far more animals than ever recorded throughout history.", /*3*/
"The Florida panther in the Everglades is a sight to see. Starting in the 1970s, it’s now one of many animals going extinct.", /*4*/
"Make your home a haven for wildlife. It can be as simple as building a birdhouse, cleaning your bird baths to stop the spread of infection, leaving out sugar water for bees, using as little water as possible, and keeping your pets indoors at night.", /*5*/
"Giant pandas are good swimmers and excellent tree climbers. At 5 months old, giant panda cubs learn how to climb - sometimes practicing by climbing on their mum.",/*6*/ 
"Panda's have an extended wrist bone that they use like a thumb to help them grip food. Giant pandas spend 10-16 hours a day feeding, mainly on bamboo.",/*7*/   
"Hawksbill turtles are named after their pointed beaks, which resemble those of birds.",/*8*/
"Sea turtles cannot breathe underwater, but they can hold their breath for long periods of time—between 4 to 7 hours when resting. While holding their breath, their heart rate slows significantly to conserve oxygen—up to nine minutes can pass between heartbeats.",/*9*/
 
];

var quote = document.getElementById("quote");
var myBtn = document.getElementById("myBtn");
var count = 0;

myBtn.addEventListener("click", displayQuote);

function displayQuote(){
  quote.innerHTML = quoteList[count];
  count++;
  if(count==quoteList.length){count=0;}
}
