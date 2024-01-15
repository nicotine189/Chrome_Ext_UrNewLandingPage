document. getElementById("googleSearch" ).addEventListener(
    "click", function(){
    const query = document.getElementById("searchBox").value;
    if(query)
    {
        const googleSearchUrl = `https://www.google.com/search?q=
        ${ encodeURIComponent(query) }` ; 
        chrome.tabs.create({ url: googleSearchUrl});
    }
} ) ;

document. getElementById("wikipediaSearch" ).addEventListener(
    "click", function(){
    const query = document.getElementById("searchBox").value;
    if(query)
    {
        const wikipediaSearchUrl = `http://fr.wikipedia.org/wiki/
        Special:Search?search=${ encodeURIComponent(query) } ` ; 
        chrome.tabs.create({ url: wikipediaSearchUrl});
    }
} ) ;

document. getElementById("BingSearch" ).addEventListener(
    "click", function(){
    const query = document.getElementById("searchBox").value;
    if(query)
    {
        const bingSearchUrl = `https://www.bing.com/search?q=
        ${ encodeURIComponent(query) } ` ; 
        chrome.tabs.create({ url: bingSearchUrl});
    }
} ) ;

document. getElementById("googleNews" ).addEventListener(
    "click", function(){
    const query = document.getElementById("searchBox").value;
    if(query)
    {
        const googlenewsUrl = `http://news.google.com/search?q=
        ${ encodeURIComponent(query) } ` ; 
        chrome.tabs.create({ url: googlenewsUrl});
    }
} ) ;





