function stockPairs(stocksProfit, target) {

    const pairs = [];
    stocksProfit.forEach((profit1, idx1) => {
    
    stocksProfit.forEach((profit2, idx2) => {
    
    if (idx1 === idx2) return;
    
    if (profit1 + profit2 === target) {
    pairs.push([profit1, profit2]);
    }
    
    });
    
    });
    
    
    const totalPairs = pairs.map(pair => {
    return [...pair].sort().join('')
    });
    
    
    const distinctPairs = new Set(totalPairs);
    console.log(distinctPairs);
    return distinctPairs.size;
    }
    
    stockPairs( [5,7,9,13,11,6,6,3,3], 12);
   