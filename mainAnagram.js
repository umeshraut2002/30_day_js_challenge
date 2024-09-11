
const ana = ["eat","tea","tan","ate","nat","bat"];

const anagram = {};

ana.forEach(word => {
    console.log("I am Word: ",word);
    
    let sortWord = word.split('').sort().join('');

    console.log(word.split('').sort().join(''));
    

    if(anagram[sortWord]){
        console.log("iF: ",anagram[sortWord].push(word));
    }

    else {
        console.log("Else: ",anagram[sortWord] = [word])
    }
})

console.log(Object.values(anagram));
// console.log(result);
