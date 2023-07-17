const text = " I a Akshay Shinde kar akshay shinde kar";
//code For countwords

function countwords(text){
    const words = text.toLowerCase().split(" ");
    const wordCount = new Map();

    for (const word of words){
        const count = wordCount.get(word) || 0;
        wordCount.set(word, count + 1);
    }
    return wordCount;
}

const wordCount = countwords(text);

console.log(wordCount);