// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./kiln.js";
import { toSellOrNotToSell } from "./potteryCatalog.js";
import { potteryList } from "./potteryList.js";

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 2, 6);
let vase = makePottery("Vase", 4, 12);
let bowl = makePottery("Bowl", 8, 5);
let plate = makePottery("Plate", 3, 2);
let pitcher = makePottery("Pitcher", 7, 10);

// Fire each piece of pottery in the kiln
mug = firePottery(mug, 2000);
vase = firePottery(vase, 2100);
bowl = firePottery(bowl, 2300);
plate = firePottery(plate, 1900);
pitcher = firePottery(pitcher, 2250);

// Determine which ones should be sold, and their price
mug = toSellOrNotToSell(mug);
vase = toSellOrNotToSell(vase);
bowl = toSellOrNotToSell(bowl);
plate = toSellOrNotToSell(plate);
pitcher = toSellOrNotToSell(pitcher);

// Invoke the component function that renders the HTML list
const potteryHTML = potteryList();
document.querySelector(".potteryList").innerHTML = potteryHTML;

// Explain how you got the HTML, with the correct data, displayed in the browser?
//From the code provided for potteryList from the guide given to us for this project. I was able to take the code and add in string interpolation to declare the pottery id with pottery.id and so on with the others. I also noticed that the index.html was missing the article element needed to declare the potteryList or pottery catalog. Also I was able to import the code from potteryCatalog which helped with getting the HTML.

// In the PotteryList module, when you iterate your pottery, you need to show the evidence of what the weight property's value is for the 2nd piece of pottery. Use Loom to record your browser window with the developer tools open and show those values.
//loom.com/share/2a4944e03284487ea1aeeba728dccda6

// The PotteryWheel module has a single function named makePottery. Why doesn't that module have all of the other code in it?
//The module is only exporting code for one, but it is to create pottery that's it. Plus it stops the chance to affect other modules by limited amount of code.

// The pottery shop has learned that there is a set of customers that are willing to buy cracked pottery at a discounted price of $2.50. That means that the cracked pottery should now be displayed in the catalog. Explain the changes that this new business strategy would cause to your algorithm.
//It would affect multiple things in my code, I would have to add new variables that are looking for pottery that is cracked to be sold for $2.50 and if the pottery was not cracked it would sell at full price.

// In the Kiln module, you have a firePottery() function. You need to demonstrate how to use the debugger to verify the values of the parameters for that function when your code runs. Use Loom to record your browser window with the developer tools open and show those values.
//loom.com/share/c68eec8b88df4006834a8b77839e50db
