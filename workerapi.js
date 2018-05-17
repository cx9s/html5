/**
 * Created by xuanchen on 18/5/17.
 */
var i = 0;
function count() {
    i = i + 1;
    postMessage(i);
    setTimeout("count()", 1000);
}
count();
