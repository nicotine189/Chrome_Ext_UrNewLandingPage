// document. getElementById("searchButton" ).addEventListener(
//     "click", function(){
//     const query = document.getElementById("searchBox").value;
//     const searchEngine = document.getElementById("searchEngine").value;
//     if(query)
//     {
        
//         const googleSearchUrl = `https://www.google.com/search?q=
//         ${ encodeURIComponent(query) }` ; 
//         chrome.tabs.create({ url: googleSearchUrl});
        
        
//         const searchEngineUrl = `https://www.google.com/search?q=
//         ${ encodeURIComponent(query) }` ; 
//         chrome.tabs.create({ url: searchEngineUrl});
//     }
// } ) ;

// document. getElementById("wikipediaSearch" ).addEventListener(
//     "click", function(){
//     const query = document.getElementById("searchBox").value;
//     if(query)
//     {
//         const wikipediaSearchUrl = `http://fr.wikipedia.org/wiki/
//         Special:Search?search=${ encodeURIComponent(query) } ` ; 
//         chrome.tabs.create({ url: wikipediaSearchUrl});
//     }
// } ) ;

// document. getElementById("BingSearch" ).addEventListener(
//     "click", function(){
//     const query = document.getElementById("searchBox").value;
//     if(query)
//     {
//         const bingSearchUrl = `https://www.bing.com/search?q=
//         ${ encodeURIComponent(query) } ` ; 
//         chrome.tabs.create({ url: bingSearchUrl});
//     }
// } ) ;

// document. getElementById("googleNews" ).addEventListener(
//     "click", function(){
//     const query = document.getElementById("searchBox").value;
//     if(query)
//     {
//         const googlenewsUrl = `http://news.google.com/search?q=
//         ${ encodeURIComponent(query) } ` ; 
//         chrome.tabs.create({ url: googlenewsUrl});
//     }
// } ) ;

document.getElementById("searchButton").addEventListener("click", function () {
    const query = document.getElementById("searchBox").value;
    const searchEngine = document.getElementById("searchEngine").value;

    if (query) {
        let searchUrl;

        switch (searchEngine) {
            case "google":
                searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
                break;
            case "wikipedia":
                searchUrl = `http://fr.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(query)}`;
                break;
            case "bing":
                searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
                break;
            case "google-news":
                searchUrl = `http://news.google.com/search?q=${encodeURIComponent(query)}`;
                break;
            default:
                searchUrl = ""; 
                break;
        }

        if (searchUrl) {
            chrome.tabs.create({ url: searchUrl });
        }
    }
});



