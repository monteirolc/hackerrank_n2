function alternate(s) {
  let letters = [];
  let pairLetters = [];
  let tested = false;
  let myArray = [];
  var output = -1;
  //find a unique letters in my array
  for(let letter of s.split('')){
    for(let addLetter of letters){
      if(letter === addLetter) tested = true;//exclude repeated letters
    }
      if(tested === false) letters.push(letter) // add unique letters
      tested = false; // reset tested
  }
  letters = letters.sort() // [a-z] sort letters
  //making a pair of letters
  for(let index0 in letters){
    for(let index in letters){
      if(index0 !== index && index0 < index){
        pairLetters.push([letters[index0], letters[index]]) // add all possible pairs of letters
      }
    }
  }
  letters = []
  //making the possible pairs string
  for(let pair of pairLetters){ //pair of letters to verification
      for(let letter of s.split('')){ // received string to find a output string
        if(letter === pair[0] || letter === pair[1]){
          letters.push(letter) //add unique letters
        }
      }
    myArray.push(letters) //formation of letter arrays
    letters = [] //reset letters
  }
  //Last loop of verification
  for(let a=0; a < myArray.length ; a++){
    let array = myArray[a] // Change to one array at time
    for(let i=0; i <= array.length ; i++){
      if(array[i] === array[i+1] && array[i] !== undefined){ //Verify repeat letters
        tested = true
      }
    }
    if(tested === false && output < myArray[a].length){ //Change the check to the maximum valid value
      output = myArray[a].length;
    }
    tested = false
  }

  //Check for valid outputs only
  if( output < 0 ){
    return 0;
  }else{
    return output;
  }
}

console.log(alternate([10,"asvkugfiugsalddlasguifgukvsa"]))
