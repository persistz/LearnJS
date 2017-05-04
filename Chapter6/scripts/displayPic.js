/**
 * Created by George on 2017/4/12.
 */
function addLoadEvent(func) {//addLoadEvent方法
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {//第一次加载执行
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

function showPic(whichpic) {
    var pic = document.getElementById("placeholder");
    pic.setAttribute("src", whichpic.href);
    var description = document.getElementById('description');
    document.getElementById('description').childNodes[0].nodeValue = whichpic.title;
    return true;
}

function displayImage() {
    if (!document.getElementsByTagName || !document.getElementById) return false;
    var find_class = document.getElementById("image gallery").getElementsByTagName("a");
    for (var i = 0; i < find_class.length; i++) {
        find_class[i].onclick = function () {
            return !showPic(this);
        }
    }
}

addLoadEvent(displayImage);