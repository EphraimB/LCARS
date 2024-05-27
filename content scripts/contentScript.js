const siteHeader = document.querySelector("header");
const mainNavigation = document.querySelector("nav");
const navItems = mainNavigation.children;

const createNavItemContainer = () => {
  const navItemContainer = document.createElement("div");
  navItemContainer.classList.add("navBlock");
  return navItemContainer;
};

const navItemContainers = Array.from({ length: 4 }, createNavItemContainer);

navItemContainers.forEach((container, index) => {
  container.appendChild(navItems[0].children[index]);
  mainNavigation.appendChild(container);
});

const topBlock = document.createElement("div");
topBlock.classList.add("block");
topBlock.id = "topBlock";

const topRightEndBlock = document.createElement("div");
topRightEndBlock.classList.add("endBlock");
topRightEndBlock.id = "topRightEndBlock";

const topLeftCornerBlock = document.createElement("div");
topLeftCornerBlock.id = "topLeftCornerBlock";

const topLeftCornerBlockTwo = document.createElement("div");
topLeftCornerBlockTwo.id = "topLeftCornerBlockTwo";

siteHeader.appendChild(topBlock);
siteHeader.appendChild(topRightEndBlock);
siteHeader.appendChild(topLeftCornerBlock);
siteHeader.appendChild(topLeftCornerBlockTwo);
