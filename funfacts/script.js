const apiurl = "https://uselessfacts.jsph.pl/random.json";
const factel = document.getElementById("funfact");


async function newfact() {
    const quote = await fetch(apiurl);
    const resultdata = await quote.json();
    console.log(resultdata)
    return resultdata;
}

function displayFact (data){
    const text = resultdata.text[0];
    const textDiv = document.
}

newfact();