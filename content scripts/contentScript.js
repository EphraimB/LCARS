var header = document.getElementsByTagName("header")[0];
var headerText = header.children;

var nav = document.getElementsByTagName("nav")[0];
var navText = nav.children;

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