const apiurl = "https://uselessfacts.jsph.pl/random.json";
const factel = document.getElementById("funfact");


async function newfact() {
    const quote = await fetch(apiurl);
    const resultdata = await quote.json();
    console.log(resultdata)
    return resultdata;
}

function displayFact (resultdata){
    const text = resultdata.text[0];
}

newfact();