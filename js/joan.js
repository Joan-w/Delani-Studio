var input="letter1";
var g=parseInt(input.length-1);
if (isNaN (g)){
    return parseInt(input)+1;
}else {
    var h=parseInt(input[input.length-1])+1;
    var w=splice(input.length-1,1,h);
    alert(w);}