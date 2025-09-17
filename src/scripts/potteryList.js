import { usePottery } from "./potteryCatalog.js";

// Export a function to generate the HTML for the pottery catalog.
export const potteryList = () => {
  const potteryToSell = usePottery();
  let potteryHTML = "";

  for (const pottery of potteryToSell) {
    potteryHTML += `
            <section class="pottery" id="pottery--${pottery.id}">
                <h2 class="pottery__shape">${pottery.shape}</h2>
                <div class="pottery__properties">
                    Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
                </div>
                <div class="pottery__price">Price is $${pottery.price}</div>
            </section>
        `;
  }

  return potteryHTML;
};
