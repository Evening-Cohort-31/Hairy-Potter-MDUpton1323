const toSell = [];

export const toSellOrNotToSell = (potteryObject) => {
  if (potteryObject.cracked) {
    return potteryObject;
  }

  if (potteryObject.weight >= 6) {
    potteryObject.price = 40;
  } else {
    potteryObject.price = 20;
  }

  toSell.push(potteryObject);

  return potteryObject;
};

export const usePottery = () => {
  return toSell.slice();
};
