/**
 * Created by George on 2017/5/15.
 */
function stripeTables() {
    if (!document.getElementsByTagName) return false;
    var odd = false;
    var table = document.getElementsByTagName('table');
    for(var i=0; i<table.length; i++) {
        var rows = table[i].getElementsByTagName('tr');
        for (var j = 0; j < rows.length; j++) {
            if (odd === false) {
                table[i].rows[j].style.backgroundColor = '#ffc';
                odd = true;
            }
            else {
                odd = false;
            }
        }
    }
}

addLoadEvent(stripeTables);