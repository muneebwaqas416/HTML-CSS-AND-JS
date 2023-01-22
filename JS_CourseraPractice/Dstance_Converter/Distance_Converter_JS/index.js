var btn = document.getElementById('convert');

btn.addEventListener('submit' , function(evt){

    evt.preventDefault();
    const value_1 = parseFloat(document.getElementById('distance').value);

    if(value_1 && value_1>=1){
        const conversion = value_1*1.609;
        const rounded_value = conversion.toFixed(3);

        const answer = document.getElementById('answer');

        answer.innerHTML = `<h2> Converted Distance is ${rounded_value}</h2>`;

    }else{
        alert('Please Enter valid Value');
    }
    //alert(value_1);
});