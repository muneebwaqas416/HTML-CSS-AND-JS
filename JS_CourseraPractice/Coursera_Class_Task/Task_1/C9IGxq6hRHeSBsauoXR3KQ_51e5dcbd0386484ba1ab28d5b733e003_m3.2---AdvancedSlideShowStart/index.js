var curr_image = 0;
var arr=['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg'];

var container = document.getElementById('content');

var next = document.getElementById('next');

var previous = document.getElementById('previous');

next.addEventListener('click' , function(){
    //event.preventDefault();
    
    curr_image++;
    if(curr_image>arr.length-1){
        curr_image = 0;
    }
    var newimg = document.createElement('img');

    newimg.src = `slides/${arr[curr_image]}`;
     
    newimg.className = 'fadeinimage';

    container.appendChild(newimg);

    if(container.children.length>2){
        container.removeChild(container.children[0]);
    }
});

previous.addEventListener('click' , function(){
    curr_image--;
    if(curr_image<0){
        curr_image = arr.length-1;
    }
    var newimage = document.createElement('img');

    newimage.src = `slides/${arr[curr_image]}`;

    newimage.className = 'fadeinimage';

    container.appendChild(newimage);

    // if(container.children.length>2){
    //     container.removeChild(container.children);
    // }
});
