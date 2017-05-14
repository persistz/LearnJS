/**
 * Created by George on 2017/5/8.
 */
function displayCitations() {
    var quotes = document.getElementsByTagName('blockquote');
    for (var i=0; i<quotes.length; i++) {
        if(!quotes[i].getAttribute('cite')) continue;
        var url = quotes[i].getAttribute('cite');
        var quotechild = quotes[i].getElementsByTagName('*');
        if(quotechild.length < 1) continue;
        var elem = quotechild[quotechild.length-1];

        var link = document.createElement('a');
        var link_text = document.createTextNode('source');
        link.appendChild(link_text);
        link.setAttribute('href', url);

        var superscript = document.createElement('sup');
        superscript.appendChild(link);

        elem.appendChild(superscript);
    }
}

addLoadEvent(displayCitations);