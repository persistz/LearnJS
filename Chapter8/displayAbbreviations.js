/**
 * Created by George on 2017/5/6.
 */
function displayAbbreviations() {
    var abbreviations = document.getElementsByTagName('abbr');
    var abbrArray = new Array();
    for(var i=0; i<abbreviations.length; i++) {
        var definition = abbreviations[i].getAttribute('title');
        var abbreviation = abbreviations[i].lastChild.nodeValue;
        abbrArray[abbreviation] = definition;
    }

    var dlist = document.createElement('dl');
    for(abbreviation in abbrArray) {
        var dtitle = document.createElement('dt');
        var titleText = document.createTextNode(abbreviation);
        dtitle.appendChild(titleText);
        var ddesc = document.createElement('dd');
        var descText = document.createTextNode(abbrArray[abbreviation]);
        ddesc.appendChild(descText);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }

    var header = document.createElement('h2');
    var header_text = document.createTextNode('Abbreviations');
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);