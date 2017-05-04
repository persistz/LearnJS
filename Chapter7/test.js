/**
 * Created by george on 2017/4/19.
 */
function insertParagraph(text) {
    var str = '<p>';
    str += text;
    str += '</p>';
    document.write(str);
}

insertParagraph('This is insert by external js.')