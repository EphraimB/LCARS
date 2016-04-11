var header = document.getElementsByTagName("header")[0];
var headerText = header.children;

var nav = document.getElementsByTagName("nav")[0];
var navText = nav.children;

var navBlockOne = document.createElement("div");
navBlockOne.setAttribute("class", "navBlock");
navBlockOne.setAttribute("id", "navBlockOne");

var navBlockTwo = document.createElement("div");
navBlockTwo.setAttribute("class", "navBlock");
navBlockTwo.setAttribute("id", "navBlockTwo");

var navBlockThree = document.createElement("div");
navBlockThree.setAttribute("class", "navBlock");
navBlockThree.setAttribute("id", "navBlockThree");

var navBlockFour = document.createElement("div");
navBlockFour.setAttribute("class", "navBlock");
navBlockFour.setAttribute("id", "navBlockFour");

for(var i = 0; i < headerText.length; i++)
{
    headerText[i].setAttribute("class", "headerText");
}

var topBlock = document.createElement("div");
topBlock.setAttribute("class", "block");
topBlock.setAttribute("id", "topBlock");

var topRightEndBlock = document.createElement("div");
topRightEndBlock.setAttribute("class", "endBlock");
topRightEndBlock.setAttribute("id", "topRightEndBlock");

var topLeftCornerBlock = document.createElement("div");
topLeftCornerBlock.setAttribute("id", "topLeftCornerBlock");

var topLeftCornerBlockTwo = document.createElement("div");
topLeftCornerBlockTwo.setAttribute("id", "topLeftCornerBlockTwo");

header.appendChild(topBlock);
header.appendChild(topRightEndBlock);
header.appendChild(topLeftCornerBlock);
header.appendChild(topLeftCornerBlockTwo);

nav.appendChild(navBlockOne);
nav.appendChild(navBlockTwo);
nav.appendChild(navBlockThree);
nav.appendChild(navBlockFour);

navBlockOne.appendChild(navText[0].children[0]);
navBlockTwo.appendChild(navText[0].children[0]);
navBlockThree.appendChild(navText[0].children[0]);
navBlockFour.appendChild(navText[0].children[0]);