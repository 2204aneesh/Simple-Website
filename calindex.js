const disp =  document.getElementById("disp");

function dispBut(input){
    disp.value += input;
}
function clearDisp(){
    disp.value = '';
}
function calculate(){
    disp.value = eval(disp.value);
}