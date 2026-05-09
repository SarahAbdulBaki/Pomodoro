var image=["url('tomato1.png')","url('tomato2.png')","url('tomato3.png')","url('tomato4.png')","url('tomato5.png')","url('tomato6.png')","url('tomato7.png')"];
        var i=0;
        document.getElementById('mybtn').addEventListener('click',function(){
            if(i<=image.length-2){
                i=++i;
            }
            else{
                i=0;
            }
            document.querySelector('.background-image').style.backgroundImage=image[i];
        })