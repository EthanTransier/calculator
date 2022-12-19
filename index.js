var equationString = "";
function findNumber(number){
    
    equationString = equationString + number;
    console.log(equationString);
    document.getElementById("equationContainerID").innerHTML = equationString;
}
var finalEquation = "";
function calculateEquation(){
    console.log(eval(equationString))
    document.getElementById("equationContainerID").innerHTML = eval(equationString);
    equationString = '';
    finalEquation = "";
}

function resetEquation(){
    equationString = '';
    finalEquation = "";
    document.getElementById("equationContainerID").innerHTML = '';
}