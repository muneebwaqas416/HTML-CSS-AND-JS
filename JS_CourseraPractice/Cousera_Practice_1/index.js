function challenge7(){
    var number = prompt('Enter the number');
    var num = parseInt(number);
    if(!isNaN(num)){
        if(num===10){
            console.log('It;s fine');
        }else if(num<10){
            console.log('you entered less than 10');
            for(var i=0 ; i<10; i++){
                if(i===num){
                    console.log('The number is ' + i +'<- User enters this number');
                }else
                {
                    console.log('The number is ' + i);
                }
            }
        }else if(num>10){
            console.log('you entered more than 10');
        }
    }else{
        console.log('you entered an invalid number');
    }

}

challenge7();