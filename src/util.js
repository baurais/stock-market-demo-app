export const timeStamp = () => {
  return new Date().toISOString();
}

export const sortDatabyTimeStamp = (a,b) => {
  const dateA = new Date(a.timeStamp).getTime();
  const dateB = new Date(b.timeStamp).getTime();

  return dateA > dateB ? 1 : -1;
};

export const getRecentTrade = (tradeItems) => {
  return tradeItems.sort(sortDatabyTimeStamp).reverse()[0]
}

export const getDividendYield = (tradeItems) => {
  const recentTrade = tradeItems.sort(sortDatabyTimeStamp).reverse()[0];

  return recentTrade.lastDividend/recentTrade.price;
}

export const getPERatio = (tradeItems) => {
  const recentTrade = tradeItems.sort(sortDatabyTimeStamp).reverse()[0];

  return recentTrade.price/recentTrade.lastDividend;
}

export const getGeometricMean = (tradeItems) => {
  const recentTrade = tradeItems.sort(sortDatabyTimeStamp).reverse()[0];

  return Math.sqrt(recentTrade.price);
}
