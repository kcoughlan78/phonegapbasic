/* Copyright Kieran Coughlan 2013 */

var sportQuotes = []
sportQuotes[0] = "...and would you believe it?";
sportQuotes[1] = " Danger here!";
sportQuotes[2] = " Bringing up the rear is Norfolk Enchance.";
sportQuotes[3] = " He's out the champion is down and out.";
sportQuotes[4] = " Wonderful!";
sportQuotes[5] = " Woof thats a howler is that.";
sportQuotes[6] = " Take a bow son...take a bow.";
sportQuotes[7] = " As they enter the final rounds it's still anybodys title.";
sportQuotes[8] = " Maradona....Maradona....still Maradona...goal!..different class.";
sportQuotes[9] = " They're neck and neck turning the final bend.";
sportQuotes[10] = "..and Batman is flying.";
sportQuotes[11] = " Giggs opens his legs and shows his class...majestic.";
sportQuotes[12] = " AND THEY'RE OFF!";
sportQuotes[13] = " Surely there is no way back now.";
sportQuotes[14] = " The trouble with Arsenal is they always try and walk it in!";
sportQuotes[15] = " What was he thinking!";
sportQuotes[16] = " The Fly-half sends the Garryowen high into the D4 sky";
sportQuotes[17] = " Chalk dust!! There was chalk dust man!!";
sportQuotes[18] = " The symbol of peace, the pigeon!";
sportQuotes[19] = " Abel Xavier looks like a negative of a photo of Matthew Kelly.";
sportQuotes[20] = " And Bonner has gone 165 minutes of these championships without conceding a goal. Oh danger here...";
sportQuotes[21] = " Oh noooooooo! Disaster!";
sportQuotes[22] = " Real Madrid are like a rabbit in the glare of the headlights in the face of Manchester United's attacks. But this rabbit comes with a suit of armour in the shape of two precious away goals.";
sportQuotes[23] = " The Baggio brothers, of course, are not related.";
sportQuotes[24] = " Here's Ronaldo, we've almost seen him score one tonight...ooooh! Close but no banana";
sportQuotes[25] = " There's been a penalty awarded at Old Trafford — I don't think you need me to tell you which way it's gone.";
sportQuotes[26] = " It's survival of the fittest now here in the closing minutes.";
sportQuotes[27] = " The good news for Paraguay is that they've gone two-nil down so early on.";
sportQuotes[28] = " It was like two drunks in a back alley throwing punches at each other.";
sportQuotes[29] = " He's a gentleman. He's a class act. He's a rebel. And he stands up to bullies.";
sportQuotes[30] = " Ardiles strokes the ball like it was a part of his anatomy.";
sportQuotes[31] = " He's not the type of guy you want to be walking into a disco with. Bring back Dowie!";
sportQuotes[32] = " A magic pass... into that corridor of uncertainty.";
sportQuotes[33] = " The lad got over-excited when he saw the whites of the goalpost's eyes.";
sportQuotes[34] = " I never make predictions and I never will.";
sportQuotes[35] = " For those of you watching in black and white, Spurs are in the all-yellow strip.";


var output = document.querySelector("#output");
output.style.cursor = "crosshair";
var userGuide = document.getElementById("ipsumGuide");
var button = document.getElementById("more");
button.style.cursor = "pointer";
button.addEventListener("click", buttonHandler, false);
var button2 = document.getElementById("less");
button2.style.cursor = "pointer";
button2.addEventListener("click", button2Handler, false);
var button3 = document.getElementById("para");
button3.style.cursor = "pointer";
button3.addEventListener("click", button3Handler, false);
var button4 = document.getElementById("clear");
button4.style.cursor = "pointer";
button4.addEventListener("click", button4Handler, false);



var ipsumTotal = [];
var maxIpsum = 40;
var clearIpsum = 0;

function buttonHandler()
{		
var randomQuote = Math.floor(Math.random() * 36);
var sportyIpsum = sportQuotes[randomQuote];
if (ipsumTotal.length < maxIpsum) {
ipsumTotal.push(sportyIpsum);	
ipsumTotal.toString();
output.innerHTML = ipsumTotal;
}
else {
userGuide.innerHTML = "You have reached the max amount of ipsum, hit less or delete if you want to change output"
}
}


function button2Handler()
{
userGuide.innerHTML = '';	
ipsumTotal.pop();
output.innerHTML = ipsumTotal;
}

function button3Handler()
{
for (var i = ipsumTotal.length; i < maxIpsum; i++) {		
var randomQuote = Math.floor(Math.random() * 36);
var sportyIpsum = sportQuotes[randomQuote];
ipsumTotal.push(sportyIpsum);
ipsumTotal.toString();
output.innerHTML = ipsumTotal;
}}

function button4Handler()
{
userGuide.innerHTML = '';		
if (ipsumTotal.length > clearIpsum) {
ipsumTotal.length = 0;
output.innerHTML = ipsumTotal;
}}

