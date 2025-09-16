// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./kiln.js";
import { toSellOrNotToSell } from "./potteryCatalog.js";
import { potteryList } from "./potteryList.js";

console.log("Scripts loaded successfully");

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 2, 6);
let vase = makePottery("Vase", 4, 12);
let bowl = makePottery("Bowl", 8, 5);
let plate = makePottery("Plate", 3, 2);
let pitcher = makePottery("Pitcher", 7, 10);

console.log("Pottery made:", mug, vase, bowl, plate, pitcher);
// Fire each piece of pottery in the kiln
mug = firePottery(mug, 2000);
vase = firePottery(vase, 2100);
bowl = firePottery(bowl, 2300);
plate = firePottery(plate, 1900);
pitcher = firePottery(pitcher, 2250);

console.log("Pottery fired:", mug, vase, bowl, plate, pitcher);

// Determine which ones should be sold, and their price
mug = toSellOrNotToSell(mug);
vase = toSellOrNotToSell(vase);
bowl = toSellOrNotToSell(bowl);
plate = toSellOrNotToSell(plate);
pitcher = toSellOrNotToSell(pitcher);

console.log("Pottery cataloged", mug, vase, bowl, plate, pitcher);

// Invoke the component function that renders the HTML list
const potteryHTML = potteryList();

console.log("Generated HTML:", potteryHTML);

document.querySelector(".potteryList").innerHTML = potteryHTML;

console.log("HTML should be inserted now");
