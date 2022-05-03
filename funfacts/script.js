const apiurl = "https://uselessfacts.jsph.pl/random.json";
const factel = document.getElementById("funfact");


async function newfact() {
    const quote = await fetch(apiurl);
    const resultdata = await quote.json();

    console.log(resultdata.text);
    console.log(resultdata.id);
    console.log(resultdata.source_url);
    console.log(resultdata.permalink);
    console.log(resultdata.language);

    return resultdata;
}

newfact();