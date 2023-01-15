var str = "I am really hungry for some";
var part = str.search('really');
if(part!==-1){
    var substr_1 = str.substring(part,part+6);
    var replace = substr_1.toLocaleUpperCase();
    str = str.replace('really' , replace);
    var foods = ['Wrap','Fish','bbq','Naan'];
    var strrr = `${str} ${foods[0]}`;

    console.log(strrr);
    // for(var i=0 ; i<foods.length ; i++){
    //     console.log(`${str} ${foods[i]}`);
    // }
    // for(var i of foods){
    //     console.log(`${str} ${i}`);
    // }
    for(var i=0 ; i<foods.length ; i++){
        if(i%2===0){
            console.log(`${str} ${foods[i].toLocaleUpperCase()}`);
        }else{
            console.log(`${str} ${foods[i].toLocaleLowerCase()}`);
        }
    }
}else{
    console.log("Not found");
}
