const smartGarbage = function (trash, bins) {
  switch (trash){
    case 'waste':
      bins.waste++;
      return bins;
    case 'recycling':
      bins.recycling++;
      return bins;
    case 'compost':
      bins.compost++;
      return bins;
  }
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));