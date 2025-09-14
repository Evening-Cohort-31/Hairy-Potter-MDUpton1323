export const firePottery = (potteryObject, temp) => {
  potteryObject.fired = true;

  if (temp > 2200) {
    potteryObject.cracked = true;
  } else {
    potteryObject.cracked = false;
  }

  return potteryObject;
};
