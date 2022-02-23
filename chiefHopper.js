//Function to find a minimal value to have a positive output
function energyCount(botEnergy, heights){
  let newEnergy = undefined;
  //Loop to check if all numbers is positive
  for(let height of heights){
    if(botEnergy < height){
      newEnergy = botEnergy - (height - botEnergy);
    } else {
      newEnergy = botEnergy + (botEnergy - height );
    }
    botEnergy = newEnergy;
  }
  return botEnergy;
}
//function to find a midpoint in an array
function middlePoint(newArray,arr){
  let middle = newArray[(newArray.length)/2]; /*Get the middle value of the sorted array */
  let result = energyCount(middle, arr);
  if(result <= 0){ // if a result is negative a minimal value to start is a middle
    return middle;
  }else{ //if a positive result is found, test with half the size of the array
    result = energyCount((newArray.length)/2, arr)
    if(result < 0){ //if negative result return the half size of the array
      return (newArray.length)/2;
    }else{ //if positive return 0
      return 0;
    }
  }
}
function chiefHopper(arr) {
    const newArr = [...arr];
    let minimalEnergy = null;
    let botEnergy = null;
    newArr.sort(function(a,b){ // sort the array in ascending order
      return a-b;
    });
    let min = newArr[0];
    let max = newArr[newArr.length -1];
    //chain of ifs to reduce the number of loops estimating the initial value
    if((max === arr[0] && max !== min) || (arr.length > 1000 && max === min)){
      botEnergy = max;
    }else{
      if(newArr.length > 1000){
        botEnergy = middlePoint(newArr, arr);
      }else{
        botEnergy = Math.round(min*0.5);
      }
    }
    //loop to find a minimal value of botEnergy
    while(minimalEnergy === null){
      let result = energyCount(botEnergy, arr)
      if(result > -1 && (botEnergy < minimalEnergy || minimalEnergy === null)){
        minimalEnergy = botEnergy
      }
      botEnergy++;
    }
    return minimalEnergy;
}
const arr1 = [1401,2019,1748,3785,3236,3177,3443,3772,2138,1049,353,908,310,2388,1322,88,2160,2783,435,2248,1471,706,2468,2319,3156,3506,2794,1999,1983,2519,2597,3735,537,344,3519,3772,3872,2961,3895,2010,10,247,3269,671,2986,942,758,1146,77,1545,3745,1547,2250,2565,217,1406,2070,3010,3404,404,1528,2352,138,2065,3047,3656,2188,2919,2616,2083,1280,2977,2681,548,4000,1667,1489,1109,3164,1565,2653,3260,3463,903,1824,3679,2308,245,2689,2063,648,568,766,785,2984,3812,440,1172,2730]
const arr2 = [477,1931,3738,3921,2306,1823,3328,2057,661,3993,2967,3520,171,1739,1525,1817,209,3475,1902,2666,518,3283,3412,3040,3383,2331,1147,1460,1452,1800,1327,2280,82,1416,2200,2388,3238,1879,796,250,1872,114,121,2042,1853,1645,211,2061,1472,2464,726,1989,1746,489,1380,1128,2819,2527,2939,622,678,265,2902,1111,2032,1453,3850,1621];
const arr3 = [4, 4]
const TA = [arr1,arr2, arr3];
for(let arr of TA){
  console.log(chiefHopper(arr))
}
