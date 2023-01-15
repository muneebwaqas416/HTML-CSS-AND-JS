var x = prompt("Enter the Cahracter");
var value = x.charCodeAt(0);
if(value>=65 && value<=97){
    console.log("Uperr Case");
}else if(value>=97 && value<=122){
    console.log("lower Case");
}else if(value>=48 && value<=57){
    console.log("Digit");
}else{
    if(x<129){
        console.log("Special character")
    }else{
        console.log("Not an ASCII");
    }
}