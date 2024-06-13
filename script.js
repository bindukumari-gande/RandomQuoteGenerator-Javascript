let quoteList=[
    {
        quote:"A rose by any other name would smell as sweet.",
        author:"William Shakespeare"
    },

    {
        quote:"Ask not what your country can do for you; ask what you can do for your country.",
        author:"John Kennedy"
    },

    {
        quote:"Ask, and it shall be given you; seek, and you shall find.",
        author:"the Bible"
    },

    {
        quote:"Frankly, my dear, I don't give a damn.",
        author:"Rhett Butler"
    },

    {
        quote:"Hell is other people.",
        author:"Jean-Paul Sartre"
    },

    {
        quote:"Here's looking at you, kid.",
        author:"Rick Blaine"
    },

    {
        quote:"Houston, we have a problem.",
        author:"Jim Lovell"
    },

    {
        quote:"I have always depended on the kindness of strangers.",
        author:"Blanche Dubois "
    }

]

let quoteele=document.getElementById("quote");
let  authorele=document.getElementById("author");

document.getElementById("getQuote").onclick=getLocalQuotes;

//document.getElementById("getQuote").onclick=quoteAPI;//for public ip of randome quotes

function getLocalQuotes(){
    let i=Math.floor(Math.random()*quoteList.length);
    quoteele.innerText=quoteList[i].quote;
    authorele.innerText= "--" + " " +quoteList[i].author;
}

async function quoteAPI(){
    let response=await fetch("https://api.quotable.io/random");
    let quote=await response.json()
    quoteele.innerText=quote.content;
    authorele.innerText="--"+" "+quote.author;
}