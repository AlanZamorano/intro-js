const findWord = (word, phrase) => {
word = word.toLowerCase();
phrase = word.toLowerCase();
if(phrase.indexOf(word) != -1){
    return true;
}
else{
    return false;
}
}
var userInput = findWord("Hola mundo", "MUNDO");
console.log(userInput);