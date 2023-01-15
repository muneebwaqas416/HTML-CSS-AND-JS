function hello(name){
    if(name!=null && name!==""){
    return 'Hello ' + name + ' Welcome';
    }else{
        return 'You didnt give your name';
    }
}

function hospitality(name , arr){
    var nam = hello(name);
    console.log(nam);
    for(var i=0 ; i<arr.length ; i++){
        console.log(name + ' Would you like ' + arr[i]);
    }
}

var arr =['Burger','Pizza','Shawarma','Pasta','Donuts'];
var nam = prompt('Enter your name');
hospitality(nam , arr);