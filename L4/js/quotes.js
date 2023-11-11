const quotes =[
{
    quote: "큰 목표를 이루고 싶으면 허락을 구하지 마라.",
    author: "unknown",
},{
    quote: "상황을 가장 잘 활용하는 사람이 가장 좋은 상황을 맞는다.",
    author: "존 우든",
},{
    quote: "창조적인 삶을 살려면 내가 틀릴지도 모른다는 공포를 버려야 한다.",
    author: "unknown",
},{
    quote: "일반적인 것을 잃을 위험을 감수하지 않으면 평범한 것에 만족해야 한다.",
    author: "짐 론",
},{
    quote: "신뢰의 이유는 안전하거나 확실해서가 아니라, 위험을 감수할 용의가 있어서이다.",
    author: "unknown",
},{
    quote: "한 가지 생각을 선택하라. 그 생각을 당신의 삶으로 만들어라. 그걸 생각하고, 꿈꾸고, 그에 기반해서 살아가라. 당신의 몸의 모든 부분, 뇌, 근육, 신경을 그 생각으로 가득 채우고 다른 생각은 다 내버려둬라. 이것이 성공하는 방법이다.",
    author: "스와미 비베카난다",
},{
    quote: "추구할 수 있는 용기가 있다면 우리의 모든 꿈은 이뤄질 수 있다.",
    author: "월트 디즈니",
},{
    quote: "기다리는 사람에게 좋은 일이 생기지만, 찾아나서는 사람에게는 더 좋은 일이 생긴다. ",
    author: "unknown",
},{
    quote: "늘 하던 대로 하면 늘 얻던 것을 얻는다. ",
    author: "unknown",
},{
    quote: "열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.",
    author: "윈스턴 처칠",
},
];

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;