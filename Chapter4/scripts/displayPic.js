/**
 * Created by George on 2017/4/12.
 */
function showPic(whichpic) {
    var pic = document.getElementById("placeholder");
    pic.setAttribute("src", whichpic.href);
    var description = document.getElementById('description');
    var text = whichpic.title;
    document.getElementById('description').childNodes[0].nodeValue = text;
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
}

// childNodes 测试语句
// window.onload(countBodyChildren());