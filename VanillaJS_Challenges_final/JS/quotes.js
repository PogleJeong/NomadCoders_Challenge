const quoteList = {
    author: 
    ["Joseph Addison",
    "Confucius",
    "Mahatma Gandhi",
    'Ernesto "Che" Guevara',
    "Bill Nye"
    ],
    quote: ["인간은 웃음이라는 능력을 가졌기에 다른 동물과 구별된다.",
    "가장 위대한 영광은 한 번도 실패하지 않음이 아니라 실패할 때마다 다시 일어서는 데에 있다.",
    "미래는 현재 우리가 무엇을 하는가에 달려 있다.",
    "언가를 위해 목숨을 버릴 각오가 되어 있지 않는 한 그것이 삶의 목표라는 어떤 확신도 가질 수 없다.",
    "세상에 대해 더 많이 알면 알수록 세상을 조소할 일이 많아진다"]
}

const randomQuote = Math.floor(Math.random()*5);
const inputQuote = document.querySelector("#quoteBox p:first-child");
const inputAuthor = document.querySelector("#quoteBox p:last-child");
inputQuote.innerText = quoteList.quote[randomQuote];
inputAuthor.innerText = quoteList.author[randomQuote];