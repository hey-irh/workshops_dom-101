


let englishNumbers = ["one", "two", "three", "four", "five"];



//task 3

let index=0;

while (index < englishNumbers.length){
    console.log(englishNumbers[index]) +index;
    index++
}

//task 4

for (let index = 0; index < englishNumbers.length; index++) {
    console.log(englishNumbers[index]);
}

// task 5 Use a for loop to iterate over the words array and add the letter t to the end of each word.

let words = ["ben", "ha", "spla", "fa", "ca", "dra"];
for (let index = 0; index < words.length; index++) {
    words[index] = words[index] + "t";
}
console.log(words);
