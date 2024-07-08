let userFlavors = prompt(`What flavors do you want your scoops to be?`, `vanilla,vanilla,vanilla,strawberry,coffee,coffee`)
// console.log(`userflavors:`, userFlavors);

// let's split up the string into multiple to get the total count of flavors
const flavorList = userFlavors.split(`,`);
// console.log(`flavorList:`,flavorList);

const flavorCounter = (flavorList) => {
  const froyo = {};
  for(let i=0; i<flavorList.length;i++){
    let flavor = flavorList[i];
    if(froyo[flavor]){
      froyo[flavor] += 1
    } else {
      froyo[flavor] = 1
    }
  }
return froyo;
}
// console.log(flavorList)
// console.log(froyo)
const flavorString = JSON.stringify(flavorCounter(flavorList))
console.log(`You have chosen ${flavorList.length} Scoop(s)\n ${flavorString}`)
