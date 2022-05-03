const daysElement = document.getElementById("factfun");

async function newfact(){
    const quote = await fetch('https://api.aakhilv.me/fun/facts?num=1');
    const quoteresult = await response.json();

    console.log(quote.quoteresult);
    const newquote = quote.quoteresult[1];
}

newfact();
