/* Copyright Kieran Coughlan 2013 */

var USsportQuotes = []
USsportQuotes[0] = "...and would you believe it?";
USsportQuotes[1] = " Danger here!";
USsportQuotes[2] = " Bringing up the rear is Norfolk Enchance.";
USsportQuotes[3] = " He's out the champion is down and out.";
USsportQuotes[4] = " Wonderful!";
USsportQuotes[5] = " Woof thats a howler is that.";
USsportQuotes[6] = " Take a bow son...take a bow.";
USsportQuotes[7] = " As they enter the final rounds it's still anybodys title.";
USsportQuotes[8] = " Maradona....Maradona....still Maradona...goal!..different class.";
USsportQuotes[9] = " They're neck and neck turning the final bend.";
USsportQuotes[10] = "..and Batman is flying.";
USsportQuotes[11] = " Giggs opens his legs and shows his class...majestic.";
USsportQuotes[12] = " AND THEY'RE OFF!";
USsportQuotes[13] = " Surely there is no way back now.";
USsportQuotes[14] = " The trouble with Arsenal is they always try and walk it in!";
USsportQuotes[15] = " What was he thinking!";
USsportQuotes[16] = " The Fly-half sends the Garryowen high into the D4 sky";
USsportQuotes[17] = " Chalk dust!! There was chalk dust man!!";
USsportQuotes[18] = " The symbol of peace, the pigeon!";
USsportQuotes[19] = " Abel Xavier looks like a negative of a photo of Matthew Kelly.";
USsportQuotes[20] = " And Bonner has gone 165 minutes of these championships without conceding a goal. Oh danger here...";
USsportQuotes[21] = " Oh noooooooo! Disaster!";
USsportQuotes[22] = " Real Madrid are like a rabbit in the glare of the headlights in the face of Manchester United's attacks. But this rabbit comes with a suit of armour in the shape of two precious away goals.";
USsportQuotes[23] = " The Baggio brothers, of course, are not related.";
USsportQuotes[24] = " Here's Ronaldo, we've almost seen him score one tonight...ooooh! Close but no banana";
USsportQuotes[25] = " There's been a penalty awarded at Old Trafford — I don't think you need me to tell you which way it's gone.";
USsportQuotes[26] = " It's survival of the fittest now here in the closing minutes.";
USsportQuotes[27] = " The good news for Paraguay is that they've gone two-nil down so early on.";
USsportQuotes[28] = " It was like two drunks in a back alley throwing punches at each other.";
USsportQuotes[29] = " He's a gentleman. He's a class act. He's a rebel. And he stands up to bullies.";
USsportQuotes[30] = " Ardiles strokes the ball like it was a part of his anatomy.";
USsportQuotes[31] = " He's not the type of guy you want to be walking into a disco with. Bring back Dowie!";
USsportQuotes[32] = " A magic pass... into that corridor of uncertainty.";
USsportQuotes[33] = " The lad got over-excited when he saw the whites of the goalpost's eyes.";
USsportQuotes[34] = " I never make predictions and I never will.";
USsportQuotes[35] = " For those of you watching in black and white, Spurs are in the all-yellow strip.";


var USoutput = document.querySelector("#USoutput");
USoutput.style.cursor = "crosshair";
var USuserGuide = document.getElementById("USipsumGuide");
var button = document.getElementById("USmore");
button.style.cursor = "pointer";
button.addEventListener("click", buttonHandler, false);
var button2 = document.getElementById("USless");
button2.style.cursor = "pointer";
button2.addEventListener("click", button2Handler, false);
var button3 = document.getElementById("USpara");
button3.style.cursor = "pointer";
button3.addEventListener("click", button3Handler, false);
var button4 = document.getElementById("clear");
button4.style.cursor = "pointer";
button4.addEventListener("click", button4Handler, false);



var USipsumTotal = [];
var USmaxIpsum = 40;
var USclearIpsum = 0;

function buttonHandler()
{		
var randomQuote = Math.floor(Math.random() * 36);
var USsportyIpsum = USsportQuotes[randomQuote];
if (USipsumTotal.length < USmaxIpsum) {
USipsumTotal.push(USsportyIpsum);	
USipsumTotal.toString();
USoutput.innerHTML = USipsumTotal;
}
else {
USuserGuide.innerHTML = "You have reached the max amount of ipsum, hit less or delete if you want to change output"
}
}


function button2Handler()
{
USuserGuide.innerHTML = '';	
USipsumTotal.pop();
USoutput.innerHTML = USipsumTotal;
}

function button3Handler()
{
for (var i = ipsumTotal.length; i < maxIpsum; i++) {		
var randomQuote = Math.floor(Math.random() * 36);
var USsportyIpsum = USsportQuotes[randomQuote];
USipsumTotal.push(USsportyIpsum);
USipsumTotal.toString();
USoutput.innerHTML = USipsumTotal;
}}

function button4Handler()
{
USuserGuide.innerHTML = '';		
if (USipsumTotal.length > USclearIpsum) {
USipsumTotal.length = 0;
USoutput.innerHTML = USipsumTotal;
}}

