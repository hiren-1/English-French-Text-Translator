var english = ["hello", "welcome", "yes", "girl", "boy", "no", "to", "the","for","on","are","they","have","this","from","hot","is","you","and","we","which","do","time","also","me","go","school","study","eat","book"];


var french = ["bonjour", "bienvenu", "oui", "fille", "garcon", "non", "au", "la","pour","sur","sont","	ils","avoir","ce","à partir de","chaud","est","vous","et","nous","qui","faire","temps","aussi","moi","aller","école","étude","manger","livre"];


// The function toEnglish is used to find the french equivalent of the word, this is done by splitting the words entered by the user with .split. The program then uses a for loop to go through every entry in the array to find a matching word and adds it to the end of the text, if no translation is found the original word is placed at the end. 



function toEnglish(t){
  
  words = t.split(" ");
  displayText = "";

  for (let i = 0; i < words.length; i++) {
  
    var index = search("english", words[i]);
  
  // "!==" means DOES NOT
  // https://www.w3schools.com/js/js_comparisons.asp

    if (index !== -1) {
      displayText = displayText  + " " + english[index];
  } 
    else {
      displayText = displayText + " " + words[i];
    }
  }

   //DISPLAYS THE TEXT ON SCREEN 

  text(displayText, 300, 300);
}

//Same function as above but flipped for french to english

function toFrench(t){
  
  words = t.split(" ");
  displayText = "";

  for (let i = 0; i < words.length; i++) {
    var index = search("french", words[i]);
    if (index !== -1) {
      displayText = displayText  + " " + french[index];
  } 
    else {
      displayText = displayText + " " + words[i];
    }
  }

    //DISPLAYS THE TEXT ON SCREEN 

  text(displayText, 300, 300);

}

//if the selected lanuage to translate to is english, search the entire array of french to see if the word entered is in the array and what the index is. Then we return the index (i).
function search(language, word){
  if (language === "english"){
    for (let i = 0; i <french.length; i++) {
      if (french[i] === word) {
        return i;
    } 
  }
}  
  else if (language == "french") {
    for (let i = 0; i <english.length; i++) {
      if (english[i] === word) {
        return i;
    } 
  }
}
  
  return -1;
}

// set the number of letters counted to zero, then using a for loop go through every letter in the text and add 1 to count. Then we return the count. 
function letterCount(text, letter){
  var count = 0;
  
  for (let i = 0; i < text.length; i++) {
    if (text[i] === letter) {
      count = count + 1; 
    }
  }
  
  return count;
}


//in this function we set the largest number to be the first one (a[0]), and the largest index as zero. Then we compare the array and if theres a number thats greater then the current largest number we swap them out, then once the for loop is finished we return the largest number and index. 
function getLargestIndex(a){
  var largest = a[0];
  var index = 0;
  
  for (let i = 0; i < a.length; i++) {
    if (a[i] >= largest) {
      largest = a[i];
      index = i;
    }
  }
  
  return index;
  }





// UNTOUCHED FROM HERE 




/* You will NOT need to edit any of the code below this point. You MAY if you want to. But it isn't necessary*/

var alphabet = "abcdefghijklmnopqrstuvwxyz"
var counts = [];

var displayText = "hello";



function setup(){
  /*don't touch these lines*/
  var cnv=createCanvas(500,300);
  cnv.style("display","block");
  cnv.style("margin","auto");
  /************************** */

}

function draw(){
  background("#ccddff")

  //Handles display the displayText to your screen.
  textAlign(CENTER,CENTER);
  text(displayText, 0,0, width-30, height-60);

  //displays the alphabet counts. 
  let alphaT = "";
  for(let i=0; i<alphabet.length; i++){
    counts[i] = letterCount(displayText, alphabet[i]);
    alphaT += `${alphabet[i]}:${counts[i]} `
  }

  //Displays the letter with the highest letter count
  text(alphaT, 15, height-60, width-30, 40 );
  var indexCommonLetter = getLargestIndex(counts);
  var commonLetter = alphabet[indexCommonLetter]
  text("the most common letter is " + commonLetter, 15, height-20, width-30, 20);
}

function button(language){
  /*do not touch this function*/
  var text = document.getElementById("text").value
  if(language==="English"){
    toEnglish(text);
  }
  else{
    toFrench(text);
  }
}